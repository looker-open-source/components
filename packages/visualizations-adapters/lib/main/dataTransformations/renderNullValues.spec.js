"use strict";

var _nullValueZero3 = require("./nullValueZero");
var _fixtures = require("../fixtures");

describe('nullValueZero', function () {
  var mockData = [{
    'orders.created_month': '2019-11',
    'orders.count': 1,
    'orders.average_total_amount_of_order_usd': null
  }, {
    'orders.created_month': '2014-07',
    'orders.count': null,
    'orders.average_total_amount_of_order_usd': null
  }, {
    'orders.created_month': '2017-09',
    'orders.count': 4000,
    'orders.average_total_amount_of_order_usd': 15
  }];
  it('replaces null values with 0 when render_null_values is true', function () {
    var _nullValueZero = (0, _nullValueZero3.nullValueZero)({
        data: mockData,
        fields: _fixtures.mockFields,
        config: {
          type: 'line',
          render_null_values: true
        }
      }),
      draftData = _nullValueZero.data;
    expect(draftData).toMatchInlineSnapshot("\n      Array [\n        Object {\n          \"orders.average_total_amount_of_order_usd\": 0,\n          \"orders.count\": 1,\n          \"orders.created_month\": \"2019-11\",\n        },\n        Object {\n          \"orders.average_total_amount_of_order_usd\": 0,\n          \"orders.count\": 0,\n          \"orders.created_month\": \"2014-07\",\n        },\n        Object {\n          \"orders.average_total_amount_of_order_usd\": 15,\n          \"orders.count\": 4000,\n          \"orders.created_month\": \"2017-09\",\n        },\n      ]\n    ");
  });
  it('passes through unmodified data when render_null_values is false', function () {
    var _nullValueZero2 = (0, _nullValueZero3.nullValueZero)({
        data: mockData,
        fields: _fixtures.mockFields,
        config: {
          type: 'line',
          render_null_values: false
        }
      }),
      draftData = _nullValueZero2.data;
    expect(draftData).toEqual(mockData);
  });
});
//# sourceMappingURL=renderNullValues.spec.js.map