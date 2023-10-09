/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useContext } from 'react';
import { useSafeLayoutEffect } from '../../../../utils';
import { ComboboxContext, ComboboxMultiContext } from '../ComboboxContext';
import type { ComboboxListInternalProps } from '../types';

export const useUpdateListRefs = ({
  // when true, and the list opens again, the option with a matching value will be
  // automatically highlighted.
  persistSelection = false,
  // closes the list after an option is selected
  closeOnSelect = true,
  // disables the optionsRef behavior, to be handled externally (support keyboard nav in long lists)
  windowing = false,
  indicator,
  isMulti,
}: ComboboxListInternalProps) => {
  const context = useContext(ComboboxContext);
  const contextMulti = useContext(ComboboxMultiContext);
  const contextToUse = isMulti ? contextMulti : context;
  const {
    persistSelectionPropRef,
    closeOnSelectPropRef,
    windowingPropRef,
    indicatorPropRef,
    isVisible,
    optionsRef,
  } = contextToUse;
  // Update context prop refs
  if (persistSelectionPropRef)
    persistSelectionPropRef.current = persistSelection;
  if (closeOnSelectPropRef) closeOnSelectPropRef.current = closeOnSelect;
  if (indicatorPropRef) indicatorPropRef.current = indicator;

  // WEIRD? Reset the options ref every render so that they are always
  // accurate and ready for keyboard navigation handlers. Using layout
  // effect to schedule this effect before the ComboboxOptions push into
  // the array
  useSafeLayoutEffect(() => {
    if (windowingPropRef) windowingPropRef.current = windowing;
    if (optionsRef) optionsRef.current = [];
    return () => {
      if (optionsRef) optionsRef.current = [];
    };
    // Without isVisible in the dependency array,
    // updated options won't go into the optionsRef array
  }, [optionsRef, isVisible, windowing, windowingPropRef]);
};
