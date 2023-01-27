let _ = t => t,
  _t;
import React from 'react';
import { useVisConfig, useQueryId, useQueryIdFromDashboard } from '@looker/components-data';
import { CopyToClipboard, Space, IconButton } from '@looker/components';
import styled from 'styled-components';
import { sortObjectByKeys } from '../utils';
import { Code } from '@styled-icons/material/Code';
export const CodeToggle = ({
  config: configOverrides,
  query,
  dashboard,
  codeToggled,
  setCodeToggled
}) => {
  const {
    queryId: dashboardQueryId
  } = useQueryIdFromDashboard(dashboard);
  const {
    queryId
  } = useQueryId(query || dashboardQueryId);
  const {
    visConfig
  } = useVisConfig(queryId, configOverrides);
  const visConfigSorted = sortObjectByKeys(visConfig);
  const visConfigToDisplay = JSON.stringify(visConfigSorted, null, 2);
  return React.createElement(Space, {
    reverse: true
  }, React.createElement(IconButton, {
    icon: React.createElement(Code, null),
    label: "Show code",
    size: "large",
    toggle: codeToggled,
    toggleBackground: true,
    onClick: () => setCodeToggled(!codeToggled)
  }), codeToggled ? React.createElement(StyledCopyToClipboard, {
    content: visConfigToDisplay,
    success: "Copied to clipboard!"
  }) : '');
};
const StyledCopyToClipboard = styled(CopyToClipboard).withConfig({
  displayName: "CodeToggle__StyledCopyToClipboard",
  componentId: "sc-1ntpjxi-0"
})(_t || (_t = _`
  display: inline;
`));
//# sourceMappingURL=CodeToggle.js.map