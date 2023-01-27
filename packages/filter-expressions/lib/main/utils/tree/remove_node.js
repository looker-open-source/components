"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNode = void 0;
var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var removeNode = function removeNode(root, nodeId) {
  var workingRoot = (0, _cloneDeep["default"])(root);
  if (workingRoot.id === nodeId) {
    return undefined;
  }
  if (workingRoot.left && workingRoot.left.id === nodeId) {
    return workingRoot.right;
  }
  if (workingRoot.right && workingRoot.right.id === nodeId) {
    return workingRoot.left;
  }
  var parent = workingRoot;
  var pointer = workingRoot.right;
  while (pointer) {
    if (pointer.left && pointer.left.id === nodeId) {
      parent.right = parent.right ? parent.right.right : undefined;
      return workingRoot;
    }
    if (pointer.right && pointer.right.id === nodeId) {
      parent.right = parent.right ? parent.right.left : undefined;
      return workingRoot;
    }
    parent = pointer;
    pointer = pointer.right;
  }
  return workingRoot;
};
exports.removeNode = removeNode;
//# sourceMappingURL=remove_node.js.map