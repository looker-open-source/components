import { parseFilterExpression } from '../parse_filter_expression';
export const getUserAttributeMatchingTypeAndExpression = (type, expression = '', userAttributes) => {
  const ast = parseFilterExpression(type, expression, userAttributes);
  return (userAttributes === null || userAttributes === void 0 ? void 0 : userAttributes.find(ua => ua.name === ast.attributeName)) || null;
};
//# sourceMappingURL=get_user_attribute_matching_type_and_expression.js.map