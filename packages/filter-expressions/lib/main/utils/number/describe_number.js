"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeNumber = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));
var _describe_is_item = require("../summary/describe_is_item");
var _describe_is_any_value = require("../summary/describe_is_any_value");
var _describe_null = require("../summary/describe_null");
var _join_or = require("../summary/join_or");
var _describe_user_attribute = require("../user_attribute/describe_user_attribute");

var describeEquals = function describeEquals(_ref) {
  var is = _ref.is,
    value = _ref.value;
  return value && value.length ? (0, _describe_is_item.describeIsItem)(is, (0, _join_or.joinOr)(value)) : (0, _describe_is_any_value.describeIsAnyValue)();
};
var describeSingleValue = function describeSingleValue(_ref2) {
  var is = _ref2.is,
    type = _ref2.type,
    value = _ref2.value;
  return (0, _describe_is_item.describeIsItem)(is, "".concat(type, " ").concat(value && value.length ? value[0] : ''));
};

var describeBetween = function describeBetween(_ref3) {
  var bounds = _ref3.bounds,
    low = _ref3.low,
    high = _ref3.high,
    is = _ref3.is;
  if (bounds) {
    var t = _i18next["default"].t.bind(_i18next["default"]);
    var range = "".concat(bounds[0]).concat(low, ", ").concat(high).concat(bounds[1]);
    var isInRangeText = t('is in range range', {
      ns: 'describe_number',
      range: range
    });
    var isNotInRangeText = t('is not in range range', {
      ns: 'describe_number',
      range: range
    });
    return is ? isInRangeText : isNotInRangeText;
  }
  return '';
};
var filterToStringMap = {
  "null": _describe_null.describeNull,
  between: describeBetween,
  '=': describeEquals,
  '>': describeSingleValue,
  '>=': describeSingleValue,
  '<': describeSingleValue,
  '<=': describeSingleValue,
  user_attribute: _describe_user_attribute.describeUserAttribute
};

var describeNumber = function describeNumber(item) {
  return (0, _defaultTo["default"])(filterToStringMap[item.type], function () {
    return '';
  })(item);
};
exports.describeNumber = describeNumber;
//# sourceMappingURL=describe_number.js.map