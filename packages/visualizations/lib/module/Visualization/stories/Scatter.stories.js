import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["config"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Visualization } from '../Visualization';
import { buildChartConfig, mockSdkConfigResponse, mockSdkDataResponse, mockSdkFieldsResponse, tabularResponse } from '@looker/visualizations-adapters';
export default {
  component: Visualization,
  title: 'Visualizations/Stories/Scatter'
};
const Template = _ref => {
  let {
      config: configProp
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const data = tabularResponse([...mockSdkDataResponse]);
  const config = buildChartConfig({
    config: _objectSpread(_objectSpread(_objectSpread({}, mockSdkConfigResponse), configProp), {}, {
      type: 'scatter'
    }),
    data,
    fields: mockSdkFieldsResponse
  });
  return React.createElement(Visualization, _extends({
    config: config,
    data: data,
    fields: mockSdkFieldsResponse
  }, restProps));
};
export const Scatter = Template.bind({});
Scatter.args = {
  height: 600,
  width: 800
};
export const SizeBy = Template.bind({});
SizeBy.args = {
  height: 600,
  width: 800,
  config: {
    series: {
      'orders.count': {
        size_by: 'orders.average_total_amount_of_order_usd'
      }
    },
    y_axis: [{
      range: [20, 75]
    }]
  }
};
//# sourceMappingURL=Scatter.stories.js.map