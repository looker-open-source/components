"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _sortByDateTime = require("./sortByDateTime");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('sortByDateTime', function () {
  var mockData = [{
    'orders.created_month': '2019-11',
    'orders.count': 1
  }, {
    'orders.created_month': '2018-10',
    'orders.count': 20
  }, {
    'orders.created_month': '2014-07',
    'orders.count': 300
  }, {
    'orders.created_month': '2017-09',
    'orders.count': 4000
  }];
  var measures = _fixtures.mockFields.measures,
    dimensions = _fixtures.mockFields.dimensions;
  it('sorts data in chronological order', function () {
    var sortedData = (0, _sortByDateTime.sortByDateTime)({
      data: mockData,
      fields: {
        measures: measures,
        dimensions: [_objectSpread(_objectSpread({}, dimensions[0]), {}, {
          name: 'orders.created_month'
        })],
        pivots: []
      },
      config: {
        type: 'line'
      }
    });
    expect(sortedData.data).toMatchInlineSnapshot("\n      Array [\n        Object {\n          \"orders.count\": 300,\n          \"orders.created_month\": \"2014-07\",\n        },\n        Object {\n          \"orders.count\": 4000,\n          \"orders.created_month\": \"2017-09\",\n        },\n        Object {\n          \"orders.count\": 20,\n          \"orders.created_month\": \"2018-10\",\n        },\n        Object {\n          \"orders.count\": 1,\n          \"orders.created_month\": \"2019-11\",\n        },\n      ]\n    ");
  });
});
//# sourceMappingURL=sortByDateTime.spec.js.map