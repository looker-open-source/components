import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { parseFilterExpression } from '../parse_filter_expression';
import { sanitizeDate } from './sanitize_date';
const type = 'date';
const parse = expression => parseFilterExpression(type, expression);
describe('Sanitize Date Test', () => {
  const expression = '2018/01/01';
  it('works when switching to year ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'year'
    }));
    expect(item.type).toBe('year');
    expect(item.year).not.toBeNull();
  });
  it('works when switching to this ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'this'
    }));
    expect(item.year).not.toBeNull();
    expect(item.type).toBe('this');
  });
  it('works when switching to past ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'past'
    }));
    expect(item.type).toBe('past');
  });
  it('works when switching to before ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'before'
    }));
    expect(item.type).toBe('before');
    expect(item.range).toBe('relative');
    expect(item.unit).toBe('month');
  });
  it('works when switching to range ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'range'
    }));
    expect(item.type).toBe('range');
  });
  it('works when switching to null ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'null'
    }));
    expect(item.type).toBe('null');
  });
  it('works when switching to anytime ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'anytime'
    }));
    expect(item.type).toBe('anytime');
  });
  it('works when switching to month ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'month'
    }));
    expect(item.year).not.toBeNull();
    expect(item.month).not.toBeNull();
    expect(item.type).toBe('month');
  });
  it('works when switching to on ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'on'
    }));
    expect(item.type).toBe('on');
    expect(item.date).not.toBeNull();
  });
  it('works when switching to relative ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'relative'
    }));
    expect(item.type).toBe('relative');
  });
  it('works when switching to thisRange ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'thisRange'
    }));
    expect(item.type).toBe('thisRange');
  });
  it('works when switching to matchesAdvanced ' + expression, () => {
    const ast = parse(expression);
    const item = sanitizeDate(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'matchesAdvanced'
    }));
    expect(item.type).toBe('matchesAdvanced');
  });
});
//# sourceMappingURL=sanitize_date.spec.js.map