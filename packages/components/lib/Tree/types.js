const linkPropKeys = ['download', 'href', 'rel', 'target'];
export const treeItemInnerPropKeys = ['color', 'density', 'description', 'detail', 'disabled', 'hovered', 'icon', 'selected', 'truncate', ...linkPropKeys];
export const isTreeItemInnerPropKey = propKey => {
  return treeItemInnerPropKeys.includes(propKey);
};
//# sourceMappingURL=types.js.map