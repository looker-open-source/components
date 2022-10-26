"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserAttributeOption = void 0;

var _filterExpressions = require("@looker/filter-expressions");

var _utils = require("../../../../utils");

var useUserAttributeOption = function useUserAttributeOption() {
  var _useTranslation = (0, _utils.useTranslation)('get_user_attribute_option'),
      t = _useTranslation.t;

  return {
    value: _filterExpressions.TYPE_USER_ATTRIBUTE,
    label: t('matches a user attribute')
  };
};

exports.useUserAttributeOption = useUserAttributeOption;
//# sourceMappingURL=get_user_attribute_option.js.map