import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["content", "defaultOpen", "isOpen", "canClose", "onAfterClose", "onAfterOpen", "onClose", "setOpen", "Surface", "placement", "id"];
import React, { useState } from 'react';
import { Portal } from '../Portal';
import { useAnimationState, useControlWarn, useFocusTrap, useID, useScrollLock } from '../utils';
import { Backdrop } from './Backdrop';
import { DialogContext } from './DialogContext';
import { DialogSurface } from './DialogSurface';
export const useDialog = _ref => {
  let {
    content,
    defaultOpen = false,
    isOpen: controlledIsOpen,
    canClose,
    onAfterClose,
    onAfterOpen,
    onClose,
    setOpen: controlledSetOpen,
    Surface: CustomSurface,
    placement,
    id
  } = _ref,
      surfaceProps = _objectWithoutProperties(_ref, _excluded);

  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const isControlled = useControlWarn({
    controllingProps: ['setOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'useDialog'
  });

  if (Boolean(onClose) && Boolean(controlledSetOpen)) {
    throw new Error('useDialog does not support setting both `setOpen` and `onClose`. Use just `setOpen`');
  }

  const isPartiallyControlled = controlledIsOpen !== undefined;
  const isOpen = isPartiallyControlled || isControlled ? controlledIsOpen || false : uncontrolledIsOpen;
  const {
    busy,
    className,
    renderDOM
  } = useAnimationState({
    enter: defaultOpen ? 'none' : undefined,
    isOpen,
    onAfterEntered: onAfterOpen,
    onAfterExited: onAfterClose
  });
  const setOpen = isControlled && controlledSetOpen ? controlledSetOpen : setUncontrolledIsOpen;
  const [, focusRef] = useFocusTrap({
    clickOutsideDeactivates: true
  });
  const [, portalRef] = useScrollLock({
    ref: focusRef
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    if (canClose && !canClose()) return;
    setOpen(false);
    onClose && onClose();
  };

  const RenderSurface = CustomSurface || DialogSurface;
  const dialogId = useID(id);
  const dialog = renderDOM && React.createElement(DialogContext.Provider, {
    value: {
      busy,
      closeModal: handleClose,
      id: dialogId
    }
  }, React.createElement(Portal, {
    ref: portalRef
  }, React.createElement(Backdrop, {
    className: className,
    onClick: handleClose
  }), React.createElement(RenderSurface, _extends({
    id: dialogId,
    "aria-labelledby": `${dialogId}-heading`,
    "aria-busy": busy ? true : undefined,
    className: className,
    placement: placement
  }, surfaceProps), content)));
  return {
    dialog,
    domProps: {
      'aria-expanded': isOpen,
      onClick: handleOpen,
      role: 'button'
    },
    isOpen,
    setOpen
  };
};
//# sourceMappingURL=useDialog.js.map