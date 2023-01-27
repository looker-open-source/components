

import React from 'react';
import { DEFAULT_EMPTY_FIELDS } from '@looker/visualizations-adapters';
import { useVisConfig, useQueryId, useQueryData, useQueryIdFromDashboard } from '@looker/components-data';
import { Series } from '../Series';
import { XAxis, YAxis } from '../axes';
import { Heading, Tabs2, Tab2 } from '@looker/components';
import { StyledCard } from '../StyledCard';
export const ConfigEditor = ({
  config: configOverrides,
  onConfigChange,
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
  const {
    fields = DEFAULT_EMPTY_FIELDS
  } = useQueryData(queryId);
  return React.createElement(StyledCard, null, React.createElement(Heading, {
    as: "h4"
  }, "2. Customize"), React.createElement(Tabs2, {
    distributed: true
  }, React.createElement(Tab2, {
    id: "series",
    label: "Series",
    p: "0"
  }, React.createElement(Series, {
    config: visConfig,
    fields: fields,
    onConfigChange: onConfigChange
  })), React.createElement(Tab2, {
    id: "axis",
    label: "Axis"
  }, React.createElement(XAxis, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), React.createElement(YAxis, {
    config: visConfig,
    onConfigChange: onConfigChange
  }))));
};
//# sourceMappingURL=ConfigEditor.js.map