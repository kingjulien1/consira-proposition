const glowPointerState = new WeakMap();

function getPointerPercent(event) {
  const rect = event.currentTarget.getBoundingClientRect();

  return {
    x: ((event.clientX - rect.left) / rect.width) * 100,
    y: ((event.clientY - rect.top) / rect.height) * 100,
  };
}

function animateGlowPosition(element) {
  const state = glowPointerState.get(element);

  if (!state) {
    return;
  }

  state.currentX += (state.targetX - state.currentX) * 0.18;
  state.currentY += (state.targetY - state.currentY) * 0.18;

  element.style.setProperty("--spotlight-x", `${state.currentX}%`);
  element.style.setProperty("--spotlight-y", `${state.currentY}%`);

  const distance =
    Math.abs(state.targetX - state.currentX) +
    Math.abs(state.targetY - state.currentY);

  if (distance < 0.04) {
    state.currentX = state.targetX;
    state.currentY = state.targetY;
    element.style.setProperty("--spotlight-x", `${state.currentX}%`);
    element.style.setProperty("--spotlight-y", `${state.currentY}%`);
    state.frame = null;
    return;
  }

  state.frame = window.requestAnimationFrame(() => animateGlowPosition(element));
}

export function updateSmoothGlowPosition(event) {
  const element = event.currentTarget;
  const { x, y } = getPointerPercent(event);
  const state = glowPointerState.get(element);

  if (state) {
    state.targetX = x;
    state.targetY = y;

    if (!state.frame) {
      state.frame = window.requestAnimationFrame(() =>
        animateGlowPosition(element),
      );
    }

    return;
  }

  glowPointerState.set(element, {
    targetX: x,
    targetY: y,
    currentX: 50,
    currentY: 50,
    frame: window.requestAnimationFrame(() => animateGlowPosition(element)),
  });
}
