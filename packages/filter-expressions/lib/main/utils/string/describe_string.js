"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeString = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));
var _describe_is_item = require("../summary/describe_is_item");
var _describe_is_any_value = require("../summary/describe_is_any_value");
var _describe_null = require("../summary/describe_null");
var _join_or = require("../summary/join_or");
var _describe_user_attribute = require("../user_attribute/describe_user_attribute");
var _add_quotes = require("./add_quotes");

var describeMultiValue = function describeMultiValue(value) {
  return value && (0, _join_or.joinOr)(value.map(_add_quotes.addQuotes));
};
var match = function match(_ref) {
  var is = _ref.is,
    value = _ref.value;
  return value && value.length ? (0, _describe_is_item.describeIsItem)(is, describeMultiValue(value)) : (0, _describe_is_any_value.describeIsAnyValue)();
};
var contains = function contains(_ref2) {
  var is = _ref2.is,
    value = _ref2.value;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var valueText = describeMultiValue(value);
  var containsText = t('contains value', {
    ns: 'describe_string',
    value: valueText
  });
  var doesntContainText = t('does not contain value', {
    ns: 'describe_string',
    value: valueText
  });
  return is ? containsText : doesntContainText;
};
var startsWith = function startsWith(_ref3) {
  var is = _ref3.is,
    value = _ref3.value;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var valueText = describeMultiValue(value);
  var startsWithText = t('starts with value', {
    ns: 'describe_string',
    value: valueText
  });
  var doesntStartWithText = t('does not start with value', {
    ns: 'describe_string',
    value: valueText
  });
  return is ? startsWithText : doesntStartWithText;
};
var endsWith = function endsWith(_ref4) {
  var is = _ref4.is,
    value = _ref4.value;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var valueText = describeMultiValue(value);
  var endsWithText = t('ends with value', {
    ns: 'describe_string',
    value: valueText
  });
  var doesntEndWithText = t('does not end with value', {
    ns: 'describe_string',
    value: valueText
  });
  return is ? endsWithText : doesntEndWithText;
};
var blank = function blank(_ref5) {
  var is = _ref5.is;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return (0, _describe_is_item.describeIsItem)(is, t('blank', {
    ns: 'describe_string'
  }));
};
var filterToStringMap = {
  blank: blank,
  "null": _describe_null.describeNull,
  match: match,
  contains: contains,
  startsWith: startsWith,
  endsWith: endsWith,
  user_attribute: _describe_user_attribute.describeUserAttribute,
  anyvalue: _describe_is_any_value.describeIsAnyValue
};

var describeString = function describeString(item) {
  return (0, _defaultTo["default"])(filterToStringMap[item.type], function () {
    return '';
  })(item);
};
exports.describeString = describeString;
//# sourceMappingURL=describe_string.js.map