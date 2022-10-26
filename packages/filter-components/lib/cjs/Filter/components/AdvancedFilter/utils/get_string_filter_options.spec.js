"use strict";

var _get_string_filter_options = require("./get_string_filter_options");

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
describe('string filter options', function () {
  it('should only return string literal matches and user attribute match options for parameter filters', function () {
    expect((0, _get_string_filter_options.useStringFilterOptions)(true)).toStrictEqual([{
      value: 'match',
      label: 'is'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_string_filter_options.spec.js.map