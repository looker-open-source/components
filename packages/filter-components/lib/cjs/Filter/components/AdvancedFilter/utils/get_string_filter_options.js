"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStringFilterOptions = void 0;

var _utils = require("../../../../utils");

var _get_user_attribute_option = require("./get_user_attribute_option");

var useStringFilterOptions = function useStringFilterOptions(isParameter) {
  var _useTranslation = (0, _utils.useTranslation)('get_string_filter_options'),
      t = _useTranslation.t;

  var userAttributeOption = (0, _get_user_attribute_option.useUserAttributeOption)();

  if (isParameter) {
    return [{
      value: 'match',
      label: t('is')
    }, userAttributeOption];
  }

  return [{
    value: 'match',
    label: t('is')
  }, {
    value: 'contains',
    label: t('contains')
  }, {
    value: 'startsWith',
    label: t('starts with')
  }, {
    value: 'endsWith',
    label: t('ends with')
  }, {
    value: 'blank',
    label: t('is blank')
  }, {
    value: 'null',
    label: t('is null')
  }, {
    value: '!match',
    label: t('is not')
  }, {
    value: '!contains',
    label: t('doesnt contain')
  }, {
    value: '!startsWith',
    label: t('doesnt start with')
  }, {
    value: '!endsWith',
    label: t('doesnt end with')
  }, {
    value: '!blank',
    label: t('is not blank')
  }, {
    value: '!null',
    label: t('is not null')
  }, userAttributeOption];
};

exports.useStringFilterOptions = useStringFilterOptions;
//# sourceMappingURL=get_string_filter_options.js.map