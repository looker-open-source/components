import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { legendValue } from './legendValue';
import { mockPieConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('legendValue', () => {
  test('default value', () => {
    const {
      config
    } = legendValue({
      config: _objectSpread({}, mockPieConfig),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(config.legend).toEqual({
      position: 'bottom',
      type: 'legend',
      value: 'label'
    });
  });
  describe('config.label_type ===', () => {
    test('lab', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        label_type: 'lab',
        legend: undefined
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label');
      }
    });
    test('labVal', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        label_type: 'labVal',
        legend: undefined
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_value');
      }
    });
    test('val', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        label_type: 'val',
        legend: undefined
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('value');
      }
    });
    test('per', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        label_type: 'per',
        legend: undefined
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('percent');
      }
    });
    test('labPer', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        label_type: 'labPer',
        legend: undefined
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_percent');
      }
    });
  });
  describe('config.legend.value ===', () => {
    test('"label"', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        legend: {
          value: 'label'
        }
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label');
      }
    });
    test('"value"', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        legend: {
          value: 'value'
        }
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('value');
      }
    });
    test('"percent"', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        legend: {
          value: 'percent'
        }
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('percent');
      }
    });
    test('"label_value"', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        legend: {
          value: 'label_value'
        }
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_value');
      }
    });
    test('"label_percent"', () => {
      const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
        legend: {
          value: 'label_percent'
        }
      });
      const {
        config: transformedConfig
      } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_percent');
      }
    });
  });
  test('config.legend === false', () => {
    const config = _objectSpread(_objectSpread({}, mockPieConfig), {}, {
      legend: false
    });
    const {
      config: transformedConfig
    } = legendValue({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.legend).toEqual(false);
  });
});
//# sourceMappingURL=legendValue.spec.js.map