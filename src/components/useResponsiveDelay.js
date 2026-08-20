"use client";

import { useLayoutEffect, useState } from "react";

export function useResponsiveDelay(mobileDelay, desktopDelay = 0, query = "(max-width: 767px)") {
  const [delay, setDelay] = useState(desktopDelay);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(query);

    function update() {
      setDelay(mediaQuery.matches ? mobileDelay : desktopDelay);
    }

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, [desktopDelay, mobileDelay, query]);

  return delay;
}
