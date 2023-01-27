

import { hasMatchesAdvancedNode } from '../has_matches_advanced_node';
import { hasUserAttributeNodeWithoutValue } from '../has_user_attribute_node_without_value';
import { parseFilterExpression } from '../parse_filter_expression';
import { inorderTraversal } from '../tree';
import { typeToGrammar } from '../type_to_grammar';
import i18next from 'i18next';
const t = i18next.t.bind(i18next);

const treeToSummary = (root, describe, filterType, field) => {
  const orItems = [];
  const andItems = [];
  inorderTraversal(root, node => {
    const item = node;
    if (item.type !== ',') {
      ;
      (item.is ? orItems : andItems).push(describe(item, filterType, field));
    }
  });
  const resultOr = orItems ? orItems.join(' or ') : '';
  const resultAnd = andItems ? andItems.join(' and ') : '';
  let result = resultOr;
  result += resultOr && resultAnd ? ', and ' : '';
  result += resultAnd;
  return result;
};
export const summary = props => {
  const {
    type,
    expression = '',
    userAttributes,
    field,
    required
  } = props;
  if (required && !expression) {
    return t('Value required', {
      ns: 'summary'
    });
  }
  const {
    describe,
    subTypes
  } = typeToGrammar(type);
  const ast = parseFilterExpression(type, expression, userAttributes);

  if (hasUserAttributeNodeWithoutValue(ast)) {
    const userAttribute = getUserAttributeMatchingAST(ast, userAttributes);
    if (userAttribute) {
      return `${userAttribute === null || userAttribute === void 0 ? void 0 : userAttribute.label} (null)`;
    }
  }
  const isMatchesAdvanced = hasMatchesAdvancedNode(subTypes)(ast);
  return isMatchesAdvanced ? expression : treeToSummary(ast, describe, type, field);
};
const getUserAttributeMatchingAST = ({
  attributeName
}, userAttributes) => userAttributes === null || userAttributes === void 0 ? void 0 : userAttributes.find(ua => ua.name === attributeName);
//# sourceMappingURL=summary.js.map