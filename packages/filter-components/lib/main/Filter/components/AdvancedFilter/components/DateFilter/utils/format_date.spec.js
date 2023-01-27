"use strict";

var _format_date = require("./format_date");

describe('formatDate', function () {
  it('returns YYYY/MM/DD format for dates', function () {
    expect((0, _format_date.formatDate)(new Date(1791, 11, 15))).toEqual('1791/12/15');
  });
  it('0 pads month and day when single digits', function () {
    expect((0, _format_date.formatDate)(new Date(1776, 6, 4))).toEqual('1776/07/04');
  });
  it('ignores times', function () {
    expect((0, _format_date.formatDate)(new Date(1776, 6, 4, 12, 0, 0))).toEqual('1776/07/04');
  });
});
//# sourceMappingURL=format_date.spec.js.map