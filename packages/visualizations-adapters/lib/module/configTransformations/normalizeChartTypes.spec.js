

import { normalizeChartTypes } from './normalizeChartTypes';
import { mockFields, mockSdkDataResponse } from '../fixtures';
describe('normalizeChartTypes', () => {
  describe('config.type ===', () => {
    test('default', () => {
      const config = {
        type: 'default'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('default');
    });
    test('area', () => {
      const config = {
        type: 'area'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('area');
    });
    test('bar', () => {
      const config = {
        type: 'bar'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('bar');
    });
    test('column', () => {
      const config = {
        type: 'column'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('column');
    });
    test('line', () => {
      const config = {
        type: 'line'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('line');
    });
    test('pie', () => {
      const config = {
        type: 'pie'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('pie');
    });
    test('scatter', () => {
      const config = {
        type: 'scatter'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('scatter');
    });
    test('sparkline', () => {
      const config = {
        type: 'sparkline'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('sparkline');
    });
    test('table', () => {
      const config = {
        type: 'table'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('table');
    });
    test('looker_area', () => {
      const config = {
        type: 'looker_area'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('area');
    });
    test('looker_bar', () => {
      const config = {
        type: 'looker_bar'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('bar');
    });
    test('looker_column', () => {
      const config = {
        type: 'looker_column'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('column');
    });
    test('looker_line', () => {
      const config = {
        type: 'looker_line'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('line');
    });
    test('looker_pie', () => {
      const config = {
        type: 'looker_pie'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('pie');
    });
    test('looker_scatter', () => {
      const config = {
        type: 'looker_scatter'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('scatter');
    });
    test('looker_grid', () => {
      const config = {
        type: 'looker_grid'
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('table');
    });
    test('undefined', () => {
      const config = {
        type: undefined
      };
      const {
        config: transformedConfig
      } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields
      });
      expect(transformedConfig.type).toEqual('default');
    });
  });
  test('config.type is an unknown type', () => {
    const config = {
      type: 'gouda-cheese-chart'
    };
    const {
      config: transformedConfig
    } = normalizeChartTypes({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.type).toEqual('gouda-cheese-chart');
  });
});
//# sourceMappingURL=normalizeChartTypes.spec.js.map