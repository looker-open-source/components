let _ = t => t,
  _t;
const _excluded = ["cancelClickOutside", "isMulti", "minWidth", "width"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { layout, reset, space, shouldForwardProp, typography } from '@looker/design-tokens';
import React, { forwardRef, useCallback, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import once from 'lodash/once';
import throttle from 'lodash/throttle';
import { Box } from '../../../../Layout';
import { usePopover } from '../../../../Popover';
import { listPadding } from '../../../../List/utils';
import { useResize } from '../../../../utils';
import { ComboboxContext, ComboboxMultiContext } from '../ComboboxContext';
import { useBlur } from '../utils/useBlur';
import { useKeyDown } from '../utils/useKeyDown';
import { useListWidths } from '../utils/useListWidths';
import { useUpdateListRefs } from '../utils/useUpdateListRefs';
const ComboboxListInternal = forwardRef((_ref, ref) => {
  let {
      cancelClickOutside = false,
      isMulti,
      minWidth,
      width
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const context = useContext(ComboboxContext);
  const contextMulti = useContext(ComboboxMultiContext);
  const contextToUse = isMulti ? contextMulti : context;
  const inlineContainerRef = useRef(null);
  const {
    wrapperElement,
    isVisible,
    listRef,
    setListScrollPosition,
    setListClientRect,
    isScrollingRef,
    id,
    shouldRenderListInline
  } = contextToUse;
  useUpdateListRefs(_objectSpread({
    isMulti
  }, props));
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
  const containerToUse = shouldRenderListInline ? inlineContainerRef.current : contentContainer;
  const valueLength = isMulti ? contextMulti.data.options.length : 1;
  useEffect(() => {
    popperInstanceRef.current && popperInstanceRef.current.update();
  }, [popperInstanceRef, valueLength]);
  const resizeListener = useCallback(() => {
    setListClientRect === null || setListClientRect === void 0 ? void 0 : setListClientRect(containerToUse === null || containerToUse === void 0 ? void 0 : containerToUse.getBoundingClientRect());
  }, [setListClientRect, containerToUse]);
  useResize(containerToUse, resizeListener);
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
      if (containerToUse) {
        updateScrollState(containerToUse);
        if (isScrollingRef) isScrollingRef.current = true;
        clearTimeout(t);
        t = setTimeout(() => {
          if (isScrollingRef) isScrollingRef.current = false;
        }, timeoutValue + 1);
      }
    }, timeoutValue);
    if (containerToUse) {
      containerToUse.addEventListener('scroll', scrollListener);
      updateScrollState(containerToUse);
    }
    return () => {
      containerToUse && containerToUse.removeEventListener('scroll', scrollListener);
      setListScrollPosition && setListScrollPosition(0);
      setListClientRect && setListClientRect(undefined);
    };
  }, [containerToUse]);
  if (shouldRenderListInline) {
    return React.createElement(Box, {
      ref: inlineContainerRef,
      position: "relative",
      overflowY: "auto",
      maxHeight: "100%",
      mt: "small"
    }, content);
  }
  return popover || null;
});
export const ComboboxUl = styled.ul.withConfig({
  shouldForwardProp,
  displayName: "ComboboxList__ComboboxUl",
  componentId: "sc-fgr1up-0"
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