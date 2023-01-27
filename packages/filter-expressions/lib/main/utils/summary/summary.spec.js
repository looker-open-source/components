"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("../../types");
var _i18n = require("../i18n");
var _type_to_grammar = require("../type_to_grammar");
var _summary = require("./summary");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('Summary', function () {
  Object.keys(_type_to_grammar.grammarsMap).forEach(function (type) {
    var expression = '&,,,$%testContext.#,,,$,testContext.';
    it("for invalid input ".concat(expression, " should return the invalid input"), function () {
      expect((0, _summary.summary)({
        type: type,
        expression: expression
      })).toEqual(expression);
    });
  });
  it('for matches advanced is equal to expression', function () {
    var expression = 'before last week';
    expect((0, _summary.summary)({
      type: 'date',
      expression: expression
    })).toEqual(expression);
  });
});
describe('Summary for empty string', function () {
  (0, _i18n.i18nInit)()["catch"](function (e) {
    throw new Error(e);
  });
  it.each(Object.keys(_type_to_grammar.grammarsMap))('%s', function (type) {
    expect((0, _summary.summary)({
      type: type
    })).toMatchSnapshot();
  });
});
describe('Summary for user attribute', function () {
  var getUserAttribute = function getUserAttribute(overrideProps) {
    return _objectSpread({
      label: 'xyz-label',
      name: 'xyz',
      type: _types.TYPE_USER_ATTRIBUTE,
      value: 'some-value'
    }, overrideProps);
  };

  it('with value', function () {
    var userAttributeWithValue = getUserAttribute();
    expect((0, _summary.summary)({
      type: 'string',
      expression: "{{ _user_attributes['xyz'] }}",
      userAttributes: [userAttributeWithValue]
    })).toMatchSnapshot();
  });
  it('with value and required', function () {
    var userAttributeWithValue = getUserAttribute();
    expect((0, _summary.summary)({
      type: 'string',
      expression: "{{ _user_attributes['xyz'] }}",
      userAttributes: [userAttributeWithValue],
      required: true
    })).toMatchSnapshot();
  });
  it('without value', function () {
    var userAttributeWithoutValue = getUserAttribute({
      value: null
    });
    expect((0, _summary.summary)({
      type: 'string',
      expression: "{{ _user_attributes['xyz'] }}",
      userAttributes: [userAttributeWithoutValue]
    })).toMatchSnapshot();
  });
  it('without value and required', function () {
    var userAttributeWithoutValue = getUserAttribute({
      value: null
    });
    expect((0, _summary.summary)({
      type: 'string',
      expression: undefined,
      userAttributes: [userAttributeWithoutValue],
      required: true
    })).toMatchSnapshot();
  });
});
//# sourceMappingURL=summary.spec.js.map