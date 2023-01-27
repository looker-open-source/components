
import any from 'lodash/fp/any';
import allPass from 'lodash/fp/allPass';
import flow from 'lodash/fp/flow';
import { TYPE_USER_ATTRIBUTE } from '../types';
import { treeToList } from './tree';
const isUserAttributeNode = ({
  type
}) => type === TYPE_USER_ATTRIBUTE;
const hasNoAttributeValue = ({
  attributeValue
}) => !attributeValue;

export const hasUserAttributeNodeWithoutValue = flow([treeToList, any(allPass([isUserAttributeNode, hasNoAttributeValue]))]);
//# sourceMappingURL=has_user_attribute_node_without_value.js.map