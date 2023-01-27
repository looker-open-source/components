import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { legendPosition } from './legendPosition';
import { mockBarConfig, mockSdkDataResponse, mockFields } from '../fixtures';
describe('legendPosition', () => {
  describe('config.hide_legend ===', () => {
    test('true', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        hide_legend: true
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual(false);
    });
    test('false', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        hide_legend: false
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'bottom'
      });
    });
  });
  describe('config.legend_position ===', () => {
    test('bottom', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'bottom'
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'bottom'
      });
    });
    test('center', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'center'
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'bottom'
      });
    });
    test('left', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'left'
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'left'
      });
    });
    test('right', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'right'
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'right'
      });
    });
    test('top', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'top'
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'top'
      });
    });
  });
  describe('config.legend.position ===', () => {
    test('bottom', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: {
          position: 'bottom'
        }
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'bottom'
      });
    });
    test('left', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: {
          position: 'left'
        }
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'left'
      });
    });
    test('right', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: {
          position: 'right'
        }
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'right'
      });
    });
    test('top', () => {
      const config = _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        legend: {
          position: 'top'
        }
      });
      const {
        config: transformedConfig
      } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse
      });
      expect(transformedConfig.legend).toEqual({
        position: 'top'
      });
    });
  });
});
//# sourceMappingURL=legendPosition.spec.js.map