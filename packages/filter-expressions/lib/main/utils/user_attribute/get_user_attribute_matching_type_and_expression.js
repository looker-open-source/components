"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserAttributeMatchingTypeAndExpression = void 0;
var _parse_filter_expression = require("../parse_filter_expression");

var getUserAttributeMatchingTypeAndExpression = function getUserAttributeMatchingTypeAndExpression(type) {
  var expression = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var userAttributes = arguments.length > 2 ? arguments[2] : undefined;
  var ast = (0, _parse_filter_expression.parseFilterExpression)(type, expression, userAttributes);
  return (userAttributes === null || userAttributes === void 0 ? void 0 : userAttributes.find(function (ua) {
    return ua.name === ast.attributeName;
  })) || null;
};
exports.getUserAttributeMatchingTypeAndExpression = getUserAttributeMatchingTypeAndExpression;
//# sourceMappingURL=get_user_attribute_matching_type_and_expression.js.map