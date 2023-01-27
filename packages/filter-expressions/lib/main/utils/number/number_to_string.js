"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeNumberNode = exports.numberToString = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _partition3 = _interopRequireDefault(require("lodash/partition"));
var _number_types = require("../../types/number_types");
var _tree_to_list = require("../tree/tree_to_list");
var _user_attribute_to_string = require("../user_attribute/user_attribute_to_string");
var _is_null_undefined_or_empty = require("./is_null_undefined_or_empty");

var nullToString = function nullToString(_ref) {
  var is = _ref.is;
  return "".concat(isToString(is), "null");
};

var betweenToString = function betweenToString(_ref2) {
  var bounds = _ref2.bounds,
    low = _ref2.low,
    high = _ref2.high,
    is = _ref2.is;
  return bounds && (!(0, _is_null_undefined_or_empty.isNullUndefinedOrEmpty)(low) || !(0, _is_null_undefined_or_empty.isNullUndefinedOrEmpty)(high)) ? "".concat(isToString(is)).concat(bounds[0]).concat((0, _defaultTo["default"])(low, ''), ",").concat((0, _defaultTo["default"])(high, '')).concat(bounds[1]) : '';
};

var valueToString = function valueToString(_ref3) {
  var is = _ref3.is,
    type = _ref3.type,
    value = _ref3.value;
  return (value === null || value === void 0 ? void 0 : value.map(function (v) {
    return "".concat(isToString(is)).concat(type === '=' ? '' : type).concat(v);
  }).join(',')) || '';
};

var isToString = function isToString() {
  var is = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var no = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'not ';
  return "".concat(is ? yes : no);
};
var filterToStringMap = {
  "null": nullToString,
  between: betweenToString,
  user_attribute: _user_attribute_to_string.userAttributeToString
};

var serializeNumberNode = function serializeNumberNode(item) {
  var toStringFunction = filterToStringMap[item.type] || valueToString;
  return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item)) || '';
};

exports.serializeNumberNode = serializeNumberNode;
var listToExpression = function listToExpression(items) {
  return items.map(serializeNumberNode).filter(String).join(',');
};

var removeEmptyItems = function removeEmptyItems(items) {
  return items.filter(function (_ref4) {
    var type = _ref4.type,
      value = _ref4.value;
    return !(['=', '>', '<', '>=', '<='].indexOf(type) > -1 && (0, _isEmpty["default"])(value));
  });
};

var addDuplicateNotNodeIfNeeded = function addDuplicateNotNodeIfNeeded(list) {
  var _andClauses$0$value;
  var _partition = (0, _partition3["default"])(list, function (item) {
      return item.is;
    }),
    _partition2 = (0, _slicedToArray2["default"])(_partition, 2),
    orClauses = _partition2[0],
    andClauses = _partition2[1];
  if (andClauses.length === 1 &&
  !(andClauses[0].type === _number_types.NumberTypes.EQUAL && ((_andClauses$0$value = andClauses[0].value) === null || _andClauses$0$value === void 0 ? void 0 : _andClauses$0$value.length) > 1) && orClauses.length >= 1 && orClauses.every(function (item) {
    return item.type === '=';
  })) {
    return [].concat((0, _toConsumableArray2["default"])(orClauses), (0, _toConsumableArray2["default"])(andClauses), [andClauses[0]]);
  }
  return list;
};

var numberToString = (0, _flow["default"])(_tree_to_list.treeToList, removeEmptyItems, addDuplicateNotNodeIfNeeded, listToExpression);
exports.numberToString = numberToString;
//# sourceMappingURL=number_to_string.js.map