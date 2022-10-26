"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUnitOptions = exports.useLocationFilterOptions = void 0;

var _utils = require("../../../../utils");

var _get_user_attribute_option = require("./get_user_attribute_option");

var useLocationFilterOptions = function useLocationFilterOptions() {
  var _useTranslation = (0, _utils.useTranslation)('get_location_filter_options'),
      t = _useTranslation.t;

  var userAttributeOption = (0, _get_user_attribute_option.useUserAttributeOption)();
  return [{
    value: 'location',
    label: t('Location')
  }, {
    value: 'circle',
    label: t('Circle')
  }, {
    value: 'box',
    label: t('Box')
  }, {
    value: 'anyvalue',
    label: t('is anywhere')
  }, {
    value: 'null',
    label: t('is null')
  }, {
    value: 'notnull',
    label: t('is not null')
  }, userAttributeOption];
};

exports.useLocationFilterOptions = useLocationFilterOptions;

var useUnitOptions = function useUnitOptions() {
  var _useTranslation2 = (0, _utils.useTranslation)('get_location_filter_options'),
      t = _useTranslation2.t;

  return [{
    value: 'feet',
    label: t('feet')
  }, {
    value: 'kilometers',
    label: t('kilometers')
  }, {
    value: 'meters',
    label: t('meters')
  }, {
    value: 'miles',
    label: t('miles')
  }];
};

exports.useUnitOptions = useUnitOptions;
//# sourceMappingURL=get_location_filter_options.js.map