import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import { TrapStackProvider } from '@looker/components-providers';
import React, { createContext } from 'react';
import styled from 'styled-components';
export const PanelsContext = createContext({});
PanelsContext.displayName = 'PanelsContext';

const activatePanel = ({
  element
}) => {
  const panel = element.closest('[data-panel]');
  const container = element.closest('[data-panels]');

  if (panel && container) {
    container.style.visibility = 'hidden';
    panel.style.visibility = 'visible';
  }

  return () => {
    if (panel && container) {
      panel.style.visibility = '';
      container.style.visibility = '';
    }
  };
};

export const Panels = styled(props => {
  return React.createElement(TrapStackProvider, {
    activate: activatePanel,
    context: PanelsContext
  }, React.createElement("div", _extends({}, props, {
    "data-panels": true
  })));
}).withConfig({
  displayName: "Panels",
  componentId: "sc-1214ocx-0"
})(_t || (_t = _`
  height: 100%;
  position: relative;
  width: 100%;
`));
//# sourceMappingURL=Panels.js.map