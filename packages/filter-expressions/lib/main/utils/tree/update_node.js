"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNode = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var updateNode = function updateNode(root, nodeId, updateProps) {
  if (root.id === nodeId) {
    return _objectSpread(_objectSpread({}, root), updateProps);
  }
  var node = root;
  while (node) {
    var _node2 = node,
      left = _node2.left,
      right = _node2.right;
    if (left && left.id === nodeId) {
      node.left = _objectSpread(_objectSpread({}, left), updateProps);
      return root;
    }
    if (right && right.id === nodeId) {
      node.right = _objectSpread(_objectSpread({}, right), updateProps);
      return root;
    }
    node = node.right;
  }
  return root;
};
exports.updateNode = updateNode;
//# sourceMappingURL=update_node.js.map