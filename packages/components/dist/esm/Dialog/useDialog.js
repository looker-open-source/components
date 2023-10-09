const _excluded = ["content", "defaultOpen", "isOpen", "canClose", "onAfterClose", "onAfterOpen", "onClose", "setOpen", "Surface", "placement", "id"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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