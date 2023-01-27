

import { Category } from '@looker/sdk';
import { getExpressionTypeFromField } from './get_expression_type';
describe('getExpressionTypeFromField', () => {
  it('should return "tier" if the field has enumerations', () => {
    const mockField = {
      enumerations: [{
        label: 'answer',
        value: 42
      }]
    };
    expect(getExpressionTypeFromField(mockField)).toEqual('tier');
  });
  it('should return "number" if the field is_numeric', () => {
    const mockField = {
      is_numeric: true
    };
    expect(getExpressionTypeFromField(mockField)).toEqual('number');
  });
  describe('is_timeframe', () => {
    it('should return "date" if the field is_timeframe', () => {
      const mockField = {
        is_timeframe: true,
        type: 'field_type'
      };
      expect(getExpressionTypeFromField(mockField)).toEqual('date');
    });
    it('should return "date_time" if the field is_timeframe, type is date_time', () => {
      const mockField = {
        is_timeframe: true,
        type: 'date_time'
      };
      expect(getExpressionTypeFromField(mockField)).toEqual('date_time');
    });
    it('should return "date_time" if the field is_timeframe, type is date_hour', () => {
      const mockField = {
        is_timeframe: true,
        type: 'date_hour'
      };
      expect(getExpressionTypeFromField(mockField)).toEqual('date_time');
    });
  });
  it('should return "location" if the field is a "location" or "location_bin_level" type', () => {
    const mockField1 = {
      type: 'location'
    };
    const mockField2 = {
      type: 'location_bin_level'
    };
    expect(getExpressionTypeFromField(mockField1)).toEqual('location');
    expect(getExpressionTypeFromField(mockField2)).toEqual('location');
  });
  it('should return "string" by default', () => {
    const mockField = {};
    expect(getExpressionTypeFromField(mockField)).toEqual('string');
  });
  it('should return number for number parameter (b/187940941, b/199507872)', () => {
    const mockField = {
      category: Category.parameter,
      type: 'number'
    };
    expect(getExpressionTypeFromField(mockField)).toEqual('number');
  });
});
//# sourceMappingURL=get_expression_type.spec.js.map