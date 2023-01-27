"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _parse_filter_expression = require("../parse_filter_expression");
var _sanitize_date = require("./sanitize_date");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var type = 'date';
var parse = function parse(expression) {
  return (0, _parse_filter_expression.parseFilterExpression)(type, expression);
};
describe('Sanitize Date Test', function () {
  var expression = '2018/01/01';
  it('works when switching to year ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'year'
    }));
    expect(item.type).toBe('year');
    expect(item.year).not.toBeNull();
  });
  it('works when switching to this ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'this'
    }));
    expect(item.year).not.toBeNull();
    expect(item.type).toBe('this');
  });
  it('works when switching to past ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'past'
    }));
    expect(item.type).toBe('past');
  });
  it('works when switching to before ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'before'
    }));
    expect(item.type).toBe('before');
    expect(item.range).toBe('relative');
    expect(item.unit).toBe('month');
  });
  it('works when switching to range ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'range'
    }));
    expect(item.type).toBe('range');
  });
  it('works when switching to null ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'null'
    }));
    expect(item.type).toBe('null');
  });
  it('works when switching to anytime ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'anytime'
    }));
    expect(item.type).toBe('anytime');
  });
  it('works when switching to month ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'month'
    }));
    expect(item.year).not.toBeNull();
    expect(item.month).not.toBeNull();
    expect(item.type).toBe('month');
  });
  it('works when switching to on ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'on'
    }));
    expect(item.type).toBe('on');
    expect(item.date).not.toBeNull();
  });
  it('works when switching to relative ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'relative'
    }));
    expect(item.type).toBe('relative');
  });
  it('works when switching to thisRange ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'thisRange'
    }));
    expect(item.type).toBe('thisRange');
  });
  it('works when switching to matchesAdvanced ' + expression, function () {
    var ast = parse(expression);
    var item = (0, _sanitize_date.sanitizeDate)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'matchesAdvanced'
    }));
    expect(item.type).toBe('matchesAdvanced');
  });
});
//# sourceMappingURL=sanitize_date.spec.js.map