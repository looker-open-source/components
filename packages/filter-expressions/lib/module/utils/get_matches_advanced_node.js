

export const getMatchesAdvancedNode = (expression, ast) => {
  if (ast) {
    return {
      id: ast.id,
      is: true,
      type: 'matchesAdvanced',
      expression: ast.expression === undefined ? expression : ast.expression
    };
  }
  return {
    id: 1,
    type: 'matchesAdvanced',
    expression
  };
};
//# sourceMappingURL=get_matches_advanced_node.js.map