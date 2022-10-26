import { stringFilterTypeToFilter } from './string_filter_type_to_filter';
describe('string filter options', () => {
  it('should use multi input filter if allowMultipleValues is true', () => {
    expect(stringFilterTypeToFilter('match', false, true).displayName).toBe('MultiStringInput');
  });
  it('should use single input filter if allowMultipleValues is false', () => {
    expect(stringFilterTypeToFilter('match', false, false).displayName).toBe('StringInput');
  });
  it('should use single input filter for parameter filters even if allowMultipleValues is true', () => {
    expect(stringFilterTypeToFilter('match', true, true).displayName).toBe('StringInput');
  });
});
//# sourceMappingURL=string_filter_type_to_filter.spec.js.map