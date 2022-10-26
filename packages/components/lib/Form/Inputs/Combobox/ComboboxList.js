import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["persistSelection", "closeOnSelect", "windowing", "cancelClickOutside", "indicator", "isMulti", "minWidth", "width"];
import { layout, reset, space, shouldForwardProp, typography } from '@looker/design-tokens';
import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components';
import once from 'lodash/once';
import throttle from 'lodash/throttle';
import { usePopover } from '../../../Popover';
import { listPadding } from '../../../List/utils';
import { useResize, useSafeLayoutEffect } from '../../../utils';
import { ComboboxContext, ComboboxMultiContext } from './ComboboxContext';
import { useBlur } from './utils/useBlur';
import { useKeyDown } from './utils/useKeyDown';
import { useListWidths } from './utils/useListWidths';
const ComboboxListInternal = forwardRef((_ref, ref) => {
  let {
    persistSelection = false,
    closeOnSelect = true,
    windowing = false,
    cancelClickOutside = false,
    indicator,
    isMulti,
    minWidth,
    width
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const context = useContext(ComboboxContext);
  const contextMulti = useContext(ComboboxMultiContext);
  const contextToUse = isMulti ? contextMulti : context;
  const {
    persistSelectionPropRef,
    closeOnSelectPropRef,
    windowingPropRef,
    indicatorPropRef,
    wrapperElement,
    isVisible,
    optionsRef,
    listRef,
    setListScrollPosition,
    setListClientRect,
    isScrollingRef,
    id
  } = contextToUse;
  if (persistSelectionPropRef) persistSelectionPropRef.current = persistSelection;
  if (closeOnSelectPropRef) closeOnSelectPropRef.current = closeOnSelect;
  if (indicatorPropRef) indicatorPropRef.current = indicator;
  useSafeLayoutEffect(() => {
    if (windowingPropRef) windowingPropRef.current = windowing;
    if (optionsRef) optionsRef.current = [];
    return () => {
      if (optionsRef) optionsRef.current = [];
    };
  }, [optionsRef, isVisible, windowing, windowingPropRef]);
  const handleKeyDown = useKeyDown();
  const useBlurSingle = useBlur(ComboboxContext);
  const useBlurMulti = useBlur(ComboboxMultiContext);
  const handleBlur = isMulti ? useBlurMulti : useBlurSingle;
  const widthProps = useListWidths({
    isVisible,
    minWidth,
    width,
    wrapperElement
  });
  const content = React.createElement(ComboboxUl, _extends({}, props, widthProps, {
    isMulti: isMulti,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    ref: ref,
    role: "listbox",
    id: `listbox-${id}`,
    tabIndex: -1
  }));

  const setOpen = isOpen => {
    if (!isOpen) {
      handleBlur();
    }
  };

  const {
    popover,
    contentContainer,
    popperInstanceRef
  } = usePopover({
    ariaLabel: props['aria-label'],
    cancelClickOutside,
    content,
    focusTrap: false,
    isOpen: isVisible,
    placement: 'bottom-start',
    setOpen,
    triggerElement: wrapperElement,
    triggerToggle: false
  });

  if (popperInstanceRef.current && listRef) {
    listRef.current = popperInstanceRef.current.state.elements.popper;
  }

  const valueLength = isMulti ? contextMulti.data.options.length : 1;
  useEffect(() => {
    popperInstanceRef.current && popperInstanceRef.current.update();
  }, [popperInstanceRef, valueLength]);
  const resizeListener = useCallback(() => {
    setListClientRect === null || setListClientRect === void 0 ? void 0 : setListClientRect(contentContainer === null || contentContainer === void 0 ? void 0 : contentContainer.getBoundingClientRect());
  }, [setListClientRect, contentContainer]);
  useResize(contentContainer, resizeListener);
  useEffect(() => {
    const setListClientRectOnce = once(containerElement => {
      setListClientRect && setListClientRect(containerElement.getBoundingClientRect());
    });

    const updateScrollState = containerElement => {
      setListClientRectOnce(containerElement);
      setListScrollPosition === null || setListScrollPosition === void 0 ? void 0 : setListScrollPosition(containerElement.scrollTop);
    };

    const timeoutValue = 50;
    let t;
    const scrollListener = throttle(() => {
      if (contentContainer) {
        updateScrollState(contentContainer);
        if (isScrollingRef) isScrollingRef.current = true;
        clearTimeout(t);
        t = setTimeout(() => {
          if (isScrollingRef) isScrollingRef.current = false;
        }, timeoutValue + 1);
      }
    }, timeoutValue);

    if (contentContainer) {
      contentContainer.addEventListener('scroll', scrollListener);
      updateScrollState(contentContainer);
    }

    return () => {
      contentContainer && contentContainer.removeEventListener('scroll', scrollListener);
      setListScrollPosition && setListScrollPosition(0);
      setListClientRect && setListClientRect(undefined);
    };
  }, [contentContainer]);
  return popover || null;
});
ComboboxListInternal.displayName = 'ComboboxListInternal';
export const ComboboxUl = styled.ul.withConfig({
  shouldForwardProp,
  displayName: "ComboboxList__ComboboxUl",
  componentId: "sc-1ban10u-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  list-style-type: none;
  margin: 0;
  max-height: 30rem;
  outline: none;
  position: relative;
  ${0}

  ${0}
`), reset, typography, space, layout, listPadding);
export const ComboboxList = props => React.createElement(ComboboxListInternal, _extends({}, props, {
  isMulti: false
}));
export const ComboboxMultiList = props => React.createElement(ComboboxListInternal, _extends({}, props, {
  isMulti: true
}));
//# sourceMappingURL=ComboboxList.js.map