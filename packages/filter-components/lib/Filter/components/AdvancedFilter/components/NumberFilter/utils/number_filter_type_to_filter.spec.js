import { numberFilterTypeToFilter } from './number_filter_type_to_filter';
describe('number filter options', () => {
  it('should use multi input filter if allowMultipleValues is true', () => {
    expect(numberFilterTypeToFilter('=', true).displayName).toBe('MultiInput');
  });
  it('should use single input filter if allowMultipleValues is false', () => {
    expect(numberFilterTypeToFilter('=', false).name).toBe('SingleNumberInput');
  });
});
//# sourceMappingURL=number_filter_type_to_filter.spec.js.map