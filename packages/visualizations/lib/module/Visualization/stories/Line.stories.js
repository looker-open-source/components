import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["config"],
  _excluded2 = ["orders.average_total_amount_of_order_usd"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Visualization } from '../Visualization';
import { buildChartConfig, buildPivotFields, mockPivots, mockLineConfig, mockSdkConfigResponse, mockSdkDataResponse, mockSdkFieldsResponse, mockSdkPivotDataResponse, tabularResponse, tabularPivotResponse } from '@looker/visualizations-adapters';
export default {
  component: Visualization,
  title: 'Visualizations/Stories/Line'
};
const Template = _ref => {
  let {
      config: configProp
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const data = tabularResponse([...mockSdkDataResponse]);
  const config = buildChartConfig({
    config: _objectSpread(_objectSpread(_objectSpread({}, mockSdkConfigResponse), configProp), {}, {
      type: 'line'
    }),
    data,
    fields: mockSdkFieldsResponse
  });
  return React.createElement(Visualization, _extends({
    config: config,
    data: data,
    fields: mockSdkFieldsResponse,
    height: 600,
    width: 800
  }, restProps));
};
export const Line = Template.bind({});
Line.args = {
  config: {
    series: [{
      visible: true
    }, {
      visible: true
    }]
  }
};
export const PointStyleFilled = Template.bind({});
PointStyleFilled.args = {
  config: {
    series: [{
      style: 'filled'
    }, {
      style: 'filled'
    }]
  }
};
export const PointStyleNone = Template.bind({});
PointStyleNone.args = {
  config: {
    series: [{
      style: 'none'
    }, {
      style: 'none'
    }]
  }
};
export const Pivot = () => {
  const mockPivotFields = buildPivotFields({
    fields: _objectSpread({}, mockSdkFieldsResponse),
    pivots: mockPivots
  });
  const mockPivotData = tabularPivotResponse({
    data: [...mockSdkPivotDataResponse],
    fields: _objectSpread({}, mockSdkFieldsResponse),
    pivots: mockPivots
  });
  const config = buildChartConfig({
    config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
      type: 'area'
    }),
    data: mockPivotData,
    fields: mockPivotFields
  });
  return React.createElement(Visualization, {
    config: config,
    data: mockPivotData,
    fields: mockPivotFields,
    height: 600,
    width: 800
  });
};
Pivot.parameters = {
  storyshots: {
    disable: true
  }
};
export const DefaultYAxisSingleMeasure = () => {
  const fields = _objectSpread(_objectSpread({}, mockSdkFieldsResponse), {}, {
    measures: mockSdkFieldsResponse.measures.slice(0, 1)
  });

  const data = tabularResponse([...mockSdkDataResponse].map(datum => {
    const {
        'orders.average_total_amount_of_order_usd': _ordersAverageEtc
      } = datum,
      rest = _objectWithoutProperties(datum, _excluded2);
    return rest;
  }));
  const config = buildChartConfig({
    config: _objectSpread(_objectSpread({}, mockSdkConfigResponse), {}, {
      y_axes: undefined,
      type: 'line'
    }),
    data,
    fields
  });
  return React.createElement(Visualization, {
    config: config,
    data: data,
    fields: fields,
    height: 600,
    width: 800
  });
};
//# sourceMappingURL=Line.stories.js.map