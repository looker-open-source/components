import { useContext } from 'react';
import { useSafeLayoutEffect } from '../../../../utils';
export function useInputPropRefs({
  autoComplete = true,
  freeInput = false,
  inputReadOnly = false
}, context) {
  const {
    autoCompletePropRef,
    freeInputPropRef,
    inputReadOnlyPropRef
  } = useContext(context);
  useSafeLayoutEffect(() => {
    if (autoCompletePropRef) autoCompletePropRef.current = autoComplete;
  }, [autoComplete]);
  useSafeLayoutEffect(() => {
    if (freeInputPropRef) freeInputPropRef.current = freeInput;
  }, [freeInput]);
  useSafeLayoutEffect(() => {
    if (inputReadOnlyPropRef) inputReadOnlyPropRef.current = inputReadOnly;
  }, [inputReadOnly]);
}
//# sourceMappingURL=useInputPropRefs.js.map