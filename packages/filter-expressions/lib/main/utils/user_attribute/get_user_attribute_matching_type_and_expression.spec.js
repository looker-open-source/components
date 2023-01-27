"use strict";

var _parse_filter_expression = require("../parse_filter_expression");
var _get_user_attribute_matching_type_and_expression = require("./get_user_attribute_matching_type_and_expression");

jest.mock('../parse_filter_expression');
describe('getUserAttributeMatchingTypeAndExpression', function () {
  var userAttributeName = 'ua-name';
  var ast = {
    attributeName: userAttributeName
  };
  beforeEach(function () {
    ;
    _parse_filter_expression.parseFilterExpression.mockReturnValue(ast);
  });
  describe('when there are no user attributes', function () {
    it('should return null', function () {
      expect((0, _get_user_attribute_matching_type_and_expression.getUserAttributeMatchingTypeAndExpression)('string', 'expr')).toBeNull();
      expect((0, _get_user_attribute_matching_type_and_expression.getUserAttributeMatchingTypeAndExpression)('string', 'expr', [])).toBeNull();
    });
  });
  describe('when the user attribute is not found', function () {
    var anotherUserAttribute = {
      name: 'ua-name-2'
    };
    it('should return null', function () {
      expect((0, _get_user_attribute_matching_type_and_expression.getUserAttributeMatchingTypeAndExpression)('string', 'expr', [anotherUserAttribute])).toBeNull();
    });
  });
  describe('when the user attribute is found', function () {
    var userAttribute = {
      name: userAttributeName
    };
    it('should return it', function () {
      expect((0, _get_user_attribute_matching_type_and_expression.getUserAttributeMatchingTypeAndExpression)('string', 'expr', [userAttribute])).toBe(userAttribute);
    });
  });
});
//# sourceMappingURL=get_user_attribute_matching_type_and_expression.spec.js.map