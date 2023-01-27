import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { dimensionSeriesColors } from './dimensionSeriesColors';
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures';
import { tabularResponse } from '../utils';
const tabularData = tabularResponse(mockSdkDataResponse);
describe('dimensionSeriesColors', () => {
  describe('series as object', () => {
    it('sets a unique color for up to 50 data points', () => {
      const {
        config: configResult
      } = dimensionSeriesColors({
        data: tabularData,
        fields: mockFields,
        config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
          series: {}
        })
      });
      expect(Object.values(configResult.series).length).toEqual(50);
      expect(configResult.series['2019-12-22']).toEqual({
        color: '#6c43e0'
      });
    });
    it('preserves user series overrides', () => {
      const {
        config: configResult
      } = dimensionSeriesColors({
        data: tabularData,
        fields: mockFields,
        config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
          series: {
            '2019-12-22': {
              color: '#00FF00'
            }
          }
        })
      });
      expect(configResult.series['2019-12-22']).toEqual({
        color: '#00FF00'
      });
    });
  });
  describe('series as array', () => {
    it('sets a unique color for up to 50 data points', () => {
      const {
        config: configResult
      } = dimensionSeriesColors({
        data: tabularData,
        fields: mockFields,
        config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
          series: []
        })
      });
      expect(configResult.series.length).toEqual(50);
      expect(configResult.series[0]).toEqual({
        color: '#6c43e0'
      });
    });
    it('preserves user series overrides', () => {
      const {
        config: configResult
      } = dimensionSeriesColors({
        data: tabularData,
        fields: mockFields,
        config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
          series: [{
            color: '#00FF00'
          }]
        })
      });
      expect(configResult.series[0]).toEqual({
        color: '#00FF00'
      });
    });
  });
});
//# sourceMappingURL=dimensionSeriesColors.spec.js.map