"use strict";

var _get_date_filter_options = require("./get_date_filter_options");

jest.mock('@looker/i18n', function () {
  return {
    useTranslationBase: function useTranslationBase() {
      return {
        t: function t(str) {
          return str;
        }
      };
    }
  };
});
describe('date filter options', function () {
  it('should only return direct date matches and user attribute match options for parameter filters', function () {
    expect((0, _get_date_filter_options.useDateFilterOptions)(true)).toStrictEqual([{
      value: 'on',
      label: 'is on the day'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_date_filter_options.spec.js.map