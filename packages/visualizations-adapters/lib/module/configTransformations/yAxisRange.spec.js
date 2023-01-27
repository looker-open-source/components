import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { yAxisRange } from './yAxisRange';
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('yAxisRange', () => {
  test('config.y_axis is provided', () => {
    const y_axis = [{
      label: false,
      range: [0, 88]
    }];
    const transformedConfig = yAxisRange({
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        y_axis
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.y_axis).toEqual(y_axis);
  });
  test('merges user overrides with raw sdk response', () => {
    var _transformedConfig$y_, _transformedConfig$y_2, _transformedConfig$y_3;
    const overrides = [{
      range: ['auto', 10000]
    }];

    const rawAxisResponse = [{
      minValue: 0,
      maxValue: 4000
    }, {}];
    const {
      config: transformedConfig
    } = yAxisRange({
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        y_axes: rawAxisResponse,
        y_axis: overrides
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect((_transformedConfig$y_ = transformedConfig.y_axis) === null || _transformedConfig$y_ === void 0 ? void 0 : _transformedConfig$y_.length).toEqual(rawAxisResponse.length);
    expect((_transformedConfig$y_2 = transformedConfig.y_axis) === null || _transformedConfig$y_2 === void 0 ? void 0 : _transformedConfig$y_2[0]).toEqual(expect.objectContaining({
      range: ['auto', 10000]
    }));

    expect((_transformedConfig$y_3 = transformedConfig.y_axis) === null || _transformedConfig$y_3 === void 0 ? void 0 : _transformedConfig$y_3[1]).toEqual(expect.objectContaining({
      range: ['auto', 'auto']
    }));
  });

  test('sets y-axis range from default sdk values', () => {
    const response = {
      y_axes: [{
        minValue: 0,
        maxValue: 4000
      }]
    };
    const transformedConfig = yAxisRange({
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        y_axis: undefined
      }, response),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.y_axis).toEqual([{
      range: [response.y_axes[0].minValue, response.y_axes[0].maxValue]
    }]);
  });
  test('config.y_axis and y axis customizations are all undefined', () => {
    const transformedConfig = yAxisRange({
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        y_axes: undefined,
        y_axis: undefined
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.y_axis).toEqual([{
      range: ['auto', 'auto']
    }]);
  });
});
//# sourceMappingURL=yAxisRange.spec.js.map