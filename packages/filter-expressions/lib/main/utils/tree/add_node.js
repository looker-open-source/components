"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNode = void 0;
var _apply_id_to_ast = _interopRequireDefault(require("../transform/utils/apply_id_to_ast"));

var addNode = function addNode(root, newNode) {
  var workingRoot = root;
  if (!workingRoot.right) {
    var newRoot = {
      type: ',',
      left: workingRoot,
      right: newNode
    };
    return (0, _apply_id_to_ast["default"])(newRoot);
  }
  var parent = workingRoot;
  var pointer = workingRoot;
  while (pointer.right) {
    parent = pointer;
    pointer = pointer.right;
  }
  parent.right = {
    type: ',',
    left: pointer,
    right: newNode
  };
  return (0, _apply_id_to_ast["default"])(workingRoot);
};
exports.addNode = addNode;
//# sourceMappingURL=add_node.js.map