import { useDateFilterOptions } from './get_date_filter_options';
jest.mock('@looker/i18n', () => ({
  useTranslationBase: () => {
    return {
      t: str => str
    };
  }
}));
describe('date filter options', () => {
  it('should only return direct date matches and user attribute match options for parameter filters', () => {
    expect(useDateFilterOptions(true)).toStrictEqual([{
      value: 'on',
      label: 'is on the day'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_date_filter_options.spec.js.map