import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { barPositioning } from './barPositioning';
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('barPositioning', () => {
  test('default', () => {
    const config = _objectSpread({}, mockBarConfig);
    delete config.positioning;
    expect(barPositioning({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    }).config.positioning).toEqual('grouped');
  });
  describe('config.positioning ===', () => {
    test('grouped', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        positioning: 'grouped'
      });
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('grouped');
    });
    test('percent', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        positioning: 'percent'
      });
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('percent');
    });
    test('stacked', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        positioning: 'stacked'
      });
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('stacked');
    });
  });
  describe('config.stacking ===', () => {
    test('grouped', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        stacking: 'grouped'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('grouped');
    });
    test('stacked', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        stacking: 'stacked'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('stacked');
    });
    test('percent', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        stacking: 'percent'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('percent');
    });
    test('overlay', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        stacking: 'overlay'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('grouped');
    });
    test('normal', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        stacking: 'normal'
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('stacked');
    });
    test("''", () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        stacking: ''
      });
      delete config.positioning;
      const {
        config: transformedConfig
      } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.positioning).toEqual('grouped');
    });
  });
});
//# sourceMappingURL=barPositioning.spec.js.map