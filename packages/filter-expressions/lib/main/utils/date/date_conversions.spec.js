"use strict";

var _date_conversions = require("./date_conversions");

describe('dateToFilterDateTimeModel', function () {
  it('correctly converts native dates to the filter model', function () {
    expect((0, _date_conversions.dateToFilterDateTimeModel)(new Date(1803, 3, 30, 12, 23, 34))).toEqual({
      year: 1803,
      month: 4,
      day: 30,
      hour: 12,
      minute: 23,
      second: 34
    });
  });
});
describe('filterDateTimeModelToDate', function () {
  it('correctly converts a filter model to native date', function () {
    var date = new Date(1861, 3, 12, 15, 16, 17);
    expect((0, _date_conversions.filterDateTimeModelToDate)({
      year: 1861,
      month: 4,
      day: 12,
      hour: 15,
      minute: 16,
      second: 17
    })).toEqual(date);
  });
});
describe('addDays', function () {
  it('correctly adds the appropriate number of days to the parameter', function () {
    var date = new Date(1914, 6, 28);
    expect((0, _date_conversions.addDays)(date, 9166)).toEqual(new Date(1939, 8, 1));
  });
  it('correctly subtracts the appropriate number of days from the parameter', function () {
    var date = new Date(1941, 11, 7);
    expect((0, _date_conversions.addDays)(date, -828)).toEqual(new Date(1939, 8, 1));
  });
});
describe('clearTimeFilterDateTimeModel', function () {
  it('correctly removes time part from filter datetime model', function () {
    var date = (0, _date_conversions.clearTimeFilterDateTimeModel)({
      year: 1,
      month: 2,
      day: 3,
      hour: 4,
      minute: 5,
      second: 6
    });
    expect(date).toEqual({
      year: 1,
      month: 2,
      day: 3
    });
  });
});
describe('hasTimeFilterDateTimeModel', function () {
  it('returns true for model with time part', function () {
    expect((0, _date_conversions.hasTimeFilterDateTimeModel)({
      year: 1,
      month: 2,
      day: 3,
      hour: 4,
      minute: 5,
      second: 6
    })).toBe(true);
  });
  it('returns false for model without time part', function () {
    expect((0, _date_conversions.hasTimeFilterDateTimeModel)({
      year: 1,
      month: 2,
      day: 3
    })).toBe(false);
  });
});
//# sourceMappingURL=date_conversions.spec.js.map