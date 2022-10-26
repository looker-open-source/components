let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';

const TabPanelLayout = ({
  children,
  className,
  selected,
  isTabStop: _isTabStop = false
}) => selected ? React.createElement("div", {
  className: className,
  tabIndex: _isTabStop ? 0 : -1
}, children) : null;

export const TabPanel = styled(TabPanelLayout).withConfig({
  displayName: "TabPanel",
  componentId: "sc-1konee-0"
})(_t || (_t = _`
  height: 100%;
  outline: none;
`));
//# sourceMappingURL=TabPanel.js.map