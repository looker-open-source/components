"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDateFilterOptions = void 0;

var _utils = require("../../../../utils");

var _get_user_attribute_option = require("./get_user_attribute_option");

var useDateFilterOptions = function useDateFilterOptions(isParameter) {
  var _useTranslation = (0, _utils.useTranslation)('get_date_filter_options'),
      t = _useTranslation.t;

  var userAttributeOption = (0, _get_user_attribute_option.useUserAttributeOption)();

  if (isParameter) {
    return [{
      value: 'on',
      label: t('is on the day')
    }, userAttributeOption];
  }

  return [{
    value: 'past',
    label: t('is in the last')
  }, {
    value: 'on',
    label: t('is on the day')
  }, {
    value: 'range',
    label: t('is in range')
  }, {
    value: 'before',
    label: t('is before')
  }, {
    value: 'after',
    label: t('is on or after')
  }, {
    value: 'year',
    label: t('is in the year')
  }, {
    value: 'month',
    label: t('is in the month')
  }, {
    value: 'this',
    label: t('is this')
  }, {
    value: 'next',
    label: t('is next')
  }, {
    value: 'last',
    label: t('is previous')
  }, {
    value: 'relative',
    label: t('is')
  }, {
    value: 'null',
    label: t('is null')
  }, {
    value: 'anyvalue',
    label: t('is any time')
  }, {
    value: 'notnull',
    label: t('is not null')
  }, userAttributeOption];
};

exports.useDateFilterOptions = useDateFilterOptions;
//# sourceMappingURL=get_date_filter_options.js.map