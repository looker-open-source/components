"use strict";

var _getSeriesMax = require("./getSeriesMax");

describe('getSeriesMax', function () {
  it('gets maximum value from data array', function () {
    var data = [{
      series1: 0,
      series2: 10
    }, {
      series1: 3,
      series2: 7
    }];
    expect((0, _getSeriesMax.getSeriesMax)('series1', data)).toEqual(3);
    expect((0, _getSeriesMax.getSeriesMax)('series2', data)).toEqual(10);
  });
  it('it ignores missing or non-numeric values', function () {
    var data = [{
      series1: -50,
      series2: -20
    }, {
      series1: -3,
      series2: -7
    }, {
      series1: null,
      series2: 'negative seven hundred'
    }];
    expect((0, _getSeriesMax.getSeriesMax)('series1', data)).toEqual(-3);
    expect((0, _getSeriesMax.getSeriesMax)('series2', data)).toEqual(-7);
  });
  it('returns zero when all data points are non-numeric', function () {
    var data = [{
      series1: 'today',
      series2: 'gold'
    }, {
      series1: 'thirty five',
      series2: 'doogie houser'
    }, {
      series1: null,
      series2: 'negative seven hundred'
    }];
    expect((0, _getSeriesMax.getSeriesMax)('series1', data)).toEqual(0);
    expect((0, _getSeriesMax.getSeriesMax)('series2', data)).toEqual(0);
  });
});
//# sourceMappingURL=getSeriesMax.spec.js.map