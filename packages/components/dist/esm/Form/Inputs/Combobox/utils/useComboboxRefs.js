import { useRef } from 'react';
import { useCallbackRef } from '../../../../utils';
export function useComboboxRefs(forwardedRef) {
  const [wrapperElement, ref] = useCallbackRef(forwardedRef);
  const optionsRef = useRef([]);
  const listRef = useRef(null);
  const autoCompletePropRef = useRef(true);
  const inputReadOnlyPropRef = useRef(false);
  const persistSelectionPropRef = useRef(false);
  const closeOnSelectPropRef = useRef(true);
  const windowingPropRef = useRef(false);
  const isScrollingRef = useRef(false);
  const indicatorPropRef = useRef(false);
  const freeInputPropRef = useRef(false);
  return {
    autoCompletePropRef,
    closeOnSelectPropRef,
    freeInputPropRef,
    indicatorPropRef,
    inputReadOnlyPropRef,
    isScrollingRef,
    listRef,
    optionsRef,
    persistSelectionPropRef,
    ref,
    windowingPropRef,
    wrapperElement
  };
}
//# sourceMappingURL=useComboboxRefs.js.map