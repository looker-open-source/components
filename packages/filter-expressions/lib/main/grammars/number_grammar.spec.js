"use strict";

var _utils = require("../utils");
var _number_grammar_test_expressions = require("./number_grammar_test_expressions");

var testNumericItem = function testNumericItem(testItem) {
  test(testItem.expression, function () {
    var expression = testItem.expression,
      type = testItem.type;
    var ast = (0, _utils.parseFilterExpression)('number', expression);
    expect(ast).toMatchSnapshot();
    var list = (0, _utils.treeToList)(ast);
    var item = list[0];
    var itemType = item.type;
    if (type !== 'matchesAdvanced') {
      itemType = (0, _utils.convertTypeToOption)(item);
    }
    expect(itemType).toEqual(type);
  });
};
describe('Number grammar can parse', function () {
  _number_grammar_test_expressions.numberExpressionTestItems.forEach(testNumericItem);
});

var fail = ['(,)', 'AND', 'OR', '[inf,10]'];
describe("Number grammar can't parse", function () {
  it.each(fail)('%s', function (expression) {
    var ast = (0, _utils.parseFilterExpression)('number', expression);
    expect(ast).toMatchSnapshot();
    expect(ast.type).toBe('matchesAdvanced');
    expect(ast.expression).toEqual(expression);
  });
});
var numeric = [['1', '=', '1'], ['1, 2, 3', '=', '1,2,3'], ['3.14159', '=', '3.14159'], ['123456789', '=', '123456789'],
['12345678901234567890', '=', '12345678901234567890'], ['0.01', '=', '0.01'], ['.01', '=', '0.01'], ['-.01', '=', '-0.01'], ['-0.01', '=', '-0.01'], ['1, -1, 0.1', '=', '1,-1,0.1'], ['not 1', '!=', '1'], ['not 1, 2, 3', '!=', '1,2,3'], ['<> 1', '!=', '1'], ['!= 1, 2, 3', '!=', '1,2,3'], ['not -1.2', '!=', '-1.2'], ['not -.2', '!=', '-0.2'], ['> 1.1', '>', '1.1'], ['>0.1', '>', '0.1'], ['>999', '>', '999'], ['> -42', '>', '-42'], ['>-242', '>', '-242'], ['>    0', '>', '0'], ['< 1.1', '<', '1.1'], ['<3', '<', '3'], ['<0.1', '<', '0.1'], ['<999', '<', '999'], ['< -42', '<', '-42'], ['<-242', '<', '-242'], ['<    0', '<', '0'], ['<= 1.1', '<=', '1.1'], ['<=0.1', '<=', '0.1'], ['<=999', '<=', '999'], ['<= -42', '<=', '-42'], ['<=-242', '<=', '-242'], ['<=    0', '<=', '0'], ['>= 1.1', '>=', '1.1'], ['>=0.1', '>=', '0.1'], ['>=999', '>=', '999'], ['>= -42', '>=', '-42'], ['>=-242', '>=', '-242'], ['>=    0', '>=', '0']];
var testNumeric = function testNumeric(expression, type, textInput) {
  var ast = (0, _utils.parseFilterExpression)('number', expression);
  expect(ast).toMatchSnapshot();
  var list = (0, _utils.treeToList)(ast);
  var item = list[0];
  var itemType = item.type;
  if (type !== 'matchesAdvanced') {
    itemType = (0, _utils.convertTypeToOption)(item);
  }
  expect(itemType).toEqual(type);
  if (type !== 'matchesAdvanced' && type !== 'between') {
    expect(textInput).toBe(item.value ? item.value.join(',') : item.value);
  }
};
describe('Additional number tests', function () {
  it.each(numeric)('%s', testNumeric);
});
var nullValues = [['NULL', 'null'], ['NOT NULL', '!null'], ['null', 'null'], ['not null', '!null'], ['nUll', 'null'], ['Not Null', '!null']];
var testNull = function testNull(expression, type) {
  try {
    var ast = (0, _utils.parseFilterExpression)('number', expression);
    expect(ast).toMatchSnapshot();
    var itemType = (0, _utils.convertTypeToOption)(ast);
    expect(itemType).toEqual(type);
    expect(ast.value).toBeUndefined();
  } catch (error) {
    expect(error).toBeNull();
  }
};
describe('nullValues number tests', function () {
  it.each(nullValues)('%s', testNull);
});
var between = [{
  expression: '1 to 5',
  type: 'between',
  low: '1',
  high: '5',
  bounds: '[]'
}, {
  expression: '-1.0 to .75',
  type: 'between',
  low: '-1.0',
  high: '.75',
  bounds: '[]'
}, {
  expression: '>7 AND <80.44',
  type: 'between',
  low: '7',
  high: '80.44',
  bounds: '()'
}, {
  expression: '>= 7 AND <80.44',
  type: 'between',
  low: '7',
  high: '80.44',
  bounds: '[)'
}, {
  expression: '<=80.44  AND    >.1',
  type: 'between',
  low: '0.1',
  high: '80.44',
  bounds: '(]'
}, {
  expression: '[2, 4]',
  type: 'between',
  low: '2',
  high: '4',
  bounds: '[]'
}, {
  expression: '[0.1,   -4)',
  type: 'between',
  low: '0.1',
  high: '-4',
  bounds: '[)'
}, {
  expression: '(0.1,   -4]',
  type: 'between',
  low: '0.1',
  high: '-4',
  bounds: '(]'
}, {
  expression: '(0.1, .11111)',
  type: 'between',
  low: '0.1',
  high: '0.11111',
  bounds: '()'
}, {
  expression: 'NOT 1 to 5',
  type: '!between',
  low: '1',
  high: '5',
  bounds: '[]'
}, {
  expression: 'NOT -1.0 to .75',
  type: '!between',
  low: '-1.0',
  high: '.75',
  bounds: '[]'
}, {
  expression: 'not 3 to 80.44',
  type: '!between',
  low: '3',
  high: '80.44',
  bounds: '[]'
}, {
  expression: '<7 OR >80.44',
  type: '!between',
  low: '7',
  high: '80.44',
  bounds: '()'
}, {
  expression: '<= 7 OR >80.44',
  type: '!between',
  low: '7',
  high: '80.44',
  bounds: '[)'
}, {
  expression: '>=80.44  OR    <.1',
  type: '!between',
  low: '0.1',
  high: '80.44',
  bounds: '(]'
}, {
  expression: 'NOT[2, 4]',
  type: '!between',
  low: '2',
  high: '4',
  bounds: '[]'
}, {
  expression: 'NOT [0.1,   -4)',
  type: '!between',
  low: '0.1',
  high: '-4',
  bounds: '[)'
}, {
  expression: 'NOT  (0.1,   -4]',
  type: '!between',
  low: '0.1',
  high: '-4',
  bounds: '(]'
}, {
  expression: 'NOT(0.1, .11111)',
  type: '!between',
  low: '0.1',
  high: '0.11111',
  bounds: '()'
}];
describe('between tests', function () {
  between.forEach(function (testItem) {
    it(testItem.expression, function () {
      var expression = testItem.expression,
        type = testItem.type,
        low = testItem.low,
        high = testItem.high,
        bounds = testItem.bounds;
      var ast = (0, _utils.parseFilterExpression)('number', expression);
      expect(ast).toMatchSnapshot();
      var itemType = (0, _utils.convertTypeToOption)(ast);
      expect(type).toEqual(itemType);
      expect(String(ast.low)).toEqual(low);
      expect(String(ast.high)).toEqual(high);
      expect(ast.bounds).toEqual(bounds);
    });
  });
});

var nowSupported = [
["1 to", ">=", "1"], ["to -1", "<=", "-1"], ["to 0.1", "<=", "0.1"], ["not 1, not 2", "!=", "1,2"], ["<> 1, <> 2", "!=", "1,2"], ["!= 1, != 2", "!=", "1,2"], ["1, not 2", "!=", "1,2"], [">1 AND <2 OR >3 AND <4", "between", ">1 AND <2 OR >3 AND <4"]];
describe('nowSupported expressions', function () {
  it.each(nowSupported)('%s', testNumeric);
});

var unsupported = [["0.1.1.1", "matchesAdvanced", "0.1.1.1"], ["0.....1", "matchesAdvanced", "0.....1"], ["--1", "matchesAdvanced", "--1"], ["foo", "matchesAdvanced", "foo"], ["seventeen", "matchesAdvanced", "seventeen"], ["&,,,$%testContext.#,,,$,testContext.", "matchesAdvanced", "&,,,$%testContext.#,,,$,testContext."], ["\\\\\\\\\\\\\\", "matchesAdvanced", "\\\\\\\\\\\\\\"], ["~`!testContext.#$%^*()-+=_{}[]|?", "matchesAdvanced", "~`!testContext.#$%^*()-+=_{}[]|?"], ["<>,. ¡™£¢∞§¶•ªº–≠œ∑", "matchesAdvanced", "<>,. ¡™£¢∞§¶•ªº–≠œ∑"], ["´®†¥¨ˆøπ“‘åß∂ƒ©˙∆˚¬…æ", "matchesAdvanced", "´®†¥¨ˆøπ“‘åß∂ƒ©˙∆˚¬…æ"], ["Ω≈ç√∫˜µ≤≥÷", "matchesAdvanced", "Ω≈ç√∫˜µ≤≥÷"], ["😻🌚", "matchesAdvanced", "😻🌚"], ["^12345", "matchesAdvanced", "^12345"], ["1234^, 567", "matchesAdvanced", "1234^, 567"]];
describe('unsuppored expressions', function () {
  it.each(unsupported)('%s', testNumeric);
});
//# sourceMappingURL=number_grammar.spec.js.map