"use strict";

var _parse_filter_expression = require("./parse_filter_expression");
var _type_to_grammar = require("./type_to_grammar");
var _get_matches_advanced_node = require("./get_matches_advanced_node");
var _has_matches_advanced_node = require("./has_matches_advanced_node");

describe('hasMatchesAdvancedNode', function () {
  it('returns true for a matches advanced date item ', function () {
    var testExpression = 'before last week';
    var type = 'date';
    var _typeToGrammar = (0, _type_to_grammar.typeToGrammar)(type),
      subTypes = _typeToGrammar.subTypes;
    var ast = (0, _parse_filter_expression.parseFilterExpression)(type, testExpression);
    expect((0, _has_matches_advanced_node.hasMatchesAdvancedNode)(subTypes)(ast)).toBe(true);
  });
  it('returns false for a past node item', function () {
    var testExpression = '3 months';
    var type = 'date';
    var _typeToGrammar2 = (0, _type_to_grammar.typeToGrammar)(type),
      subTypes = _typeToGrammar2.subTypes;
    var ast = (0, _parse_filter_expression.parseFilterExpression)(type, testExpression);
    expect((0, _has_matches_advanced_node.hasMatchesAdvancedNode)(subTypes)(ast)).toBe(false);
  });
  it('returns true for a matches advanced node', function () {
    var testExpression = '3 months';
    var type = 'date';
    var _typeToGrammar3 = (0, _type_to_grammar.typeToGrammar)(type),
      subTypes = _typeToGrammar3.subTypes;
    var newAST = (0, _get_matches_advanced_node.getMatchesAdvancedNode)(testExpression);
    expect((0, _has_matches_advanced_node.hasMatchesAdvancedNode)(subTypes)(newAST)).toBe(true);
  });
});
//# sourceMappingURL=has_matches_advanced_node.spec.js.map