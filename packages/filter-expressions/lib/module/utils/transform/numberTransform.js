
import cloneDeep from 'lodash/cloneDeep';
import { NumberTypes } from '../../types/number_types';
import { serializeNumberNode } from '../number/number_to_string';
import { inorderTraversal, removeNode, treeToList } from '../tree';
import { mergeMultiValueNodes } from './mergeMultiValueNodes';
import applyId from './utils/apply_id_to_ast';

const countNots = root => {
  let count = 0;
  inorderTraversal(root, node => {
    if (node.is === false) {
      count += 1;
    }
  });
  return count;
};

const removeDuplicateNotNodes = root => {
  const workingRoot = cloneDeep(applyId(root));
  const andClauses = treeToList(workingRoot).filter(item => item.is === false);
  return andClauses.length === 2 && serializeNumberNode(andClauses[0]) === serializeNumberNode(andClauses[1]) ?
  removeNode(workingRoot, andClauses[1].id) || {} : workingRoot;
};

export const numberTransform = root => {
  const countOfNotNodes = countNots(root);
  const mergeNodesWithDifferentIsValue = countOfNotNodes === 1;
  const mergedRoot = mergeMultiValueNodes(root, NumberTypes.EQUAL, mergeNodesWithDifferentIsValue);

  const checkForDuplicates = countOfNotNodes === 2;
  return checkForDuplicates ? removeDuplicateNotNodes(mergedRoot) : mergedRoot;
};
//# sourceMappingURL=numberTransform.js.map