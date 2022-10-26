import { useEffect, useRef, useContext } from 'react';
export function useAddOptionToContext(context, value, label, scrollIntoView) {
  const {
    optionsRef,
    windowingPropRef
  } = useContext(context);
  const indexRef = useRef(-1);
  useEffect(() => {
    const option = {
      label,
      scrollIntoView,
      value
    };
    const optionsRefCurrent = optionsRef && optionsRef.current;
    const windowing = windowingPropRef && windowingPropRef.current;

    if (optionsRefCurrent && !windowing) {
      if (indexRef.current > -1) {
        optionsRefCurrent.splice(indexRef.current, 0, option);
      } else {
        optionsRefCurrent.push(option);
      }
    }

    return () => {
      if (optionsRefCurrent && !windowing) {
        const index = optionsRefCurrent.indexOf(option);
        indexRef.current = index;
        optionsRefCurrent.splice(index, 1);
      }
    };
  }, [value, label, optionsRef, scrollIntoView, windowingPropRef]);
}
//# sourceMappingURL=useAddOptionToContext.js.map