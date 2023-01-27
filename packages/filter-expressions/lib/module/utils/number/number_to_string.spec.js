import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { numberExpressionTestItems } from '../../grammars';
import { parseFilterExpression } from '../parse_filter_expression';
import { numberToString } from './number_to_string';
import { addNode, treeToList } from '../tree';
describe('Number To String', () => {
  numberExpressionTestItems.forEach(testItem => {
    const {
      expression,
      output
    } = testItem;
    it('works for number expression ' + expression, () => {
      const ast = parseFilterExpression('number', expression);
      const stringOutput = numberToString(ast);
      expect(stringOutput).toBe(output);
    });
    it('returns empty string for a user attribute item with no value', () => {
      const item = {
        is: true,
        id: '1',
        type: 'user_attribute',
        value: []
      };
      const result = numberToString(item);
      expect(result).toBe('');
    });
    it('returns user attribute item with value', () => {
      const item = {
        is: true,
        id: '1',
        type: 'user_attribute',
        value: [],
        attributeName: 'test',
        attributeValue: 2
      };
      const result = numberToString(item);
      expect(result).toBe(`{{ _user_attributes['test'] }}`);
    });
  });
});
describe('Invalid expression return any value expression', () => {
  it('return any value for invalid between filter item', () => {
    const ast = parseFilterExpression('number', '(1,10)');
    const item = _objectSpread(_objectSpread({}, ast), {}, {
      low: '',
      high: ''
    });
    const output = numberToString(item);
    expect(output).toEqual('');
  });
  it('return any value for invalid greater than item', () => {
    const ast = parseFilterExpression('number', '>1');
    const gtItem = _objectSpread(_objectSpread({}, ast), {}, {
      value: []
    });
    const output = numberToString(gtItem);
    expect(output).toEqual('');
  });
  it('return any value for invalid less than item', () => {
    const ast = parseFilterExpression('number', '<=10');
    const ltItem = _objectSpread(_objectSpread({}, ast), {}, {
      value: []
    });
    const output = numberToString(ltItem);
    expect(output).toEqual('');
  });
});
describe('Can properly serialize expressions with "is not" terms', () => {
  const equals23 = {
    id: 1,
    is: true,
    left: undefined,
    right: undefined,
    type: '=',
    value: [23]
  };
  const not42 = {
    id: 3,
    is: false,
    left: undefined,
    right: undefined,
    type: '=',
    value: [42]
  };
  const notNull = {
    id: 5,
    is: false,
    left: undefined,
    right: undefined,
    type: 'null'
  };
  it('properly serializes duplicate not from two filter tree items', () => {

    const ast = addNode(equals23, not42);
    const output = numberToString(ast);
    expect(output).toEqual('23,not 42,not 42');
  });
  it('properly serializes duplicate not from three filter tree items', () => {

    const not43 = {
      id: 5,
      is: false,
      left: undefined,
      right: undefined,
      type: '=',
      value: [43]
    };

    const ast = addNode(equals23, addNode(not42, not43));
    const output = numberToString(ast);
    expect(output).toEqual('23,not 42,not 43');
  });
  it('properly serializes duplicate not from two filter tree items with not null', () => {

    const not4243 = {
      id: 3,
      is: false,
      left: undefined,
      right: undefined,
      type: '=',
      value: [42, 43]
    };

    const ast = addNode(equals23, not4243);
    const output = numberToString(ast);
    expect(output).toEqual('23,not 42,not 43');
  });
  it('properly serializes an expression with not null', () => {
    const ast = addNode(equals23, notNull);
    const output = numberToString(ast);
    expect(output).toEqual('23,not null,not null');

    const resultAST = parseFilterExpression('number', output);
    const list = treeToList(resultAST);
    expect(list).toHaveLength(2);
  });
});
//# sourceMappingURL=number_to_string.spec.js.map