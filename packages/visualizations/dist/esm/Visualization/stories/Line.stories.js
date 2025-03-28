const _excluded = ["config"],
  _excluded2 = ["orders.average_total_amount_of_order_usd"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
      y_axis: undefined,
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