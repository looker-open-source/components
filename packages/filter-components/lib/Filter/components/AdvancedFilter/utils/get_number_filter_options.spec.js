import { useNumberFilterOptions } from './get_number_filter_options';
jest.mock('@looker/i18n', () => ({
  useTranslationBase: () => {
    return {
      t: str => str
    };
  }
}));
describe('number filter options', () => {
  it('should only return direct number matches and user attribute match options for parameter filters', () => {
    expect(useNumberFilterOptions(true)).toStrictEqual([{
      value: '=',
      label: 'is'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_number_filter_options.spec.js.map