import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { xAxis } from './xAxis';
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('xAxis', () => {
  test('config.x_axis is provided', () => {
    const x_axis = [{
      gridlines: false,
      label: 'label name',
      reversed: true,
      values: false
    }];
    const transformedConfig = xAxis({
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        x_axis
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.x_axis).toEqual(x_axis);
  });
  test('x axis customizations are provided, but config.x_axis is undefined', () => {
    const customizations = {
      show_x_axis_label: true,
      show_x_axis_ticks: false,
      x_axis_gridlines: false,
      x_axis_reversed: true,
      x_axis_label: 'default label'
    };
    const transformedConfig = xAxis({
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        x_axis: undefined
      }, customizations),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.x_axis).toEqual([{
      gridlines: customizations.x_axis_gridlines,
      label: customizations.x_axis_label,
      reversed: customizations.x_axis_reversed,
      values: customizations.show_x_axis_ticks
    }]);
  });
  test('config.x_axis and x axis customizations are all undefined', () => {
    const transformedConfig = xAxis({
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        show_x_axis_ticks: undefined,
        show_x_axis_label: undefined,
        x_axis_gridlines: undefined,
        x_axis_reversed: undefined,
        x_axis: undefined
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });

    expect(transformedConfig.config.x_axis).toEqual([{
      gridlines: true,
      label: 'Orders Created Date',
      reversed: false,
      values: true
    }]);
  });
});
//# sourceMappingURL=xAxis.spec.js.map