import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Flex } from '../Layout';
import { Portal } from '../Portal';
import { DialogContext } from '../Dialog';
import { OverlaySurface } from '../Overlay/OverlaySurface';
import { useCallbackRef, useFocusTrap, usePopper, useScrollLock, useForkedRef, useID } from '../utils';
import { usePopoverToggle } from './usePopoverToggle';
import { useVerticalSpace } from './useVerticalSpace';

const useOpenWithoutElement = (isOpen, element) => {
  const [openWithoutElem, setOpenWithoutElem] = useState(isOpen && element === null);
  useEffect(() => {
    if (element && openWithoutElem) {
      setOpenWithoutElem(false);
    }
  }, [openWithoutElem, element]);
  return openWithoutElem;
};

export const usePopover = ({
  'aria-haspopup': ariaHaspopup,
  canClose,
  content,
  disabled,
  pin: _pin = false,
  isOpen: controlledIsOpen = false,
  onClose,
  placement: propsPlacement = 'bottom',
  setOpen: controlledSetOpen,
  triggerElement,
  triggerToggle: _triggerToggle = true,
  focusTrap: _focusTrap = true,
  scrollLock: _scrollLock = true,
  cancelClickOutside,
  ref,
  surface,
  width,
  id,
  ariaLabel
}) => {
  const [scrollElement, scrollRef] = useScrollLock({
    disabled: !_scrollLock
  });
  const [, focusRef] = useFocusTrap({
    disabled: !_focusTrap
  });
  const [newTriggerElement, callbackRef] = useCallbackRef(ref);
  const element = typeof triggerElement === 'undefined' ? newTriggerElement : triggerElement;
  const [isOpen, setOpen] = usePopoverToggle({
    canClose,
    cancelClickOutside,
    isOpen: controlledIsOpen,
    setOpen: controlledSetOpen,
    triggerToggle: _triggerToggle
  }, scrollElement, element);
  const openWithoutElem = useOpenWithoutElement(isOpen, element);

  const handleOpen = event => {
    if (!element) {
      callbackRef(event.currentTarget);
    }

    if (!disabled) {
      setOpen(true);
    }

    event.stopPropagation();
    event.preventDefault();
  };

  const handleClose = useCallback(() => {
    if (canClose && !canClose()) return;
    setOpen(false);
    onClose && onClose();
  }, [canClose, onClose, setOpen]);
  const usePopperProps = useMemo(() => ({
    anchor: element,
    options: {
      modifiers: [{
        enabled: !_pin,
        name: 'flip',
        options: {
          flipVariations: true,
          flipVariationsByContent: true
        }
      }, {
        enabled: true,
        name: 'eventListeners',
        options: {
          scroll: false
        }
      }],
      placement: propsPlacement
    }
  }), [element, _pin, propsPlacement]);
  const {
    placement,
    popperInstanceRef,
    style,
    targetRef
  } = usePopper(usePopperProps);
  const verticalSpace = useVerticalSpace(element, _pin, propsPlacement, isOpen, style);
  const surfaceRef = useForkedRef(targetRef, focusRef);
  const [containerElement, contentContainerRef] = useCallbackRef();
  const SurfaceComponent = surface || OverlaySurface;

  const _id = useID(id);

  const contextValue = useMemo(() => ({
    closeModal: handleClose,
    id: _id
  }), [handleClose, _id]);
  const popover = content && !openWithoutElem && isOpen && !disabled && React.createElement(DialogContext.Provider, {
    value: contextValue
  }, React.createElement(Portal, {
    ref: scrollRef
  }, React.createElement(SurfaceComponent, {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabel ? undefined : `${_id}-heading`,
    "aria-modal": true,
    maxWidth: width,
    placement: placement,
    ref: surfaceRef,
    role: "dialog",
    style: style
  }, React.createElement(Flex, {
    alignItems: "flex-start",
    borderRadius: "inherit",
    flexDirection: "column",
    id: _id,
    maxHeight: `calc(${verticalSpace - 10}px - 1rem)`,
    overflowY: "auto",
    ref: contentContainerRef
  }, content))));
  return {
    contentContainer: containerElement,
    domProps: {
      'aria-expanded': isOpen,
      'aria-haspopup': content && !disabled ? ariaHaspopup : false,
      onClick: handleOpen,
      ref: callbackRef
    },
    isOpen,
    open: handleOpen,
    popover,
    popperInstanceRef,
    ref: callbackRef
  };
};
//# sourceMappingURL=usePopover.js.map