"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMultiValueNodes = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _union = _interopRequireDefault(require("lodash/union"));
var _excluded = ["left", "right"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
    var _node2 = node,
      left = _node2.left,
      right = _node2.right,
      rest = (0, _objectWithoutProperties2["default"])(_node2, _excluded);
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