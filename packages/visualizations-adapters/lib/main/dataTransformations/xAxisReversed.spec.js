"use strict";

var _xAxisReversed2 = require("./xAxisReversed");
var _fixtures = require("../fixtures");

describe('xAxisReversed', function () {
  var mockData = [{
    'orders.created_month': 'First',
    'orders.count': 1
  }, {
    'orders.created_month': 'Second',
    'orders.count': 1000
  }, {
    'orders.created_month': 'Third',
    'orders.count': 4000
  }];
  it('reversed data', function () {
    var _xAxisReversed = (0, _xAxisReversed2.xAxisReversed)({
        data: mockData,
        fields: _fixtures.mockFields,
        config: {
          type: 'line',
          x_axis: [{
            reversed: true
          }]
        }
      }),
      draftData = _xAxisReversed.data;
    expect(draftData).toMatchInlineSnapshot("\n      Array [\n        Object {\n          \"orders.count\": 4000,\n          \"orders.created_month\": \"Third\",\n        },\n        Object {\n          \"orders.count\": 1000,\n          \"orders.created_month\": \"Second\",\n        },\n        Object {\n          \"orders.count\": 1,\n          \"orders.created_month\": \"First\",\n        },\n      ]\n    ");
  });
});
//# sourceMappingURL=xAxisReversed.spec.js.map