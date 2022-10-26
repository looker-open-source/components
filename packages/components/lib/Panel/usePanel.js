import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["canClose", "content", "defaultOpen", "direction", "isOpen", "onAfterClose", "onAfterOpen", "onClose", "setOpen", "disableAnimation"];
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { VisuallyHidden } from '../VisuallyHidden';
import { useAnimationState, useControlWarn, useTrapStack } from '../utils';
import { PanelHeader } from './PanelHeader';
import { PanelsContext } from './Panels';
import { PanelSurface } from './PanelSurface';
import { PanelWindow } from './PanelWindow';
export const usePanel = _ref => {
  let {
    canClose,
    content,
    defaultOpen = false,
    direction = 'left',
    isOpen: controlledIsOpen,
    onAfterClose,
    onAfterOpen,
    onClose,
    setOpen: controlledSetOpen,
    disableAnimation
  } = _ref,
      headerProps = _objectWithoutProperties(_ref, _excluded);

  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const isControlled = useControlWarn({
    controllingProps: ['setOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'usePanel'
  });

  if (Boolean(onClose) && Boolean(controlledSetOpen)) {
    throw new Error('usePanel does not support setting both `setOpen` and `onClose`. Use just `setOpen`');
  }

  const isOpen = isControlled ? controlledIsOpen || false : uncontrolledIsOpen;
  const firstRender = useRef(true);
  const {
    busy,
    className,
    renderDOM
  } = useAnimationState({
    enter: disableAnimation || isOpen && firstRender.current ? 'none' : undefined,
    exit: disableAnimation ? 'none' : undefined,
    isOpen,
    onAfterEntered: onAfterOpen,
    onAfterExited: onAfterClose
  });
  firstRender.current = false;
  const setOpen = isControlled && controlledSetOpen ? controlledSetOpen : setUncontrolledIsOpen;

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    if (canClose && !canClose()) return;
    setOpen(false);
    onClose && onClose();
  };

  const setInitialFocus = useCallback(element => {
    element === null || element === void 0 ? void 0 : element.focus({
      preventScroll: true
    });
  }, []);
  const [, ref] = useTrapStack({
    context: PanelsContext
  });
  const visibilityTrigger = className === 'entered' && React.createElement(VisuallyHidden, {
    ref: ref
  });
  const panel = renderDOM && React.createElement(PanelWindow, null, React.createElement(PanelSurface, {
    "aria-busy": busy ? true : undefined,
    className: className,
    direction: direction,
    "data-panel": true,
    tabIndex: -1,
    ref: setInitialFocus
  }, visibilityTrigger, React.createElement(PanelHeader, _extends({
    onClose: handleClose
  }, headerProps)), React.createElement(PanelContent, null, content)));
  return {
    domProps: {
      'aria-expanded': isOpen,
      onClick: handleOpen,
      role: 'button'
    },
    isOpen,
    panel,
    setOpen
  };
};
const PanelContent = styled.div.withConfig({
  displayName: "usePanel__PanelContent",
  componentId: "sc-145ldfd-0"
})(_t || (_t = _`
  flex: 1;
  overflow: auto;
`));
//# sourceMappingURL=usePanel.js.map