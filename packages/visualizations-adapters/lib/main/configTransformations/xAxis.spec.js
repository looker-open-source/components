"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _xAxis = require("./xAxis");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('xAxis', function () {
  test('config.x_axis is provided', function () {
    var x_axis = [{
      gridlines: false,
      label: 'label name',
      reversed: true,
      values: false
    }];
    var transformedConfig = (0, _xAxis.xAxis)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        x_axis: x_axis
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.x_axis).toEqual(x_axis);
  });
  test('x axis customizations are provided, but config.x_axis is undefined', function () {
    var customizations = {
      show_x_axis_label: true,
      show_x_axis_ticks: false,
      x_axis_gridlines: false,
      x_axis_reversed: true,
      x_axis_label: 'default label'
    };
    var transformedConfig = (0, _xAxis.xAxis)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        x_axis: undefined
      }, customizations),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.x_axis).toEqual([{
      gridlines: customizations.x_axis_gridlines,
      label: customizations.x_axis_label,
      reversed: customizations.x_axis_reversed,
      values: customizations.show_x_axis_ticks
    }]);
  });
  test('config.x_axis and x axis customizations are all undefined', function () {
    var transformedConfig = (0, _xAxis.xAxis)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        show_x_axis_ticks: undefined,
        show_x_axis_label: undefined,
        x_axis_gridlines: undefined,
        x_axis_reversed: undefined,
        x_axis: undefined
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
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