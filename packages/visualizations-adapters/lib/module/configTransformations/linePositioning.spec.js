import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { linePositioning } from './linePositioning';
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('linePositioning', () => {
  test('default', () => {
    const config = _objectSpread({}, mockLineConfig);
    delete config.positioning;
    expect(linePositioning({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    }).config.positioning).toEqual('overlay');
  });
  describe('config.positioning ===', () => {
    test('grouped', () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        positioning: 'overlay'
      });
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('overlay');
    });
    test('percent', () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        positioning: 'percent'
      });
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('percent');
    });
    test('stacked', () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        positioning: 'stacked'
      });
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('stacked');
    });
  });
  describe('config.stacking ===', () => {
    test('grouped', () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        stacking: 'grouped'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('overlay');
    });
    test('stacked', () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        stacking: 'stacked'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('stacked');
    });
    test('percent', () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        stacking: 'percent'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('percent');
    });
    test('overlay', () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        stacking: 'overlay'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('overlay');
    });
    test('normal', () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        stacking: 'normal'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('stacked');
    });
    test("''", () => {
      const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        stacking: ''
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('overlay');
    });
  });
});
//# sourceMappingURL=linePositioning.spec.js.map