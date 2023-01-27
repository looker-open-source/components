"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tierFilterToString = void 0;
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
var _quote_filter = require("../string/quote_filter");
var _is_item_to_string = _interopRequireDefault(require("../to_string/is_item_to_string"));
var _user_attribute_to_string = require("../user_attribute/user_attribute_to_string");
var _escape_parameter_value = require("./escape_parameter_value");
var _tree_to_list = require("../tree/tree_to_list");

var matchToString = function matchToString(_ref, _, field) {
  var value = _ref.value,
    is = _ref.is;
  return (0, _is_item_to_string["default"])(is, '', '-') + value.map(function (val) {
    return field !== null && field !== void 0 && field.has_allowed_values && field !== null && field !== void 0 && field.parameter ? (0, _escape_parameter_value.escapeParameterValue)(val) : (0, _quote_filter.quoteFilter)(val);
  }).join(",".concat((0, _is_item_to_string["default"])(is, '', '-')));
};
var anyvalueToString = function anyvalueToString() {
  return '';
};
var filterToStringMap = {
  anyvalue: anyvalueToString,
  match: matchToString,
  user_attribute: _user_attribute_to_string.userAttributeToString
};
var serializeTierItem = function serializeTierItem(type, field) {
  return function (item) {
    var toStringFunction = filterToStringMap[item.type];
    return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item, type, field)) || '';
  };
};

var listToExpression = function listToExpression(type, field) {
  return function (items) {
    return items.map(serializeTierItem(type, field)).join(',');
  };
};

var tierFilterToString = function tierFilterToString(root, type, field) {
  return (0, _flow["default"])(_tree_to_list.treeToList, listToExpression(type, field))(root);
};
exports.tierFilterToString = tierFilterToString;
//# sourceMappingURL=tier_filter_to_string.js.map