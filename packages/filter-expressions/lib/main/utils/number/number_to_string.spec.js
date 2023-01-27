"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _grammars = require("../../grammars");
var _parse_filter_expression = require("../parse_filter_expression");
var _number_to_string = require("./number_to_string");
var _tree = require("../tree");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('Number To String', function () {
  _grammars.numberExpressionTestItems.forEach(function (testItem) {
    var expression = testItem.expression,
      output = testItem.output;
    it('works for number expression ' + expression, function () {
      var ast = (0, _parse_filter_expression.parseFilterExpression)('number', expression);
      var stringOutput = (0, _number_to_string.numberToString)(ast);
      expect(stringOutput).toBe(output);
    });
    it('returns empty string for a user attribute item with no value', function () {
      var item = {
        is: true,
        id: '1',
        type: 'user_attribute',
        value: []
      };
      var result = (0, _number_to_string.numberToString)(item);
      expect(result).toBe('');
    });
    it('returns user attribute item with value', function () {
      var item = {
        is: true,
        id: '1',
        type: 'user_attribute',
        value: [],
        attributeName: 'test',
        attributeValue: 2
      };
      var result = (0, _number_to_string.numberToString)(item);
      expect(result).toBe("{{ _user_attributes['test'] }}");
    });
  });
});
describe('Invalid expression return any value expression', function () {
  it('return any value for invalid between filter item', function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', '(1,10)');
    var item = _objectSpread(_objectSpread({}, ast), {}, {
      low: '',
      high: ''
    });
    var output = (0, _number_to_string.numberToString)(item);
    expect(output).toEqual('');
  });
  it('return any value for invalid greater than item', function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', '>1');
    var gtItem = _objectSpread(_objectSpread({}, ast), {}, {
      value: []
    });
    var output = (0, _number_to_string.numberToString)(gtItem);
    expect(output).toEqual('');
  });
  it('return any value for invalid less than item', function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', '<=10');
    var ltItem = _objectSpread(_objectSpread({}, ast), {}, {
      value: []
    });
    var output = (0, _number_to_string.numberToString)(ltItem);
    expect(output).toEqual('');
  });
});
describe('Can properly serialize expressions with "is not" terms', function () {
  var equals23 = {
    id: 1,
    is: true,
    left: undefined,
    right: undefined,
    type: '=',
    value: [23]
  };
  var not42 = {
    id: 3,
    is: false,
    left: undefined,
    right: undefined,
    type: '=',
    value: [42]
  };
  var notNull = {
    id: 5,
    is: false,
    left: undefined,
    right: undefined,
    type: 'null'
  };
  it('properly serializes duplicate not from two filter tree items', function () {

    var ast = (0, _tree.addNode)(equals23, not42);
    var output = (0, _number_to_string.numberToString)(ast);
    expect(output).toEqual('23,not 42,not 42');
  });
  it('properly serializes duplicate not from three filter tree items', function () {

    var not43 = {
      id: 5,
      is: false,
      left: undefined,
      right: undefined,
      type: '=',
      value: [43]
    };

    var ast = (0, _tree.addNode)(equals23, (0, _tree.addNode)(not42, not43));
    var output = (0, _number_to_string.numberToString)(ast);
    expect(output).toEqual('23,not 42,not 43');
  });
  it('properly serializes duplicate not from two filter tree items with not null', function () {

    var not4243 = {
      id: 3,
      is: false,
      left: undefined,
      right: undefined,
      type: '=',
      value: [42, 43]
    };

    var ast = (0, _tree.addNode)(equals23, not4243);
    var output = (0, _number_to_string.numberToString)(ast);
    expect(output).toEqual('23,not 42,not 43');
  });
  it('properly serializes an expression with not null', function () {
    var ast = (0, _tree.addNode)(equals23, notNull);
    var output = (0, _number_to_string.numberToString)(ast);
    expect(output).toEqual('23,not null,not null');

    var resultAST = (0, _parse_filter_expression.parseFilterExpression)('number', output);
    var list = (0, _tree.treeToList)(resultAST);
    expect(list).toHaveLength(2);
  });
});
//# sourceMappingURL=number_to_string.spec.js.map