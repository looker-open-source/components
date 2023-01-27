

import { createExploresTree } from './create_explores_tree';
export const createExploreViewsTree = explore => {
  if (!explore) return [];
  const exploresTree = createExploresTree([explore]);
  if (exploresTree.length === 1) {
    return exploresTree[0].children || [];
  }
  return [];
};
//# sourceMappingURL=create_explore_views_tree.js.map