import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { parseFilterExpression } from '../parse_filter_expression';
import { sanitizeNumber } from './sanitize_number';
describe('Number To String', () => {
  const expression = '1,2,3';
  it('works when switching to > ' + expression, () => {
    const ast = parseFilterExpression('number', expression);
    const item = sanitizeNumber(_objectSpread(_objectSpread({}, ast), {}, {
      type: '>'
    }));
    expect(item.value).toMatchObject([1]);
  });
  it('works when switching to null ' + expression, () => {
    const ast = parseFilterExpression('number', expression);
    const {
      id,
      is
    } = ast;
    const expected = {
      id,
      type: 'null',
      is
    };
    const item = sanitizeNumber(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'null'
    }));
    expect(item).toMatchObject(expected);
  });
  it('works when switching to between ' + expression, () => {
    const ast = parseFilterExpression('number', expression);
    const {
      id,
      is
    } = ast;
    const expected = {
      id,
      type: 'between',
      is,
      bounds: '[]',
      low: 1,
      high: 1
    };
    const item = sanitizeNumber(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'between'
    }));
    expect(item).toMatchObject(expected);
  });
  it('works when switching to matchesAdvanced ' + expression, () => {
    const ast = parseFilterExpression('number', expression);
    const {
      id,
      is
    } = ast;
    const expected = {
      id,
      type: 'matchesAdvanced',
      is,
      value: [1, 2, 3]
    };
    const item = sanitizeNumber(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'matchesAdvanced'
    }));
    expect(item).toMatchObject(expected);
  });
  it('works when switching from between to = ' + expression, () => {
    const ast = parseFilterExpression('number', '(1,100)');
    const {
      id,
      is
    } = ast;
    const expected = {
      id,
      type: '=',
      is,
      value: []
    };
    const item = sanitizeNumber(_objectSpread(_objectSpread({}, ast), {}, {
      type: '='
    }));
    expect(item).toMatchObject(expected);
  });
  it('works when switching from between types with value 0', () => {
    const ast = parseFilterExpression('number', '>0');
    const {
      id,
      is
    } = ast;
    const expected = {
      id,
      type: '<',
      is,
      value: [0]
    };
    const item = sanitizeNumber(_objectSpread(_objectSpread({}, ast), {}, {
      type: '<'
    }));
    expect(item).toMatchObject(expected);
  });
});
//# sourceMappingURL=sanitize_number.spec.js.map