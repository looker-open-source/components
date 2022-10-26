"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNumberFilterOptions = exports.useBetweenOptions = void 0;

var _utils = require("../../../../utils");

var _get_user_attribute_option = require("./get_user_attribute_option");

var useNumberFilterOptions = function useNumberFilterOptions(isParameter) {
  var _useTranslation = (0, _utils.useTranslation)('get_number_filter_options'),
      t = _useTranslation.t;

  var userAttributeOption = (0, _get_user_attribute_option.useUserAttributeOption)();

  if (isParameter) {
    return [{
      value: '=',
      label: t('is')
    }, userAttributeOption];
  }

  return [{
    value: '=',
    label: t('is')
  }, {
    value: '>',
    label: t('is greater')
  }, {
    value: '>=',
    label: t('is greater equal')
  }, {
    value: '<',
    label: t('is less')
  }, {
    value: '<=',
    label: t('is less equal')
  }, {
    value: 'between',
    label: t('is between')
  }, {
    value: 'null',
    label: t('is null')
  }, {
    value: '!=',
    label: t('is not')
  }, {
    value: '!between',
    label: t('is not between')
  }, {
    value: '!null',
    label: t('is not null')
  }, userAttributeOption];
};

exports.useNumberFilterOptions = useNumberFilterOptions;

var useBetweenOptions = function useBetweenOptions() {
  var _useTranslation2 = (0, _utils.useTranslation)('get_number_filter_options'),
      t = _useTranslation2.t;

  return [{
    value: '[]',
    label: t('inclusive')
  }, {
    value: '()',
    label: t('exclusive')
  }, {
    value: '[)',
    label: t('right exclusive')
  }, {
    value: '(]',
    label: t('left exclusive')
  }];
};

exports.useBetweenOptions = useBetweenOptions;
//# sourceMappingURL=get_number_filter_options.js.map