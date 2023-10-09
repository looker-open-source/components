import { useContext } from 'react';
import { useSafeLayoutEffect } from '../../../../utils';
import { ComboboxContext, ComboboxMultiContext } from '../ComboboxContext';
export const useUpdateListRefs = ({
  persistSelection: _persistSelection = false,
  closeOnSelect: _closeOnSelect = true,
  windowing: _windowing = false,
  indicator,
  isMulti
}) => {
  const context = useContext(ComboboxContext);
  const contextMulti = useContext(ComboboxMultiContext);
  const contextToUse = isMulti ? contextMulti : context;
  const {
    persistSelectionPropRef,
    closeOnSelectPropRef,
    windowingPropRef,
    indicatorPropRef,
    isVisible,
    optionsRef
  } = contextToUse;
  if (persistSelectionPropRef) persistSelectionPropRef.current = _persistSelection;
  if (closeOnSelectPropRef) closeOnSelectPropRef.current = _closeOnSelect;
  if (indicatorPropRef) indicatorPropRef.current = indicator;
  useSafeLayoutEffect(() => {
    if (windowingPropRef) windowingPropRef.current = _windowing;
    if (optionsRef) optionsRef.current = [];
    return () => {
      if (optionsRef) optionsRef.current = [];
    };
  }, [optionsRef, isVisible, _windowing, windowingPropRef]);
};
//# sourceMappingURL=useUpdateListRefs.js.map