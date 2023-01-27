"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parserOptions = exports.parseFilterExpression = void 0;
var _pegjs = require("pegjs");
var _get_number_from_string = require("./number/get_number_from_string");
var _get_matches_advanced_node = require("./get_matches_advanced_node");
var _transform_ast = require("./transform/transform_ast");
var _userAttributeTransform = require("./transform/userAttributeTransform");
var _type_to_grammar = require("./type_to_grammar");

var generateParser = function () {
  var parserCache = {};
  return function (type, grammar) {
    if (!parserCache[type]) {
      parserCache[type] = (0, _pegjs.generate)(grammar);
    }
    return parserCache[type];
  };
}();

var parserOptions = {
  Object: Object,
  getNumberFromString: _get_number_from_string.getNumberFromString
};

exports.parserOptions = parserOptions;
var parseFilterExpression = function parseFilterExpression(type, expression, userAttributes) {
  var _typeToGrammar = (0, _type_to_grammar.typeToGrammar)(type),
    grammar = _typeToGrammar.grammar,
    anyvalue = _typeToGrammar.anyvalue,
    _typeToGrammar$transf = _typeToGrammar.transform,
    transform = _typeToGrammar$transf === void 0 ? function (root) {
      return root;
    } : _typeToGrammar$transf;
  if (expression === '') {
    return anyvalue;
  }
  try {
    var parser = generateParser(type, grammar);
    var transforms = [(0, _userAttributeTransform.userAttributeTransform)(userAttributes), transform];
    return (0, _transform_ast.transformAST)(parser.parse(expression, parserOptions), transforms);
  } catch (error) {
    return (0, _get_matches_advanced_node.getMatchesAdvancedNode)(expression);
  }
};
exports.parseFilterExpression = parseFilterExpression;
//# sourceMappingURL=parse_filter_expression.js.map