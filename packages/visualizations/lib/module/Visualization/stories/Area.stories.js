import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["config"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Visualization } from '../Visualization';
import { buildPivotFields, mockPivots, mockLineConfig, mockSdkConfigResponse, mockSdkPivotDataResponse, tabularPivotResponse, mockSdkDataResponse, mockSdkFieldsResponse, tabularResponse, buildChartConfig } from '@looker/visualizations-adapters';
export default {
  component: Visualization,
  title: 'Visualizations/Stories/Area'
};
const Template = _ref => {
  let {
      config: configProp
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const data = tabularResponse([...mockSdkDataResponse]);
  const config = buildChartConfig({
    config: _objectSpread(_objectSpread(_objectSpread({}, mockSdkConfigResponse), configProp), {}, {
      type: 'area'
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
export const Area = Template.bind({});
Area.args = {
  height: 600,
  width: 800,
  config: {
    series: [{
      visible: true
    }, {
      visible: true
    }]
  }
};
export const Stacked = Template.bind({});
Stacked.args = {
  height: 600,
  width: 800,
  config: {
    positioning: 'stacked',
    series: [{
      visible: true
    }, {
      visible: true
    }]
  }
};
export const StackedPercentage = Template.bind({});
StackedPercentage.args = {
  height: 600,
  width: 800,
  config: {
    positioning: 'percent',
    series: [{
      visible: true
    }, {
      visible: true
    }]
  }
};
export const Pivot = () => {
  const mockPivotFields = buildPivotFields({
    fields: mockSdkFieldsResponse,
    pivots: mockPivots
  });
  const mockPivotData = tabularPivotResponse({
    data: [...mockSdkPivotDataResponse],
    fields: mockSdkFieldsResponse,
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
    fields: mockPivotFields,
    data: mockPivotData,
    height: 600,
    width: 800
  });
};
Pivot.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Area.stories.js.map