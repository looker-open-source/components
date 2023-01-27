"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringFilterToString = void 0;
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _is_item_to_string = _interopRequireDefault(require("../to_string/is_item_to_string"));
var _tree_to_string = require("../tree/tree_to_string");
var _user_attribute_to_string = require("../user_attribute/user_attribute_to_string");
var _escape_leading_and_trailing_whitespaces = require("./escape_leading_and_trailing_whitespaces");
var _escape_with_caret = require("./escape_with_caret");
var _quote_filter = require("./quote_filter");

var escapeWithDoubleLastEscape = function escapeWithDoubleLastEscape(v) {
  return (0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)(v);
};
var escapeWithoutDoubleLastEscape = function escapeWithoutDoubleLastEscape(v) {
  return (0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)(v, false);
};
var matchToString = function matchToString(_ref) {
  var value = _ref.value,
    is = _ref.is;
  return (0, _is_item_to_string["default"])(is, '', '-') + value.map(_quote_filter.quoteFilter).map(escapeWithDoubleLastEscape).join(",".concat((0, _is_item_to_string["default"])(is, '', '-')));
};
var multiValueToString = function multiValueToString(values, toString) {
  return values.map(toString).join(',');
};
var startWithToString = function startWithToString(_ref2) {
  var value = _ref2.value,
    is = _ref2.is;
  return multiValueToString(value.map(_escape_with_caret.escapeWithCaret).map(escapeWithoutDoubleLastEscape), function (token) {
    return "".concat((0, _is_item_to_string["default"])(is, '', '-') + String(token), "%");
  });
};
var endsWithToString = function endsWithToString(_ref3) {
  var value = _ref3.value,
    is = _ref3.is;
  return multiValueToString(value.map(_escape_with_caret.escapeWithCaret).map(escapeWithDoubleLastEscape), function (token) {
    return "".concat((0, _is_item_to_string["default"])(is, '', '-'), "%").concat(String(token));
  });
};
var containsToString = function containsToString(_ref4) {
  var value = _ref4.value,
    is = _ref4.is;
  return multiValueToString(value.map(_escape_with_caret.escapeWithCaret).map(escapeWithoutDoubleLastEscape), function (token) {
    return "".concat((0, _is_item_to_string["default"])(is, '', '-'), "%").concat(String(token), "%");
  });
};
var otherToString = function otherToString(_ref5) {
  var value = _ref5.value,
    is = _ref5.is;
  return multiValueToString(value, function (token) {
    return "".concat((0, _is_item_to_string["default"])(is, '', '-')).concat(String(token));
  });
};
var blankToString = function blankToString(_ref6) {
  var is = _ref6.is;
  return "".concat((0, _is_item_to_string["default"])(is, '', '-'), "EMPTY");
};
var nullToString = function nullToString(_ref7) {
  var is = _ref7.is;
  return "".concat((0, _is_item_to_string["default"])(is, '', '-'), "NULL");
};
var anyvalueToString = function anyvalueToString() {
  return '';
};
var filterToStringMap = {
  startsWith: startWithToString,
  endsWith: endsWithToString,
  contains: containsToString,
  match: matchToString,
  blank: blankToString,
  "null": nullToString,
  user_attribute: _user_attribute_to_string.userAttributeToString,
  anyvalue: anyvalueToString,
  other: otherToString
};

var stringToExpression = function stringToExpression(item) {
  var toStringFunction = filterToStringMap[item.type];
  return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item)) || '';
};

var itemIsNotEmpty = function itemIsNotEmpty(_ref8) {
  var type = _ref8.type,
    value = _ref8.value;
  return !(['match', 'contains', 'startsWith', 'endsWith', 'other'].indexOf(type) > -1 && (0, _isEmpty["default"])(value));
};
var stringFilterToString = function stringFilterToString(root) {
  return (0, _tree_to_string.treeToString)(root, stringToExpression, itemIsNotEmpty);
};
exports.stringFilterToString = stringFilterToString;
//# sourceMappingURL=string_filter_to_string.js.map