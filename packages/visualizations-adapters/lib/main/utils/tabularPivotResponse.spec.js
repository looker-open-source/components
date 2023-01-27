"use strict";

var _tabularPivotResponse = require("./tabularPivotResponse");
var _fixtures = require("../fixtures");

describe('tabularPivotResponse', function () {
  it('flattens raw pivot data', function () {
    var transformedData = (0, _tabularPivotResponse.tabularPivotResponse)({
      data: _fixtures.mockSdkPivotDataResponse,
      fields: _fixtures.mockSdkFieldsResponse,
      pivots: _fixtures.mockPivots
    });
    var expectedKeys = ['orders.created_date', 'complete - orders.count', 'pending - orders.count', 'cancelled - orders.count', 'complete - orders.average_total_amount_of_order_usd', 'pending - orders.average_total_amount_of_order_usd', 'cancelled - orders.average_total_amount_of_order_usd'];
    expectedKeys.forEach(function (key) {
      expect(transformedData[0][key]).not.toBeUndefined();
    });
    expect(transformedData[0]['pending - orders.count']).toBe(38);
    expect(transformedData[1]['pending - orders.average_total_amount_of_order_usd']).toBe(80.47117647058822);
  });
});
//# sourceMappingURL=tabularPivotResponse.spec.js.map