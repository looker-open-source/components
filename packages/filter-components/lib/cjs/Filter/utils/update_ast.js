"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateASTFromProps = void 0;

var _filterExpressions = require("@looker/filter-expressions");

var updateASTFromProps = function updateASTFromProps(type, expression, userAttributes) {
  var _typeToGrammar = (0, _filterExpressions.typeToGrammar)(type),
      subTypes = _typeToGrammar.subTypes;

  var ast;

  try {
    ast = (0, _filterExpressions.parseFilterExpression)(type, expression, userAttributes);

    if ((0, _filterExpressions.hasMatchesAdvancedNode)(subTypes)(ast)) {
      ast = (0, _filterExpressions.getMatchesAdvancedNode)(expression, ast);
    }
  } catch (_ref) {
    var message = _ref.message;
    ast = undefined;
  }

  return ast;
};

exports.updateASTFromProps = updateASTFromProps;
//# sourceMappingURL=update_ast.js.map