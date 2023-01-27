"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _dimensionSeriesColors = require("./dimensionSeriesColors");
var _fixtures = require("../fixtures");
var _utils = require("../utils");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var tabularData = (0, _utils.tabularResponse)(_fixtures.mockSdkDataResponse);
describe('dimensionSeriesColors', function () {
  describe('series as object', function () {
    it('sets a unique color for up to 50 data points', function () {
      var _dimensionSeriesColor = (0, _dimensionSeriesColors.dimensionSeriesColors)({
          data: tabularData,
          fields: _fixtures.mockFields,
          config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
            series: {}
          })
        }),
        configResult = _dimensionSeriesColor.config;
      expect(Object.values(configResult.series).length).toEqual(50);
      expect(configResult.series['2019-12-22']).toEqual({
        color: '#6c43e0'
      });
    });
    it('preserves user series overrides', function () {
      var _dimensionSeriesColor2 = (0, _dimensionSeriesColors.dimensionSeriesColors)({
          data: tabularData,
          fields: _fixtures.mockFields,
          config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
            series: {
              '2019-12-22': {
                color: '#00FF00'
              }
            }
          })
        }),
        configResult = _dimensionSeriesColor2.config;
      expect(configResult.series['2019-12-22']).toEqual({
        color: '#00FF00'
      });
    });
  });
  describe('series as array', function () {
    it('sets a unique color for up to 50 data points', function () {
      var _dimensionSeriesColor3 = (0, _dimensionSeriesColors.dimensionSeriesColors)({
          data: tabularData,
          fields: _fixtures.mockFields,
          config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
            series: []
          })
        }),
        configResult = _dimensionSeriesColor3.config;
      expect(configResult.series.length).toEqual(50);
      expect(configResult.series[0]).toEqual({
        color: '#6c43e0'
      });
    });
    it('preserves user series overrides', function () {
      var _dimensionSeriesColor4 = (0, _dimensionSeriesColors.dimensionSeriesColors)({
          data: tabularData,
          fields: _fixtures.mockFields,
          config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
            series: [{
              color: '#00FF00'
            }]
          })
        }),
        configResult = _dimensionSeriesColor4.config;
      expect(configResult.series[0]).toEqual({
        color: '#00FF00'
      });
    });
  });
});
//# sourceMappingURL=dimensionSeriesColors.spec.js.map