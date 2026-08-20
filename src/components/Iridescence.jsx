"use client";

import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef } from "react";

import "./Iridescence.css";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({
  color = [1, 1, 1],
  speed = 1,
  amplitude = 0.1,
  mouseReact = false,
  resolutionScale = 0.9,
  mobileResolutionScale = 0.58,
  maxFps = 60,
  mobileMaxFps = 36,
  ...rest
}) {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const colorKey = color.join(",");

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const parsedColor = colorKey.split(",").map(Number);
    const renderer = new Renderer({
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      dpr: 1,
      powerPreference: "low-power",
    });
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    let program;
    let resizeFrame = 0;
    let lastWidth = 0;
    let lastHeight = 0;
    let isVisible = true;
    let isPageVisible = document.visibilityState === "visible";
    let lastRenderTime = 0;
    const isStableViewportLayer = container.parentElement?.classList.contains(
      "site-iridescence-bg",
    );

    function applySize(width, height) {
      const scale = mobileQuery.matches
        ? mobileResolutionScale
        : resolutionScale;
      const scaledWidth = Math.max(1, Math.round(width * scale));
      const scaledHeight = Math.max(1, Math.round(height * scale));

      renderer.setSize(scaledWidth, scaledHeight);
      Object.assign(gl.canvas.style, {
        width: "100%",
        height: "100%",
      });
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height,
        );
      }
    }

    function resize(options = {}) {
      const force = options?.force === true;

      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        const width = Math.round(container.offsetWidth);
        const height = Math.round(container.offsetHeight);
        const widthChanged = Math.abs(width - lastWidth) > 1;
        const heightChanged = Math.abs(height - lastHeight) > 1;

        if (!force && isStableViewportLayer && heightChanged && !widthChanged) {
          return;
        }

        if (force || widthChanged || heightChanged) {
          lastWidth = width;
          lastHeight = height;
          applySize(width, height);
        }
      });
    }

    function handleMediaChange() {
      resize({ force: true });
    }

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);
    window.addEventListener("resize", resize, false);
    mobileQuery.addEventListener("change", handleMediaChange);
    resize({ force: true });

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...parsedColor) },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ),
        },
        uMouse: {
          value: new Float32Array([mousePos.current.x, mousePos.current.y]),
        },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animationId;

    function update(time) {
      animationId = requestAnimationFrame(update);
      if (!isVisible || !isPageVisible) {
        return;
      }

      const fps = mobileQuery.matches ? mobileMaxFps : maxFps;
      const frameInterval = 1000 / fps;
      if (time - lastRenderTime < frameInterval) {
        return;
      }

      lastRenderTime = time;
      program.uniforms.uTime.value = time * 0.001;
      renderer.render({ scene: mesh });
    }

    animationId = requestAnimationFrame(update);
    container.appendChild(gl.canvas);

    function handleMouseMove(event) {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }

    if (mouseReact) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? true;
      },
      {
        root: null,
        rootMargin: "180px",
        threshold: 0,
      },
    );
    visibilityObserver.observe(container);

    function handleVisibilityChange() {
      isPageVisible = document.visibilityState === "visible";
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationId);
      cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("resize", resize);
      mobileQuery.removeEventListener("change", handleMediaChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (mouseReact) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      if (gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    amplitude,
    colorKey,
    maxFps,
    mobileMaxFps,
    mobileResolutionScale,
    mouseReact,
    resolutionScale,
    speed,
  ]);

  return <div ref={containerRef} className="iridescence-container" {...rest} />;
}
