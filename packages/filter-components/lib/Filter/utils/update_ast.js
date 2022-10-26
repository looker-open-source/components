import { typeToGrammar, parseFilterExpression, getMatchesAdvancedNode, hasMatchesAdvancedNode } from '@looker/filter-expressions';
export const updateASTFromProps = (type, expression, userAttributes) => {
  const {
    subTypes
  } = typeToGrammar(type);
  let ast;

  try {
    ast = parseFilterExpression(type, expression, userAttributes);

    if (hasMatchesAdvancedNode(subTypes)(ast)) {
      ast = getMatchesAdvancedNode(expression, ast);
    }
  } catch ({
    message
  }) {
    ast = undefined;
  }

  return ast;
};
//# sourceMappingURL=update_ast.js.map