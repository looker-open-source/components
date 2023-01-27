"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _parse_filter_expression = require("../parse_filter_expression");
var _sanitize_string = require("./sanitize_string");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('Sanitize String tests', function () {
  it('works when switching to startsWith', function () {
    var expression = 'foo';
    var ast = (0, _parse_filter_expression.parseFilterExpression)('string', expression);
    var item = (0, _sanitize_string.sanitizeString)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'startsWith'
    }));
    expect(item.value).toMatchObject(['foo']);
    expect(item.type).toBe('startsWith');
  });
  it('works when switching to match', function () {
    var expression = 'foo';
    var ast = (0, _parse_filter_expression.parseFilterExpression)('string', expression);
    var item = (0, _sanitize_string.sanitizeString)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'match'
    }));
    expect(item.value).toMatchObject(['foo']);
    expect(item.type).toBe('match');
  });
  it('replaces the userAttribute value when switching to match', function () {
    var userAttributeWithValue = {
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
    var expression = "{{ _user_attributes['id'] }}";
    var ast = (0, _parse_filter_expression.parseFilterExpression)('string', expression, [userAttributeWithValue]);
    expect(ast).toMatchSnapshot();
    var item = (0, _sanitize_string.sanitizeString)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'match'
    }), [userAttributeWithValue]);
    expect(item.value).toMatchObject(['ua']);
    expect(item.type).toBe('match');
  });
});
//# sourceMappingURL=sanitize_string.spec.js.map