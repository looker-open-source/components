"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeToString = void 0;
var _tree_to_list = require("./tree_to_list");

var treeToString = function treeToString(root, nodeToString) {
  var filterNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return true;
  };
  return (0, _tree_to_list.treeToList)(root).filter(filterNode).map(nodeToString).filter(String).join(',');
};
exports.treeToString = treeToString;
//# sourceMappingURL=tree_to_string.js.map