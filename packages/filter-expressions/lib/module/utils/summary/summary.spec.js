import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { TYPE_USER_ATTRIBUTE } from '../../types';
import { i18nInit } from '../i18n';
import { grammarsMap } from '../type_to_grammar';
import { summary } from './summary';
describe('Summary', () => {
  Object.keys(grammarsMap).forEach(type => {
    const expression = '&,,,$%testContext.#,,,$,testContext.';
    it(`for invalid input ${expression} should return the invalid input`, () => {
      expect(summary({
        type: type,
        expression
      })).toEqual(expression);
    });
  });
  it('for matches advanced is equal to expression', () => {
    const expression = 'before last week';
    expect(summary({
      type: 'date',
      expression
    })).toEqual(expression);
  });
});
describe('Summary for empty string', () => {
  i18nInit().catch(e => {
    throw new Error(e);
  });
  it.each(Object.keys(grammarsMap))('%s', type => {
    expect(summary({
      type: type
    })).toMatchSnapshot();
  });
});
describe('Summary for user attribute', () => {
  const getUserAttribute = overrideProps => _objectSpread({
    label: 'xyz-label',
    name: 'xyz',
    type: TYPE_USER_ATTRIBUTE,
    value: 'some-value'
  }, overrideProps);

  it('with value', () => {
    const userAttributeWithValue = getUserAttribute();
    expect(summary({
      type: 'string',
      expression: "{{ _user_attributes['xyz'] }}",
      userAttributes: [userAttributeWithValue]
    })).toMatchSnapshot();
  });
  it('with value and required', () => {
    const userAttributeWithValue = getUserAttribute();
    expect(summary({
      type: 'string',
      expression: "{{ _user_attributes['xyz'] }}",
      userAttributes: [userAttributeWithValue],
      required: true
    })).toMatchSnapshot();
  });
  it('without value', () => {
    const userAttributeWithoutValue = getUserAttribute({
      value: null
    });
    expect(summary({
      type: 'string',
      expression: "{{ _user_attributes['xyz'] }}",
      userAttributes: [userAttributeWithoutValue]
    })).toMatchSnapshot();
  });
  it('without value and required', () => {
    const userAttributeWithoutValue = getUserAttribute({
      value: null
    });
    expect(summary({
      type: 'string',
      expression: undefined,
      userAttributes: [userAttributeWithoutValue],
      required: true
    })).toMatchSnapshot();
  });
});
//# sourceMappingURL=summary.spec.js.map