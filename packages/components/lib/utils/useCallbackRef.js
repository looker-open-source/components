import { useCallback, useState } from 'react';
import { useForkedRef } from './useForkedRef';
export function useCallbackRef(forwardedRef) {
  const [currentElement, setCurrentElement] = useState(null);
  const callbackRef = useCallback(node => {
    setCurrentElement(node);
  }, []);
  const forkedRef = useForkedRef(forwardedRef, callbackRef);
  return [currentElement, forkedRef];
}
//# sourceMappingURL=useCallbackRef.js.map