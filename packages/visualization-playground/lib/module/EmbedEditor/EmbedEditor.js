

import React from 'react';
import { FieldText, FieldSelect, Heading, Fieldset, Grid } from '@looker/components';
import { FieldInfo } from '../FieldInfo';
import { SUPPORTED_CHART_TYPES } from '@looker/visualizations-adapters';
import { useVisConfig, useQueryId, useQueryIdFromDashboard } from '@looker/components-data';
import { Legend } from '../Legend';
import { RenderNullValues } from '../RenderNullValues';
import { Tooltips } from '../Tooltips';
import { Positioning } from '../Positioning';
import { TruncateText } from '../TruncateText';
import { TruncateHeader } from '../TruncateHeader';
import { StyledCard } from '../StyledCard';
import { ShowTotals } from '../ShowTotals';
import { ShowRowTotals } from '../ShowRowTotals';

export const EmbedEditor = ({
  width,
  height,
  setWidth,
  setHeight,
  config: configOverrides,
  onConfigChange,
  query,
  dashboard
}) => {
  const handleWidthChange = e => {
    const value = e.target.value;
    setWidth(value);
  };
  const handleHeightChange = e => {
    const value = e.target.value;
    setHeight(value);
  };
  const {
    queryId: dashboardQueryId
  } = useQueryIdFromDashboard(dashboard);
  const {
    queryId
  } = useQueryId(query || dashboardQueryId);
  const {
    visConfig
  } = useVisConfig(queryId, configOverrides);
  return React.createElement(StyledCard, null, React.createElement(Heading, {
    as: "h4"
  }, "1. Settings"), React.createElement(FieldSelect, {
    name: "type",
    label: "Chart Type",
    onChange: t => {
      onConfigChange({
        type: t
      });
    },
    value: visConfig.type,
    options: [...Object.values(SUPPORTED_CHART_TYPES).map(t => ({
      value: t
    })), {
      value: 'radar',
      label: 'Custom Vis: Radar'
    }, {
      value: 'turtle_table',
      label: 'Custom Vis: Turtles'
    }]
  }), React.createElement(Fieldset, {
    inline: true
  }, React.createElement(FieldText, {
    label: "Width",
    value: width,
    onChange: handleWidthChange,
    detail: React.createElement(FieldInfo, {
      content: "'auto' spans available width. Otherwise accepts a number to set pixel value."
    })
  }), React.createElement(FieldText, {
    label: "Height",
    value: height,
    onChange: handleHeightChange,
    detail: React.createElement(FieldInfo, {
      content: "'auto' falls back to default value hard-coded in the charts. Otherwise accepts a number to set pixel value."
    })
  })), React.createElement(Legend, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), React.createElement(Fieldset, {
    inline: true
  }, React.createElement(Grid, null, React.createElement(Tooltips, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), React.createElement(RenderNullValues, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), React.createElement(Positioning, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), React.createElement(TruncateText, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), React.createElement(TruncateHeader, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), React.createElement(ShowTotals, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), React.createElement(ShowRowTotals, {
    config: visConfig,
    onConfigChange: onConfigChange
  }))));
};
//# sourceMappingURL=EmbedEditor.js.map