let _ = t => t,
  _t;
const _excluded = ["canClose", "content", "defaultOpen", "direction", "isOpen", "onAfterClose", "onAfterOpen", "onClose", "setOpen", "disableAnimation"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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