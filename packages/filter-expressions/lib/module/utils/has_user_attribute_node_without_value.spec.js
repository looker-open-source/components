import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { TYPE_USER_ATTRIBUTE } from '../types';
import { hasUserAttributeNodeWithoutValue } from './has_user_attribute_node_without_value';
import { parseFilterExpression } from './parse_filter_expression';
describe('hasUserAttributeNodeWithoutValue', () => {
  const getUserAttribute = overrideProps => _objectSpread({
    name: 'xyz',
    value: 'some-value',
    type: TYPE_USER_ATTRIBUTE
  }, overrideProps);
  describe('when there are no user attributes', () => {
    it('should return false', () => {
      const testExpression = '1';
      const ast = parseFilterExpression('string', testExpression);
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(false);
    });
  });
  describe('when another user attribute exists with a value', () => {
    it('should return true', () => {
      const testExpression = "{{ _user_attributes['abc'] }}";
      const userAttribute = getUserAttribute();
      const ast = parseFilterExpression('string', testExpression, [userAttribute]);
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(true);
    });
  });
  describe('when the user attribute exists but has an empty string value', () => {
    it('should return true', () => {
      const testExpression = "{{ _user_attributes['xyz'] }}";
      const userAttribute = getUserAttribute({
        value: ''
      });
      const ast = parseFilterExpression('string', testExpression, [userAttribute]);
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(true);
    });
  });
  describe('when the user attribute exists but has no value', () => {
    it('should return true', () => {
      const testExpression = "{{ _user_attributes['xyz'] }}";
      const userAttribute = getUserAttribute({
        value: null
      });
      const ast = parseFilterExpression('string', testExpression, [userAttribute]);
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(true);
    });
  });
  describe('when the user attribute exists and has a value', () => {
    it('should return false', () => {
      const testExpression = "{{ _user_attributes['xyz'] }}";
      const userAttribute = getUserAttribute();
      const ast = parseFilterExpression('string', testExpression, [userAttribute]);
      expect(hasUserAttributeNodeWithoutValue(ast)).toBe(false);
    });
  });
});
//# sourceMappingURL=has_user_attribute_node_without_value.spec.js.map