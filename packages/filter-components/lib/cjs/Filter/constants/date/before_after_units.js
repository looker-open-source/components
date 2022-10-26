"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFiscalBeforeOrAfterUnits = exports.useBeforeOrAfterUnits = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _utils = require("../../../utils");

var useAgoDateUnits = function useAgoDateUnits() {
  var _useTranslation = (0, _utils.useTranslation)('before_after_units'),
      t = _useTranslation.t;

  return [{
    value: 'year',
    unit: 'years',
    label: t('years ago')
  }, {
    value: 'quarter',
    unit: 'quarters',
    label: t('quarters ago')
  }, {
    value: 'month',
    unit: 'months',
    label: t('months ago')
  }, {
    value: 'week',
    unit: 'weeks',
    label: t('weeks ago')
  }, {
    value: 'day',
    unit: 'days',
    label: t('days ago')
  }, {
    value: 'hour',
    unit: 'hours',
    label: t('hours ago')
  }, {
    value: 'minute',
    unit: 'minutes',
    label: t('minutes ago')
  }, {
    value: 'second',
    unit: 'seconds',
    label: t('seconds ago')
  }, {
    value: 'now',
    unit: 'now',
    label: t('now')
  }];
};

var useFromNowDateUnits = function useFromNowDateUnits() {
  var _useTranslation2 = (0, _utils.useTranslation)('before_after_units'),
      t = _useTranslation2.t;

  return [{
    value: 'f_second',
    unit: 'second',
    label: t('seconds from now'),
    fromnow: true
  }, {
    value: 'f_minute',
    unit: 'minute',
    label: t('minutes from now'),
    fromnow: true
  }, {
    value: 'f_hour',
    unit: 'hour',
    label: t('hours from now'),
    fromnow: true
  }, {
    value: 'f_day',
    unit: 'day',
    label: t('days from now'),
    fromnow: true
  }, {
    value: 'f_week',
    unit: 'week',
    label: t('weeks from now'),
    fromnow: true
  }, {
    value: 'f_month',
    unit: 'month',
    label: t('months from now'),
    fromnow: true
  }, {
    value: 'f_quarter',
    unit: 'quarter',
    label: t('quarters from now'),
    fromnow: true
  }, {
    value: 'f_year',
    unit: 'year',
    label: t('years from now'),
    fromnow: true
  }];
};

var useBeforeOrAfterUnits = function useBeforeOrAfterUnits() {
  var agoDateUnits = useAgoDateUnits();
  var fromNowDateUnits = useFromNowDateUnits();
  return [].concat((0, _toConsumableArray2["default"])(agoDateUnits), (0, _toConsumableArray2["default"])(fromNowDateUnits));
};

exports.useBeforeOrAfterUnits = useBeforeOrAfterUnits;

var useFiscalBeforeOrAfterUnits = function useFiscalBeforeOrAfterUnits() {
  var _useTranslation3 = (0, _utils.useTranslation)('before_after_units'),
      t = _useTranslation3.t;

  var agoDateUnits = useAgoDateUnits();
  var fromNowDateUnits = useFromNowDateUnits();
  return [{
    value: 'fiscal year',
    unit: 'fiscal year',
    label: t('fiscal years ago')
  }, {
    value: 'fiscal quarter',
    unit: 'fiscal quarter',
    label: t('fiscal quarters ago')
  }].concat((0, _toConsumableArray2["default"])(agoDateUnits), (0, _toConsumableArray2["default"])(fromNowDateUnits), [{
    value: 'f_fiscal quarter',
    unit: 'fiscal quarter',
    label: t('fiscal quarter from now')
  }, {
    value: 'f_fiscal year',
    unit: 'fiscal year',
    label: t('fiscal years from now')
  }]);
};

exports.useFiscalBeforeOrAfterUnits = useFiscalBeforeOrAfterUnits;
//# sourceMappingURL=before_after_units.js.map