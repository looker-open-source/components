"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePastUnits = exports.useFiscalPastUnits = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _utils = require("../../../utils");

var _date_units = require("./date_units");

var useCompleteDateUnits = function useCompleteDateUnits() {
  var _useTranslation = (0, _utils.useTranslation)('past_units'),
      t = _useTranslation.t;

  return [{
    value: 'c_second',
    unit: 'second',
    label: t('complete seconds'),
    complete: true
  }, {
    value: 'c_minute',
    unit: 'minute',
    label: t('complete minutes'),
    complete: true
  }, {
    value: 'c_hour',
    unit: 'hour',
    label: t('complete hours'),
    complete: true
  }, {
    value: 'c_day',
    unit: 'day',
    label: t('complete days'),
    complete: true
  }, {
    value: 'c_week',
    unit: 'week',
    label: t('complete weeks'),
    complete: true
  }, {
    value: 'c_month',
    unit: 'month',
    label: t('complete months'),
    complete: true
  }, {
    value: 'c_quarter',
    unit: 'quarter',
    label: t('complete quarters'),
    complete: true
  }, {
    value: 'c_year',
    unit: 'year',
    label: t('complete years'),
    complete: true
  }];
};

var usePastUnits = function usePastUnits() {
  var dateUnits = (0, _date_units.useDateUnits)();
  var completeDateUnits = useCompleteDateUnits();
  return [].concat((0, _toConsumableArray2["default"])(dateUnits), (0, _toConsumableArray2["default"])(completeDateUnits));
};

exports.usePastUnits = usePastUnits;

var useFiscalPastUnits = function useFiscalPastUnits() {
  var _useTranslation2 = (0, _utils.useTranslation)('past_units'),
      t = _useTranslation2.t;

  var dateUnits = (0, _date_units.useDateUnits)();
  var fiscalDateUnits = (0, _date_units.useFiscalDateUnits)();
  var completeDateUnits = useCompleteDateUnits();
  return [].concat((0, _toConsumableArray2["default"])(dateUnits), (0, _toConsumableArray2["default"])(fiscalDateUnits), (0, _toConsumableArray2["default"])(completeDateUnits), [{
    value: 'c_fiscal quarter',
    unit: 'fiscal quarter',
    label: t('complete fiscal quarters'),
    complete: true
  }, {
    value: 'c_fiscal year',
    unit: 'fiscal year',
    label: t('complete fiscal years'),
    complete: true
  }]);
};

exports.useFiscalPastUnits = useFiscalPastUnits;
//# sourceMappingURL=past_units.js.map