import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { buildChartConfig, mockSdkFieldsResponse, tabularResponse, mockSdkDataResponse, mockSdkConfigResponse, mockTotals } from '@looker/visualizations-adapters';
import { Visualization } from '../';
export default function Basic() {
  const data = tabularResponse([...mockSdkDataResponse]);
  const config = buildChartConfig({
    config: _objectSpread(_objectSpread({}, mockSdkConfigResponse), {}, {
      show_row_numbers: true,
      show_totals: true,
      type: 'table'
    }),
    data,
    fields: mockSdkFieldsResponse
  });
  return React.createElement(Visualization, {
    data: data,
    fields: mockSdkFieldsResponse,
    height: 600,
    totals: mockTotals,
    config: config
  });
}
//# sourceMappingURL=TableBasic.js.map