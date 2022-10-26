import { useRef, useEffect, useState } from 'react';
export const useSyncedState = prop => {
  const [state, setState] = useState(prop);
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (isMountedRef.current) {
      setState(prop);
    }

    isMountedRef.current = true;
  }, [prop]);
  return [state, setState];
};
//# sourceMappingURL=useSyncedState.js.map