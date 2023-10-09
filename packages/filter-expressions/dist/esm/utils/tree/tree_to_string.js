import { treeToList } from './tree_to_list';
export const treeToString = (root, nodeToString, filterNode = () => true) => treeToList(root).filter(filterNode).map(nodeToString).filter(String).join(',');
//# sourceMappingURL=tree_to_string.js.map