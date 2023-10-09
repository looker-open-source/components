"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeNumberNode = exports.numberToString = void 0;
var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _partition3 = _interopRequireDefault(require("lodash/partition"));
var _number_types = require("../../types/number_types");
var _tree_to_list = require("../tree/tree_to_list");
var _user_attribute_to_string = require("../user_attribute/user_attribute_to_string");
var _is_null_undefined_or_empty = require("./is_null_undefined_or_empty");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _partition2 = _slicedToArray(_partition, 2),
    orClauses = _partition2[0],
    andClauses = _partition2[1];
  if (andClauses.length === 1 && !(andClauses[0].type === _number_types.NumberTypes.EQUAL && ((_andClauses$0$value = andClauses[0].value) === null || _andClauses$0$value === void 0 ? void 0 : _andClauses$0$value.length) > 1) && orClauses.length >= 1 && orClauses.every(function (item) {
    return item.type === '=';
  })) {
    return [].concat(_toConsumableArray(orClauses), _toConsumableArray(andClauses), [andClauses[0]]);
  }
  return list;
};
var numberToString = (0, _flow["default"])(_tree_to_list.treeToList, removeEmptyItems, addDuplicateNotNodeIfNeeded, listToExpression);
exports.numberToString = numberToString;
//# sourceMappingURL=number_to_string.js.map