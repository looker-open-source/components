"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeDate = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));
var _describe_null = require("../summary/describe_null");
var _describe_user_attribute = require("../user_attribute/describe_user_attribute");
var _convert_to_number = require("./convert_to_number");
var _date_conversions = require("./date_conversions");
var _format_time = require("./format_time");
var _get_months = require("./get_months");
var _get_unit_label = require("./get_unit_label");
var _is_date_time = require("./is_date_time");
var _zero_pad = require("./zero_pad");

var describeDateTime = function describeDateTime(date, showTime) {
  if (!date) return 'Invalid Date';
  var year = date.year,
    month = date.month,
    day = date.day,
    _date$hour = date.hour,
    hour = _date$hour === void 0 ? 0 : _date$hour,
    _date$minute = date.minute,
    minute = _date$minute === void 0 ? 0 : _date$minute;
  var result = String((0, _zero_pad.zeroPad4)(year));
  result += month ? "/".concat((0, _zero_pad.zeroPad2)(month)) : '';
  result += day ? "/".concat((0, _zero_pad.zeroPad2)(day)) : '';
  if (showTime) {
    result += " ".concat((0, _format_time.formatAndDisplayTime)({
      hour: (0, _convert_to_number.convertToNumber)(hour.toString()),
      minute: minute,
      meridiem: (0, _format_time.meridiemFrom24HourTime)(hour)
    }));
  }
  return result;
};
var describeInterval = function describeInterval(_ref) {
  var value = _ref.value,
    unit = _ref.unit,
    complete = _ref.complete;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var result = t('value complete unitLabel', {
    ns: 'describe_date',
    value: value,
    complete: complete ? t(' complete', {
      ns: 'describe_date'
    }) : '',
    unitLabel: (0, _get_unit_label.getUnitLabel)(unit, value)
  });
  return result;
};
var describeNotNull = function describeNotNull() {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is not null', {
    ns: 'describe_date'
  });
};
var past = function past(item) {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is in the last', {
    ns: 'describe_date',
    describeInterval: describeInterval(item)
  });
};
var describePastAgo = function describePastAgo(item) {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is interval ago', {
    ns: 'describe_date',
    interval: describeInterval(item)
  });
};
var describeTypeAndUnit = function describeTypeAndUnit(_ref2) {
  var type = _ref2.type,
    unit = _ref2.unit;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var thisText = t('this', {
    ns: 'describe_date'
  });
  var nextText = t('next', {
    ns: 'describe_date'
  });
  return t('is type unitLabel', {
    ns: 'describe_date',
    type: type === 'this' ? thisText : nextText,
    unitLabel: (0, _get_unit_label.getUnitLabel)(unit)
  });
};
var describeLast = function describeLast(_ref3) {
  var unit = _ref3.unit;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is previous unitLabel', {
    ns: 'describe_date',
    unitLabel: (0, _get_unit_label.getUnitLabel)(unit)
  });
};
var describeYear = function describeYear(_ref4) {
  var year = _ref4.year;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is in the year year', {
    ns: 'describe_date',
    year: year
  });
};
var describeMonth = function describeMonth(_ref5) {
  var month = _ref5.month,
    year = _ref5.year;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is in month year', {
    ns: 'describe_date',
    month: (0, _get_months.getMonths)()[parseInt(month, 10) - 1],
    year: year
  });
};
var beforeAfter = function beforeAfter(item, showTime) {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var type = item.type,
    range = item.range,
    date = item.date,
    fromnow = item.fromnow;
  var prefix = type === 'after' ? t('is on or after', {
    ns: 'describe_date'
  }) : t('is before', {
    ns: 'describe_date'
  });
  if (range === 'absolute') {
    return t('absolute prefix dateTime', {
      ns: 'describe_date',
      prefix: prefix,
      dateTime: describeDateTime(date, showTime)
    });
  }
  var timePassed = fromnow ? t('from now', {
    ns: 'describe_date'
  }) : t('ago', {
    ns: 'describe_date'
  });
  return item.unit === 'now' ? t('prefix now', {
    ns: 'describe_date',
    prefix: prefix
  }) : t('prefix interval timePassed', {
    ns: 'describe_date',
    prefix: prefix,
    interval: describeInterval(item),
    timePassed: timePassed
  });
};
var on = function on(_ref6, showTime) {
  var date = _ref6.date;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is on dateTime', {
    ns: 'describe_date',
    dateTime: describeDateTime(date, showTime && (0, _date_conversions.hasTimeFilterDateTimeModel)(date))
  });
};
var describeRange = function describeRange(_ref7, showTime) {
  var start = _ref7.start,
    end = _ref7.end;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is from dateTimeStart until dateTimeEnd', {
    ns: 'describe_date',
    dateTimeStart: describeDateTime(start, showTime),
    dateTimeEnd: describeDateTime(end, showTime)
  });
};
var describeThisRange = function describeThisRange(_ref8) {
  var startInterval = _ref8.startInterval,
    endInterval = _ref8.endInterval;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('this startInterval to endInterval', {
    ns: 'describe_date',
    startInterval: startInterval,
    endInterval: endInterval
  });
};
var relative = function relative(_ref9) {
  var startInterval = _ref9.startInterval,
    endInterval = _ref9.endInterval,
    intervalType = _ref9.intervalType;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var agoText = t('ago', {
    ns: 'describe_date'
  });
  var fromNowText = t('from now', {
    ns: 'describe_date'
  });
  return t('is intervalStart intervalType for intervalEnd', {
    ns: 'describe_date',
    intervalStart: describeInterval(startInterval),
    intervalType: intervalType === 'ago' ? agoText : fromNowText,
    intervalEnd: describeInterval(endInterval)
  });
};
var anyvalue = function anyvalue() {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is any time', {
    ns: 'describe_date'
  });
};
var describeDay = function describeDay(_ref10) {
  var day = _ref10.day;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is day', {
    ns: 'describe_date',
    day: day
  });
};
var filterToStringMap = {
  "null": _describe_null.describeNull,
  notnull: describeNotNull,
  pastAgo: describePastAgo,
  past: past,
  "this": describeTypeAndUnit,
  next: describeTypeAndUnit,
  last: describeLast,
  year: describeYear,
  month: describeMonth,
  before: beforeAfter,
  after: beforeAfter,
  range: describeRange,
  thisRange: describeThisRange,
  on: on,
  relative: relative,
  anyvalue: anyvalue,
  user_attribute: _describe_user_attribute.describeUserAttribute,
  day: describeDay
};

var describeDate = function describeDate(item, expressionType) {
  return (0, _defaultTo["default"])(filterToStringMap[item.type], function () {
    return '';
  })(item, (0, _is_date_time.isDateTime)(expressionType));
};
exports.describeDate = describeDate;
//# sourceMappingURL=describe_date.js.map