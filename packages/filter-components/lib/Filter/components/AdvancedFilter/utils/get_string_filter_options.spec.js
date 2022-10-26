import { useStringFilterOptions } from './get_string_filter_options';
jest.mock('@looker/i18n', () => ({
  useTranslationBase: () => {
    return {
      t: str => str
    };
  }
}));
describe('string filter options', () => {
  it('should only return string literal matches and user attribute match options for parameter filters', () => {
    expect(useStringFilterOptions(true)).toStrictEqual([{
      value: 'match',
      label: 'is'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_string_filter_options.spec.js.map