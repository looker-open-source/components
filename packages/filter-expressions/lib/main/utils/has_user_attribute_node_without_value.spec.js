"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("../types");
var _has_user_attribute_node_without_value = require("./has_user_attribute_node_without_value");
var _parse_filter_expression = require("./parse_filter_expression");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('hasUserAttributeNodeWithoutValue', function () {
  var getUserAttribute = function getUserAttribute(overrideProps) {
    return _objectSpread({
      name: 'xyz',
      value: 'some-value',
      type: _types.TYPE_USER_ATTRIBUTE
    }, overrideProps);
  };
  describe('when there are no user attributes', function () {
    it('should return false', function () {
      var testExpression = '1';
      var ast = (0, _parse_filter_expression.parseFilterExpression)('string', testExpression);
      expect((0, _has_user_attribute_node_without_value.hasUserAttributeNodeWithoutValue)(ast)).toBe(false);
    });
  });
  describe('when another user attribute exists with a value', function () {
    it('should return true', function () {
      var testExpression = "{{ _user_attributes['abc'] }}";
      var userAttribute = getUserAttribute();
      var ast = (0, _parse_filter_expression.parseFilterExpression)('string', testExpression, [userAttribute]);
      expect((0, _has_user_attribute_node_without_value.hasUserAttributeNodeWithoutValue)(ast)).toBe(true);
    });
  });
  describe('when the user attribute exists but has an empty string value', function () {
    it('should return true', function () {
      var testExpression = "{{ _user_attributes['xyz'] }}";
      var userAttribute = getUserAttribute({
        value: ''
      });
      var ast = (0, _parse_filter_expression.parseFilterExpression)('string', testExpression, [userAttribute]);
      expect((0, _has_user_attribute_node_without_value.hasUserAttributeNodeWithoutValue)(ast)).toBe(true);
    });
  });
  describe('when the user attribute exists but has no value', function () {
    it('should return true', function () {
      var testExpression = "{{ _user_attributes['xyz'] }}";
      var userAttribute = getUserAttribute({
        value: null
      });
      var ast = (0, _parse_filter_expression.parseFilterExpression)('string', testExpression, [userAttribute]);
      expect((0, _has_user_attribute_node_without_value.hasUserAttributeNodeWithoutValue)(ast)).toBe(true);
    });
  });
  describe('when the user attribute exists and has a value', function () {
    it('should return false', function () {
      var testExpression = "{{ _user_attributes['xyz'] }}";
      var userAttribute = getUserAttribute();
      var ast = (0, _parse_filter_expression.parseFilterExpression)('string', testExpression, [userAttribute]);
      expect((0, _has_user_attribute_node_without_value.hasUserAttributeNodeWithoutValue)(ast)).toBe(false);
    });
  });
});
//# sourceMappingURL=has_user_attribute_node_without_value.spec.js.map