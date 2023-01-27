"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExploreViewsTree = void 0;
var _create_explores_tree = require("./create_explores_tree");

var createExploreViewsTree = function createExploreViewsTree(explore) {
  if (!explore) return [];
  var exploresTree = (0, _create_explores_tree.createExploresTree)([explore]);
  if (exploresTree.length === 1) {
    return exploresTree[0].children || [];
  }
  return [];
};
exports.createExploreViewsTree = createExploreViewsTree;
//# sourceMappingURL=create_explore_views_tree.js.map