import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useCallback, useMemo, useState } from 'react';
import { useAnimationState, useCallbackRef, useID, usePopper, useForkedRef } from '../utils';
import { Portal } from '../Portal';
import { TooltipContent } from './TooltipContent';
import { TooltipSurface } from './TooltipSurface';

const noop = () => {};

export const useTooltip = ({
  canClose,
  content,
  isOpen: initializeOpen = false,
  width,
  maxWidth: _maxWidth = '30rem',
  textAlign,
  disabled,
  id,
  invert,
  triggerElement,
  placement: propsPlacement = 'bottom',
  delay: _delay = 'intricate',
  ariaDescribedById
}) => {
  const [isOpen, setIsOpen] = useState(initializeOpen);
  const {
    busy,
    className,
    renderDOM
  } = useAnimationState({
    enter: _delay,
    exit: 'none',
    isOpen
  });
  const [surfaceElement, surfaceCallbackRef] = useCallbackRef();
  const [newTriggerElement, setTriggerElement] = useState(null);
  const element = triggerElement !== null && triggerElement !== void 0 ? triggerElement : newTriggerElement;
  const handleClose = useCallback(() => {
    if (canClose && !canClose()) return;
    setIsOpen(false);
  }, [canClose]);
  const handleMouseOut = useCallback(event => {
    if (!isOpen) return;
    const related = event.relatedTarget;

    if (element && (element === related || element.contains(related))) {
      return;
    }

    if (surfaceElement && (surfaceElement === related || surfaceElement.contains(related))) {
      return;
    }

    window.requestAnimationFrame(() => {
      handleClose();
    });
  }, [element, surfaceElement, isOpen, handleClose]);
  const usePopperProps = useMemo(() => ({
    anchor: element,
    options: {
      modifiers: [{
        enabled: true,
        name: 'flip',
        options: {
          flipVariations: true
        }
      }],
      placement: propsPlacement
    }
  }), [element, propsPlacement]);
  const {
    placement,
    popperInstanceRef,
    style,
    targetRef
  } = usePopper(usePopperProps);
  const ref = useForkedRef(targetRef, surfaceCallbackRef);
  const guaranteedId = useID(id);
  return useMemo(() => {
    const popper = renderDOM && content && !disabled ? React.createElement(Portal, null, React.createElement(TooltipSurface, {
      "aria-busy": busy ? true : undefined,
      className: className,
      eventHandlers: {
        onMouseOut: handleMouseOut
      },
      placement: placement,
      ref: ref,
      style: style,
      maxWidth: _maxWidth,
      invert: invert
    }, React.createElement(TooltipContent, {
      role: "tooltip",
      id: guaranteedId,
      width: width,
      textAlign: textAlign
    }, content))) : null;

    const handleOpen = e => {
      setTriggerElement(e.currentTarget);
      const currentElement = triggerElement !== null && triggerElement !== void 0 ? triggerElement : e.currentTarget;

      if (!disabled && (!currentElement || !currentElement.dataset.notooltip)) {
        setIsOpen(true);
      }
    };

    const enabledDomProps = disabled ? {} : {
      'aria-describedby': renderDOM && content ? ariaDescribedById || guaranteedId : undefined,
      className: renderDOM ? 'hover' : undefined
    };
    return {
      domProps: _objectSpread(_objectSpread({}, enabledDomProps), {}, {
        onBlur: handleClose,
        onFocus: handleOpen,
        onMouseOut: handleMouseOut,
        onMouseOver: handleOpen,
        ref: noop
      }),
      popperInstanceRef,
      tooltip: popper
    };
  }, [busy, className, content, disabled, guaranteedId, handleClose, handleMouseOut, invert, _maxWidth, placement, popperInstanceRef, ref, renderDOM, style, textAlign, triggerElement, width, ariaDescribedById]);
};
//# sourceMappingURL=useTooltip.js.map