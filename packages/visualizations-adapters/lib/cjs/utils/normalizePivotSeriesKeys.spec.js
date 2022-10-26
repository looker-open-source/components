"use strict";

var _normalizePivotSeriesKeys = require("./normalizePivotSeriesKeys");

describe('normalizePivotSeriesKeys', function () {
  it('converts sdk formatted pivot keys to our supported pivot keys', function () {
    var series_colors = {
      'Yes - orders.count': '#FFFFFF'
    };
    var output = (0, _normalizePivotSeriesKeys.normalizePivotSeriesKeys)(series_colors);
    expect(output).toEqual({
      'Yes - orders.count': '#FFFFFF'
    });
  });
  it('it converts Row Total keys to reference magic string', function () {
    var series_colors = {
      '$$$_row_total_$$$ - orders.count': '#FFFFFF'
    };
    var output = (0, _normalizePivotSeriesKeys.normalizePivotSeriesKeys)(series_colors);
    expect(output).toEqual({
      '$$$_row_total_$$$ - orders.count': '#FFFFFF'
    });
  });
});
//# sourceMappingURL=normalizePivotSeriesKeys.spec.js.map