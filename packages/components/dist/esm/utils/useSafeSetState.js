import { useState, useCallback } from 'react';
import { useMounted } from './';
export const useSafeSetState = initialState => {
  const [state, setState] = useState(initialState);
  const mounted = useMounted();
  const safeSetState = useCallback(value => {
    if (mounted.current) setState(value);
  }, [mounted]);
  return [state, safeSetState];
};
//# sourceMappingURL=useSafeSetState.js.map