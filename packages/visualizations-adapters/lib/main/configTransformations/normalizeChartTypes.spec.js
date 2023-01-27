"use strict";

var _normalizeChartTypes19 = require("./normalizeChartTypes");
var _fixtures = require("../fixtures");

describe('normalizeChartTypes', function () {
  describe('config.type ===', function () {
    test('default', function () {
      var config = {
        type: 'default'
      };
      var _normalizeChartTypes = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes.config;
      expect(transformedConfig.type).toEqual('default');
    });
    test('area', function () {
      var config = {
        type: 'area'
      };
      var _normalizeChartTypes2 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes2.config;
      expect(transformedConfig.type).toEqual('area');
    });
    test('bar', function () {
      var config = {
        type: 'bar'
      };
      var _normalizeChartTypes3 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes3.config;
      expect(transformedConfig.type).toEqual('bar');
    });
    test('column', function () {
      var config = {
        type: 'column'
      };
      var _normalizeChartTypes4 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes4.config;
      expect(transformedConfig.type).toEqual('column');
    });
    test('line', function () {
      var config = {
        type: 'line'
      };
      var _normalizeChartTypes5 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes5.config;
      expect(transformedConfig.type).toEqual('line');
    });
    test('pie', function () {
      var config = {
        type: 'pie'
      };
      var _normalizeChartTypes6 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes6.config;
      expect(transformedConfig.type).toEqual('pie');
    });
    test('scatter', function () {
      var config = {
        type: 'scatter'
      };
      var _normalizeChartTypes7 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes7.config;
      expect(transformedConfig.type).toEqual('scatter');
    });
    test('sparkline', function () {
      var config = {
        type: 'sparkline'
      };
      var _normalizeChartTypes8 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes8.config;
      expect(transformedConfig.type).toEqual('sparkline');
    });
    test('table', function () {
      var config = {
        type: 'table'
      };
      var _normalizeChartTypes9 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes9.config;
      expect(transformedConfig.type).toEqual('table');
    });
    test('looker_area', function () {
      var config = {
        type: 'looker_area'
      };
      var _normalizeChartTypes10 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes10.config;
      expect(transformedConfig.type).toEqual('area');
    });
    test('looker_bar', function () {
      var config = {
        type: 'looker_bar'
      };
      var _normalizeChartTypes11 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes11.config;
      expect(transformedConfig.type).toEqual('bar');
    });
    test('looker_column', function () {
      var config = {
        type: 'looker_column'
      };
      var _normalizeChartTypes12 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes12.config;
      expect(transformedConfig.type).toEqual('column');
    });
    test('looker_line', function () {
      var config = {
        type: 'looker_line'
      };
      var _normalizeChartTypes13 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes13.config;
      expect(transformedConfig.type).toEqual('line');
    });
    test('looker_pie', function () {
      var config = {
        type: 'looker_pie'
      };
      var _normalizeChartTypes14 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes14.config;
      expect(transformedConfig.type).toEqual('pie');
    });
    test('looker_scatter', function () {
      var config = {
        type: 'looker_scatter'
      };
      var _normalizeChartTypes15 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes15.config;
      expect(transformedConfig.type).toEqual('scatter');
    });
    test('looker_grid', function () {
      var config = {
        type: 'looker_grid'
      };
      var _normalizeChartTypes16 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes16.config;
      expect(transformedConfig.type).toEqual('table');
    });
    test('undefined', function () {
      var config = {
        type: undefined
      };
      var _normalizeChartTypes17 = (0, _normalizeChartTypes19.normalizeChartTypes)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _normalizeChartTypes17.config;
      expect(transformedConfig.type).toEqual('default');
    });
  });
  test('config.type is an unknown type', function () {
    var config = {
      type: 'gouda-cheese-chart'
    };
    var _normalizeChartTypes18 = (0, _normalizeChartTypes19.normalizeChartTypes)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _normalizeChartTypes18.config;
    expect(transformedConfig.type).toEqual('gouda-cheese-chart');
  });
});
//# sourceMappingURL=normalizeChartTypes.spec.js.map