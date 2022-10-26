"use strict";

var _constants = require("../../constants");

var _ = require(".");

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
describe('useValidationMessage', function () {
  describe('Required filter', function () {
    it('should error if required filter is on and there is no value', function () {
      expect((0, _.useValidationMessage)('', true)).toEqual({
        type: _constants.ERROR_TYPE,
        message: 'Value required'
      });
    });
    it('should not error if required filter is off and there is no value', function () {
      expect((0, _.useValidationMessage)('', false)).toEqual({});
    });
    it('should not error if required filter is on and there is a value', function () {
      expect((0, _.useValidationMessage)('value', true)).toEqual({});
    });
  });
});
//# sourceMappingURL=use_validation_message.spec.js.map