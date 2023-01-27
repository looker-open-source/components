
import React from 'react';
import { ComponentsProvider } from '@looker/components';
import { useTheme } from 'styled-components';
import { Table } from '@looker/visualizations-table';
import { Area, Bar, Column, Sparkline, Line, Scatter, Pie } from '@looker/visualizations-visx';
import { SingleValue } from '@looker/visualizations-single-value';
import { ErrorBoundary } from '@looker/visualizations-adapters';
import has from 'lodash/has';
import { QueryError } from '../QueryError';
import { useTranslation } from '../utils';

export const defaultChartTypeMap = {
  area: Area,
  bar: Bar,
  column: Column,
  default: Table,
  line: Line,
  pie: Pie,
  scatter: Scatter,
  single_value: SingleValue,
  sparkline: Sparkline,
  table: Table
};
const VisualizationComponent = ({
  height,
  width,
  data: _data = [],
  fields,
  pivots,
  totals,
  config,
  chartTypeMap: _chartTypeMap = {}
}) => {
  const {
    t
  } = useTranslation('Visualization');
  if (fields !== null && fields !== void 0 && fields.measures.some(measure => measure.type === 'date')) {
    throw new Error(t("Measures of type 'date' are currently not supported"));
  }

  const completeChartTypeMap = Object.assign({}, defaultChartTypeMap, _chartTypeMap);
  if (has(completeChartTypeMap, (config === null || config === void 0 ? void 0 : config.type) || '')) {
    const ChartComponent = completeChartTypeMap[config === null || config === void 0 ? void 0 : config.type];
    return React.createElement(ChartComponent, {
      data: _data,
      config: config,
      fields: fields,
      totals: totals,
      pivots: pivots,
      width: width,
      height: height
    });
  } else {
    return React.createElement(QueryError, {
      message: t('No chart found for type "{{type}}"', {
        type: config === null || config === void 0 ? void 0 : config.type
      })
    });
  }
};
export const Visualization = props => {
  const theme = useTheme();
  if (!theme) {
    return React.createElement(ComponentsProvider, null, React.createElement(Visualization, props));
  }
  return React.createElement(ErrorBoundary, props, React.createElement(VisualizationComponent, props));
};
//# sourceMappingURL=Visualization.js.map