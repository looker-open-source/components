"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.summary = void 0;
var _has_matches_advanced_node = require("../has_matches_advanced_node");
var _has_user_attribute_node_without_value = require("../has_user_attribute_node_without_value");
var _parse_filter_expression = require("../parse_filter_expression");
var _tree = require("../tree");
var _type_to_grammar = require("../type_to_grammar");
var _i18next = _interopRequireDefault(require("i18next"));

var t = _i18next["default"].t.bind(_i18next["default"]);

var treeToSummary = function treeToSummary(root, describe, filterType, field) {
  var orItems = [];
  var andItems = [];
  (0, _tree.inorderTraversal)(root, function (node) {
    var item = node;
    if (item.type !== ',') {
      ;
      (item.is ? orItems : andItems).push(describe(item, filterType, field));
    }
  });
  var resultOr = orItems ? orItems.join(' or ') : '';
  var resultAnd = andItems ? andItems.join(' and ') : '';
  var result = resultOr;
  result += resultOr && resultAnd ? ', and ' : '';
  result += resultAnd;
  return result;
};
var summary = function summary(props) {
  var _ref = props,
    type = _ref.type,
    _ref$expression = _ref.expression,
    expression = _ref$expression === void 0 ? '' : _ref$expression,
    userAttributes = _ref.userAttributes,
    field = _ref.field,
    required = _ref.required;
  if (required && !expression) {
    return t('Value required', {
      ns: 'summary'
    });
  }
  var _typeToGrammar = (0, _type_to_grammar.typeToGrammar)(type),
    describe = _typeToGrammar.describe,
    subTypes = _typeToGrammar.subTypes;
  var ast = (0, _parse_filter_expression.parseFilterExpression)(type, expression, userAttributes);

  if ((0, _has_user_attribute_node_without_value.hasUserAttributeNodeWithoutValue)(ast)) {
    var userAttribute = getUserAttributeMatchingAST(ast, userAttributes);
    if (userAttribute) {
      return "".concat(userAttribute === null || userAttribute === void 0 ? void 0 : userAttribute.label, " (null)");
    }
  }
  var isMatchesAdvanced = (0, _has_matches_advanced_node.hasMatchesAdvancedNode)(subTypes)(ast);
  return isMatchesAdvanced ? expression : treeToSummary(ast, describe, type, field);
};
exports.summary = summary;
var getUserAttributeMatchingAST = function getUserAttributeMatchingAST(_ref2, userAttributes) {
  var attributeName = _ref2.attributeName;
  return userAttributes === null || userAttributes === void 0 ? void 0 : userAttributes.find(function (ua) {
    return ua.name === attributeName;
  });
};
//# sourceMappingURL=summary.js.map