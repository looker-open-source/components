"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _yAxis2 = require("./yAxis");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('yAxis', function () {
  test('config.y_axis is provided', function () {
    var y_axis = [{
      gridlines: false,
      label: false,
      range: [0, 88],
      values: false
    }];
    var transformedConfig = (0, _yAxis2.yAxis)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        y_axis: y_axis
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.y_axis).toEqual(y_axis);
  });
  test('merges user overrides with raw sdk response', function () {
    var _transformedConfig$y_, _transformedConfig$y_2, _transformedConfig$y_3;
    var overrides = [{
      range: [-100, 100]
    }];

    var rawAxisResponse = [{
      minValue: 30,
      maxValue: 50
    }, {}];
    var _yAxis = (0, _yAxis2.yAxis)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          y_axes: rawAxisResponse,
          y_axis: overrides
        }),
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _yAxis.config;
    expect((_transformedConfig$y_ = transformedConfig.y_axis) === null || _transformedConfig$y_ === void 0 ? void 0 : _transformedConfig$y_.length).toEqual(rawAxisResponse.length);
    expect((_transformedConfig$y_2 = transformedConfig.y_axis) === null || _transformedConfig$y_2 === void 0 ? void 0 : _transformedConfig$y_2[0]).toEqual(expect.objectContaining({
      range: [-100, 100]
    }));

    expect((_transformedConfig$y_3 = transformedConfig.y_axis) === null || _transformedConfig$y_3 === void 0 ? void 0 : _transformedConfig$y_3[1]).toEqual(expect.objectContaining({
      range: ['auto', 'auto']
    }));
  });

  test('y axis customizations are provided, but config.y_axis is undefined', function () {
    var customizations = {
      y_axis_gridlines: false,
      y_axes: [{
        label: 'Gouda',
        orientation: 'blah',
        showLabels: false,
        showValues: false,
        tickDensity: 'custom',
        tickDensityCustom: 200,
        minValue: 0,
        maxValue: 4000
      }]
    };
    var transformedConfig = (0, _yAxis2.yAxis)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        y_axis: undefined
      }, customizations),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.y_axis).toEqual([{
      gridlines: customizations.y_axis_gridlines,
      label: customizations.y_axes[0].showLabels,
      range: [customizations.y_axes[0].minValue, customizations.y_axes[0].maxValue],
      values: customizations.y_axes[0].showValues
    }]);
  });
  test('config.y_axis and y axis customizations are all undefined', function () {
    var transformedConfig = (0, _yAxis2.yAxis)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        y_axes: undefined,
        y_axis: undefined,
        y_axis_gridlines: undefined
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.y_axis).toEqual([{
      gridlines: true,
      label: undefined,
      range: ['auto', 'auto'],
      values: true
    }]);
  });
});
//# sourceMappingURL=yAxis.spec.js.map