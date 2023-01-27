"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _parse_filter_expression = require("../parse_filter_expression");
var _sanitize_number = require("./sanitize_number");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('Number To String', function () {
  var expression = '1,2,3';
  it('works when switching to > ' + expression, function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', expression);
    var item = (0, _sanitize_number.sanitizeNumber)(_objectSpread(_objectSpread({}, ast), {}, {
      type: '>'
    }));
    expect(item.value).toMatchObject([1]);
  });
  it('works when switching to null ' + expression, function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', expression);
    var id = ast.id,
      is = ast.is;
    var expected = {
      id: id,
      type: 'null',
      is: is
    };
    var item = (0, _sanitize_number.sanitizeNumber)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'null'
    }));
    expect(item).toMatchObject(expected);
  });
  it('works when switching to between ' + expression, function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', expression);
    var id = ast.id,
      is = ast.is;
    var expected = {
      id: id,
      type: 'between',
      is: is,
      bounds: '[]',
      low: 1,
      high: 1
    };
    var item = (0, _sanitize_number.sanitizeNumber)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'between'
    }));
    expect(item).toMatchObject(expected);
  });
  it('works when switching to matchesAdvanced ' + expression, function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', expression);
    var id = ast.id,
      is = ast.is;
    var expected = {
      id: id,
      type: 'matchesAdvanced',
      is: is,
      value: [1, 2, 3]
    };
    var item = (0, _sanitize_number.sanitizeNumber)(_objectSpread(_objectSpread({}, ast), {}, {
      type: 'matchesAdvanced'
    }));
    expect(item).toMatchObject(expected);
  });
  it('works when switching from between to = ' + expression, function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', '(1,100)');
    var id = ast.id,
      is = ast.is;
    var expected = {
      id: id,
      type: '=',
      is: is,
      value: []
    };
    var item = (0, _sanitize_number.sanitizeNumber)(_objectSpread(_objectSpread({}, ast), {}, {
      type: '='
    }));
    expect(item).toMatchObject(expected);
  });
  it('works when switching from between types with value 0', function () {
    var ast = (0, _parse_filter_expression.parseFilterExpression)('number', '>0');
    var id = ast.id,
      is = ast.is;
    var expected = {
      id: id,
      type: '<',
      is: is,
      value: [0]
    };
    var item = (0, _sanitize_number.sanitizeNumber)(_objectSpread(_objectSpread({}, ast), {}, {
      type: '<'
    }));
    expect(item).toMatchObject(expected);
  });
});
//# sourceMappingURL=sanitize_number.spec.js.map