import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { parseFilterExpression } from '../parse_filter_expression';
import { sanitizeString } from './sanitize_string';
describe('Sanitize String tests', () => {
  it('works when switching to startsWith', () => {
    const expression = 'foo';
    const ast = parseFilterExpression('string', expression);
    const item = sanitizeString(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'startsWith'
    }));
    expect(item.value).toMatchObject(['foo']);
    expect(item.type).toBe('startsWith');
  });
  it('works when switching to match', () => {
    const expression = 'foo';
    const ast = parseFilterExpression('string', expression);
    const item = sanitizeString(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'match'
    }));
    expect(item.value).toMatchObject(['foo']);
    expect(item.type).toBe('match');
  });
  it('replaces the userAttribute value when switching to match', () => {
    const userAttributeWithValue = {
      name: 'id',
      label: 'id',
      value: 'ua',
      rank: 0,
      value_is_hidden: false,
      source: '',
      hidden_value_domain_whitelist: '',
      user_attribute_id: '1',
      user_can_edit: false,
      user_id: '1',
      can: {}
    };
    const expression = `{{ _user_attributes['id'] }}`;
    const ast = parseFilterExpression('string', expression, [userAttributeWithValue]);
    expect(ast).toMatchSnapshot();
    const item = sanitizeString(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'match'
    }), [userAttributeWithValue]);
    expect(item.value).toMatchObject(['ua']);
    expect(item.type).toBe('match');
  });
});
//# sourceMappingURL=sanitize_string.spec.js.map