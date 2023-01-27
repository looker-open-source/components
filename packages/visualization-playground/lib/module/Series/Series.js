import _defineProperty from "@babel/runtime/helpers/defineProperty";
let _ = t => t,
  _t;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { isNumeric } from '@looker/visualizations-adapters';
import { Fieldset, Grid, Divider } from '@looker/components';
import { SeriesColor } from './SeriesColor';
import { SeriesVisible } from './SeriesVisible';
import { SeriesLabel } from './SeriesLabel';
import { SeriesLineWidth } from './SeriesLineWidth';
import { SeriesPointShape } from './SeriesPointShape';
import { SeriesPointStyle } from './SeriesPointStyle';
import { SeriesSizeBy } from './SeriesSizeBy';
import { SeriesCellVisualization } from './SeriesCellVisualization';
import { SeriesValueFormat } from './SeriesValueFormat';
import partial from 'lodash/partial';
import set from 'lodash/set';
import styled from 'styled-components';
import has from 'lodash/has';

const renderFor = ['area', 'bar', 'column', 'line', 'pie', 'scatter', 'sparkline', 'table', 'single_value'];
export const Series = props => {
  const {
    config,
    fields,
    onConfigChange
  } = props;
  const {
    series = {}
  } = config;
  if (!renderFor.includes(config.type) && !has(config, 'series')) {
    return null;
  }
  const handleChange = (seriesKey, newSeries) => {
    const draft = set(_objectSpread({}, config), ['series', seriesKey], newSeries);
    onConfigChange(draft);
  };
  const seriesList = Array.isArray(series) ? series.map((s, i) => [String(i), s]) : Object.entries(series);
  return React.createElement(React.Fragment, null, seriesList.map(([key, s], i) => {
    const handleSeriesChange = partial(handleChange, key);

    const seriesDisabled = config.type === 'sparkline' && i > 0;
    return React.createElement(StyledFieldset, {
      legend: isNumeric(key) ? `Series: ${key}` : key,
      accordion: true,
      defaultOpen: seriesDisabled === false,
      key: key
    }, React.createElement(SeriesVisible, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), React.createElement(SeriesColor, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange,
      disabled: seriesDisabled
    }), React.createElement(SeriesLabel, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), React.createElement(SeriesLineWidth, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange,
      disabled: seriesDisabled
    }), React.createElement(SeriesValueFormat, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), React.createElement(Grid, {
      columns: 2
    }, React.createElement(SeriesPointStyle, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), React.createElement(SeriesPointShape, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    })), React.createElement(SeriesSizeBy, {
      chartType: config.type,
      fields: fields,
      series: s,
      onSeriesChange: handleSeriesChange
    }), React.createElement(SeriesCellVisualization, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), React.createElement(Divider, {
      my: "xxlarge"
    }));
  }));
};
const StyledFieldset = styled(Fieldset).withConfig({
  displayName: "Series__StyledFieldset",
  componentId: "sc-1wb80rx-0"
})(_t || (_t = _`
  legend {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`));
//# sourceMappingURL=Series.js.map