"use strict";

var _get_number_filter_options = require("./get_number_filter_options");

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
describe('number filter options', function () {
  it('should only return direct number matches and user attribute match options for parameter filters', function () {
    expect((0, _get_number_filter_options.useNumberFilterOptions)(true)).toStrictEqual([{
      value: '=',
      label: 'is'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_number_filter_options.spec.js.map