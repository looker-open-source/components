import React, { createContext, useContext, useEffect, useLayoutEffect as reactUseLayoutEffect } from 'react';
export const SafeSSRContext = createContext(false);
export const SafeSSRProvider = ({
  children
}) => {
  return React.createElement(SafeSSRContext.Provider, {
    value: true
  }, children);
};
export const useSafeLayoutEffect = (...args) => {
  const value = useContext(SafeSSRContext);
  const isSSR = value || typeof window === 'undefined';
  const useLayoutEffect = isSSR ? useEffect : reactUseLayoutEffect;
  return useLayoutEffect(...args);
};
//# sourceMappingURL=useSafeLayoutEffect.js.map