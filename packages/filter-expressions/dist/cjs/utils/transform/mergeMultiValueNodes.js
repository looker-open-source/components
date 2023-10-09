"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMultiValueNodes = void 0;
var _union = _interopRequireDefault(require("lodash/union"));
var _excluded = ["left", "right"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var mergeNodes = function mergeNodes() {
  var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread(_objectSpread({}, left), {}, {
    type: left.type,
    value: (0, _union["default"])(left.value, right.value),
    is: left.is && right.is
  });
};
var canMergeLeftNodes = function canMergeLeftNodes(_ref, compareType, allowDifferentIsValue) {
  var left = _ref.left,
    right = _ref.right;
  return left && right && right.left && left.type === right.left.type && left.type === compareType && (left.is === right.left.is || allowDifferentIsValue);
};
var canMergeEndNodes = function canMergeEndNodes(_ref2, compareType, allowDifferentIsValue) {
  var left = _ref2.left,
    right = _ref2.right;
  return left && right && left.type === right.type && left.type === compareType && (left.is === right.is || allowDifferentIsValue);
};
var mergeNodesWithSameType = function mergeNodesWithSameType(root, compareType) {
  var allowDifferentIsValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var node = root;
  while (canMergeLeftNodes(node, compareType, allowDifferentIsValue)) {
    var _node = node,
      left = _node.left,
      right = _node.right,
      rest = _objectWithoutProperties(_node, _excluded);
    var newLeft = mergeNodes(left, right === null || right === void 0 ? void 0 : right.left);
    var newRight = right === null || right === void 0 ? void 0 : right.right;
    node = _objectSpread(_objectSpread({}, rest), {}, {
      left: newLeft,
      right: newRight
    });
  }
  if (canMergeEndNodes(node, compareType, allowDifferentIsValue)) {
    node = mergeNodes(node.left, node.right);
  }
  return node;
};
var mergeMultiValueNodes = function mergeMultiValueNodes(root, type) {
  var mergeDifferentIsValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var workingRoot = mergeNodesWithSameType(root, type, mergeDifferentIsValue);
  var pointer = workingRoot;
  while (pointer.right) {
    pointer.right = mergeNodesWithSameType(pointer.right, type, mergeDifferentIsValue);
    pointer = pointer.right;
  }
  return workingRoot;
};
exports.mergeMultiValueNodes = mergeMultiValueNodes;
//# sourceMappingURL=mergeMultiValueNodes.js.map