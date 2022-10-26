import { useRef, useEffect } from 'react';
export const usePreviousValue = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
//# sourceMappingURL=usePreviousValue.js.map