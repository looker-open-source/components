"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTierFilterOptions = exports.useParamFilterOptions = void 0;

var _utils = require("../../../../utils");

var _get_user_attribute_option = require("./get_user_attribute_option");

var useTierFilterOptions = function useTierFilterOptions() {
  var _useTranslation = (0, _utils.useTranslation)('get_tier_filter_options'),
      t = _useTranslation.t;

  var userAttributeOption = (0, _get_user_attribute_option.useUserAttributeOption)();
  return [{
    value: 'anyvalue',
    label: t('is any value')
  }, {
    value: 'match',
    label: t('is')
  }, {
    value: '!match',
    label: t('is not')
  }, userAttributeOption];
};

exports.useTierFilterOptions = useTierFilterOptions;

var useParamFilterOptions = function useParamFilterOptions() {
  var _useTranslation2 = (0, _utils.useTranslation)('get_tier_filter_options'),
      t = _useTranslation2.t;

  var userAttributeOption = (0, _get_user_attribute_option.useUserAttributeOption)();
  return [{
    value: 'match',
    label: t('is')
  }, userAttributeOption];
};

exports.useParamFilterOptions = useParamFilterOptions;
//# sourceMappingURL=get_tier_filter_options.js.map