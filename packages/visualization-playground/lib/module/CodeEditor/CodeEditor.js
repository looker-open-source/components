
import React from 'react';
import { useVisConfig, useQueryId, useQueryIdFromDashboard } from '@looker/components-data';
import { Box2 } from '@looker/components';
import { sortObjectByKeys } from '../utils';
import { CodeBlock } from '../CodeBlock';
export const CodeEditor = ({
  config: configOverrides,
  query,
  dashboard
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
  return React.createElement(Box2, {
    mt: "large",
    height: "100%",
    width: "100%"
  }, React.createElement(CodeBlock, {
    code: visConfigToDisplay,
    language: "json"
  }));
};
//# sourceMappingURL=CodeEditor.js.map