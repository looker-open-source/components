import any from 'lodash/fp/any';
import flow from 'lodash/fp/flow';
import { TYPE_USER_ATTRIBUTE } from '../types';
import { treeToList } from './tree';
export const hasUserAttributeNode = flow([treeToList, any({
  type: TYPE_USER_ATTRIBUTE
})]);
//# sourceMappingURL=has_user_attribute_node.js.map