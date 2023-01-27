"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeToList = void 0;
var _inorder_traversal = require("./inorder_traversal");

var treeToList = function treeToList(root) {
  var orItems = [];
  var andItems = [];
  (0, _inorder_traversal.inorderTraversal)(root, function (node) {
    var item = node;
    if (item.type !== ',') {
      ;
      (item.is ? orItems : andItems).push(item);
    }
  });
  return [].concat(orItems, andItems);
};
exports.treeToList = treeToList;
//# sourceMappingURL=tree_to_list.js.map