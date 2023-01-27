

import { buildChartConfig } from './buildChartConfig';
import { mockFields, mockData } from '../fixtures';
describe('buildChartConfig', () => {
  it('normalizes chart type strings', () => {
    const lineConfig = buildChartConfig({
      config: {
        type: 'looker_line'
      }
    });
    expect(lineConfig.type).toEqual('line');
    const barConfig = buildChartConfig({
      config: {
        type: 'looker_bar'
      }
    });
    expect(barConfig.type).toEqual('bar');
    const scatterConfig = buildChartConfig({
      config: {
        type: 'looker_scatter'
      }
    });
    expect(scatterConfig.type).toEqual('scatter');
  });
  it('removes unsupported config values from final output', () => {
    const config = buildChartConfig({
      config: {
        defaults_version: 2
      }
    });
    expect(config.defaults_version).toEqual(undefined);
  });
  it('passes through deeply nested user overrides', () => {
    const config = buildChartConfig({
      config: {
        type: 'line',
        series: {
          'orders.count': {
            color: '#FF5733',
            label: 'TEST LABEL'
          }
        }
      },
      data: mockData,
      fields: mockFields
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
  it('sets bar default values', () => {
    const config = buildChartConfig({
      config: {
        type: 'bar'
      },
      data: mockData,
      fields: mockFields
    });
    expect(config.positioning).toEqual('grouped');
  });
});
//# sourceMappingURL=buildChartConfig.spec.js.map