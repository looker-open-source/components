"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _getDataRange5 = require("./getDataRange");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('getDataRange', function () {
  var mockData = [{
    'orders.count': 2,
    'orders.average_total_amount_of_order_usd': 5
  }, {
    'orders.count': 7,
    'orders.average_total_amount_of_order_usd': 3
  }, {
    'orders.count': -2,
    'orders.average_total_amount_of_order_usd': -10
  }];
  it('picks min and max value from data array', function () {
    var _getDataRange = (0, _getDataRange5.getDataRange)({
        config: _fixtures.mockBarConfig,
        fields: _fixtures.mockFields,
        data: mockData
      }),
      _getDataRange2 = (0, _slicedToArray2["default"])(_getDataRange, 2),
      dataMin = _getDataRange2[0],
      dataMax = _getDataRange2[1];
    expect(dataMin).toEqual(-10);
    expect(dataMax).toEqual(7);
  });
  it('picks min and max accumulated value of each data group when positioning == stacked', function () {
    var _getDataRange3 = (0, _getDataRange5.getDataRange)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          positioning: 'stacked'
        }),
        fields: _fixtures.mockFields,
        data: mockData
      }),
      _getDataRange4 = (0, _slicedToArray2["default"])(_getDataRange3, 2),
      dataMin = _getDataRange4[0],
      dataMax = _getDataRange4[1];
    expect(dataMin).toEqual(-12);
    expect(dataMax).toEqual(10);
  });
});
//# sourceMappingURL=getDataRange.spec.js.map