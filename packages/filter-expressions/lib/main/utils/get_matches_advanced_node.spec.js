"use strict";

var _parse_filter_expression = require("./parse_filter_expression");
var _get_matches_advanced_node = require("./get_matches_advanced_node");

describe('getsMatchesAdvancedNode', function () {
  it('returns a matches advanced node from an ast', function () {
    var testExpression = '1';
    var ast = (0, _parse_filter_expression.parseFilterExpression)('string', testExpression);
    var _getMatchesAdvancedNo = (0, _get_matches_advanced_node.getMatchesAdvancedNode)(testExpression, ast),
      id = _getMatchesAdvancedNo.id,
      type = _getMatchesAdvancedNo.type,
      expression = _getMatchesAdvancedNo.expression;
    expect(expression).toBe(testExpression);
    expect(id).toBe(ast.id);
    expect(type).toBe('matchesAdvanced');
  });
  it('returns a matches advanced node from an expression', function () {
    var testExpression = '1';
    var _getMatchesAdvancedNo2 = (0, _get_matches_advanced_node.getMatchesAdvancedNode)(testExpression),
      id = _getMatchesAdvancedNo2.id,
      type = _getMatchesAdvancedNo2.type,
      expression = _getMatchesAdvancedNo2.expression;
    expect(expression).toBe(testExpression);
    expect(id).toBe(1);
    expect(type).toBe('matchesAdvanced');
  });
});
//# sourceMappingURL=get_matches_advanced_node.spec.js.map