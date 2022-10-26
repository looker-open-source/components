"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFiscalDateUnits = exports.useDateUnits = void 0;

var _utils = require("../../../utils");

var useDateUnits = function useDateUnits() {
  var _useTranslation = (0, _utils.useTranslation)('date_units'),
      t = _useTranslation.t;

  return [{
    value: 'second',
    unit: 'second',
    label: t('seconds'),
    singular: t('second')
  }, {
    value: 'minute',
    unit: 'minute',
    label: t('minutes'),
    singular: t('minute')
  }, {
    value: 'hour',
    unit: 'hour',
    label: t('hours'),
    singular: t('hour')
  }, {
    value: 'day',
    unit: 'day',
    label: t('days'),
    singular: t('day')
  }, {
    value: 'week',
    unit: 'week',
    label: t('weeks'),
    singular: t('week')
  }, {
    value: 'month',
    unit: 'month',
    label: t('months'),
    singular: t('month')
  }, {
    value: 'quarter',
    unit: 'quarter',
    label: t('quarters'),
    singular: t('quarter')
  }, {
    value: 'year',
    unit: 'year',
    label: t('years'),
    singular: t('year')
  }];
};

exports.useDateUnits = useDateUnits;

var useFiscalDateUnits = function useFiscalDateUnits() {
  var _useTranslation2 = (0, _utils.useTranslation)('date_units'),
      t = _useTranslation2.t;

  return [{
    value: 'fiscal quarter',
    unit: 'fiscal quarter',
    label: t('fiscal quarters'),
    singular: t('fiscal quarter')
  }, {
    value: 'fiscal year',
    unit: 'fiscal year',
    label: t('fiscal years'),
    singular: t('fiscal year')
  }];
};

exports.useFiscalDateUnits = useFiscalDateUnits;
//# sourceMappingURL=date_units.js.map