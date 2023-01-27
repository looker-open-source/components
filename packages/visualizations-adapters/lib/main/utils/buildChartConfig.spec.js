"use strict";

var _buildChartConfig = require("./buildChartConfig");
var _fixtures = require("../fixtures");

describe('buildChartConfig', function () {
  it('normalizes chart type strings', function () {
    var lineConfig = (0, _buildChartConfig.buildChartConfig)({
      config: {
        type: 'looker_line'
      }
    });
    expect(lineConfig.type).toEqual('line');
    var barConfig = (0, _buildChartConfig.buildChartConfig)({
      config: {
        type: 'looker_bar'
      }
    });
    expect(barConfig.type).toEqual('bar');
    var scatterConfig = (0, _buildChartConfig.buildChartConfig)({
      config: {
        type: 'looker_scatter'
      }
    });
    expect(scatterConfig.type).toEqual('scatter');
  });
  it('removes unsupported config values from final output', function () {
    var config = (0, _buildChartConfig.buildChartConfig)({
      config: {
        defaults_version: 2
      }
    });
    expect(config.defaults_version).toEqual(undefined);
  });
  it('passes through deeply nested user overrides', function () {
    var config = (0, _buildChartConfig.buildChartConfig)({
      config: {
        type: 'line',
        series: {
          'orders.count': {
            color: '#FF5733',
            label: 'TEST LABEL'
          }
        }
      },
      data: _fixtures.mockData,
      fields: _fixtures.mockFields
    });
    expect(config.series['orders.count']).toEqual({
      color: '#FF5733',
      label: 'TEST LABEL',
      line_width: 3,
      shape: 'circle',
      style: 'filled',
      value_format: '0,0.[00]',
      visible: true
    });
  });
  it('sets bar default values', function () {
    var config = (0, _buildChartConfig.buildChartConfig)({
      config: {
        type: 'bar'
      },
      data: _fixtures.mockData,
      fields: _fixtures.mockFields
    });
    expect(config.positioning).toEqual('grouped');
  });
});
//# sourceMappingURL=buildChartConfig.spec.js.map