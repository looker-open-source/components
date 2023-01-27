"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatchesAdvancedNode = void 0;

var getMatchesAdvancedNode = function getMatchesAdvancedNode(expression, ast) {
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
    expression: expression
  };
};
exports.getMatchesAdvancedNode = getMatchesAdvancedNode;
//# sourceMappingURL=get_matches_advanced_node.js.map