import { useEffect, useRef } from 'react';
export function useMounted() {
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    return function cleanup() {
      mounted.current = false;
    };
  }, []);
  return mounted;
}
//# sourceMappingURL=useMounted.js.map