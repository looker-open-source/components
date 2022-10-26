"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeItemInnerPropKeys = exports.isTreeItemInnerPropKey = void 0;
var linkPropKeys = ['download', 'href', 'rel', 'target'];
var treeItemInnerPropKeys = ['color', 'density', 'description', 'detail', 'disabled', 'hovered', 'icon', 'selected', 'truncate'].concat(linkPropKeys);
exports.treeItemInnerPropKeys = treeItemInnerPropKeys;

var isTreeItemInnerPropKey = function isTreeItemInnerPropKey(propKey) {
  return treeItemInnerPropKeys.includes(propKey);
};

exports.isTreeItemInnerPropKey = isTreeItemInnerPropKey;
//# sourceMappingURL=types.js.map