"use strict";

var _formatTotals = require("./formatTotals");
var _fixtures = require("../fixtures");

it('tranforms raw totals to desired format for one level deep object', function () {
  expect((0, _formatTotals.formatTotals)(_fixtures.mockRawTotals)).toEqual(_fixtures.mockTotals);
});
it('tranforms raw totals to desired format for nested object', function () {
  expect((0, _formatTotals.formatTotals)(_fixtures.mockNestedRawTotals)).toEqual(_fixtures.mockNestedTotals);
});
//# sourceMappingURL=formatTotals.spec.js.map