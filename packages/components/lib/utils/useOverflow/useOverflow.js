import { useEffect, useState } from 'react';
import { useResize } from '../useResize';
import { useCallbackRef } from '../useCallbackRef';
export const useOverflow = ref => {
  const [element, callbackRef] = useCallbackRef(ref);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    if (element) {
      setHeight(element.offsetHeight);
    }
  };

  useResize(element, handleResize);
  useEffect(() => {
    if (element) {
      setHasOverflow(element.offsetHeight < element.scrollHeight);
    }
  }, [height, element]);
  return [hasOverflow, callbackRef];
};
//# sourceMappingURL=useOverflow.js.map