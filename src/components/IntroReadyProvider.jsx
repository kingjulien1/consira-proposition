"use client";

import { createContext, useContext, useMemo, useState } from "react";

const IntroReadyContext = createContext(null);

export function IntroReadyProvider({ children }) {
  const [ready, setReady] = useState(false);
  const value = useMemo(() => ({ ready, setReady }), [ready]);

  return (
    <IntroReadyContext.Provider value={value}>
      {children}
    </IntroReadyContext.Provider>
  );
}

export function useIntroReady() {
  const context = useContext(IntroReadyContext);
  return context?.ready ?? true;
}

export function useIntroReadyControls() {
  const context = useContext(IntroReadyContext);
  return context ?? { ready: true, setReady: () => {} };
}
