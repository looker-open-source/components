"use strict";

var _relative_timeframe_types = require("../types/relative_timeframe_types");

var _relative_timeframe_conversions = require("./relative_timeframe_conversions");

describe('Relative Timeframe Conversions', function () {
  describe('filterModelToRelativeTimeframeModel', function () {
    it('converts Today', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'day',
        day: 'today'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Today);
    });
    it('converts Yesterday', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'day',
        day: 'yesterday'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Yesterday);
    });
    it('converts Last 7', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 7
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Last7);
    });
    it('converts Last 14', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 14
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Last14);
    });
    it('converts Last 28', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 28
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Last28);
    });
    it('converts Last 30', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 30
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Last30);
    });
    it('converts Last 90', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 90
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Last90);
    });
    it('converts Last 180', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 180
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Last180);
    });
    it('converts Last 365', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 365
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.Last365);
    });
    it('converts This Week', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'this',
        unit: 'week'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.ThisWeek);
    });
    it('converts This Month', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'this',
        unit: 'month'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.ThisMonth);
    });
    it('converts This Quarter', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'this',
        unit: 'quarter'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.ThisQuarter);
    });
    it('converts This Year', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'this',
        unit: 'year'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.ThisYear);
    });
    it('converts Last Week', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'last',
        unit: 'week'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.PreviousWeek);
    });
    it('converts Last Month', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'last',
        unit: 'month'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.PreviousMonth);
    });
    it('converts Last Quarter', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'last',
        unit: 'quarter'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.PreviousQuarter);
    });
    it('converts Last Year', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'last',
        unit: 'year'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.PreviousYear);
    });
    it('converts Year to Date', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'thisRange',
        startInterval: 'year',
        endInterval: 'second'
      })).toEqual(_relative_timeframe_types.AllPresetTimeframes.YearToDate);
    });
    it('converts custom ranges to inclusive ranges', function () {
      expect((0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)({
        id: '1',
        is: true,
        type: 'range',
        start: {
          year: 2019,
          month: 4,
          day: 1
        },
        end: {
          year: 2019,
          month: 5,
          day: 1
        }
      })).toEqual({
        from: new Date(2019, 3, 1),
        to: new Date(2019, 3, 30)
      });
    });
  });
  describe('relativeTimeframeModelToFilterModel', function () {
    it('converts Today', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Today)).toEqual({
        day: 'today',
        type: 'day'
      });
    });
    it('converts Yesterday', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Yesterday)).toEqual({
        day: 'yesterday',
        type: 'day'
      });
    });
    it('converts Last 7', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Last7)).toEqual({
        type: 'past',
        unit: 'day',
        value: 7
      });
    });
    it('converts Last 14', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Last14)).toEqual({
        type: 'past',
        unit: 'day',
        value: 14
      });
    });
    it('converts Last 28', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Last28)).toEqual({
        type: 'past',
        unit: 'day',
        value: 28
      });
    });
    it('converts Last 30', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Last30)).toEqual({
        type: 'past',
        unit: 'day',
        value: 30
      });
    });
    it('converts Last 90', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Last90)).toEqual({
        type: 'past',
        unit: 'day',
        value: 90
      });
    });
    it('converts Last 180', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Last180)).toEqual({
        type: 'past',
        unit: 'day',
        value: 180
      });
    });
    it('converts Last 365', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.Last365)).toEqual({
        type: 'past',
        unit: 'day',
        value: 365
      });
    });
    it('converts This Week', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.ThisWeek)).toEqual({
        type: 'this',
        unit: 'week'
      });
    });
    it('converts This Month', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.ThisMonth)).toEqual({
        type: 'this',
        unit: 'month'
      });
    });
    it('converts This Quarter', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.ThisQuarter)).toEqual({
        type: 'this',
        unit: 'quarter'
      });
    });
    it('converts This Year', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.ThisYear)).toEqual({
        type: 'this',
        unit: 'year'
      });
    });
    it('converts Last Week', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.PreviousWeek)).toEqual({
        type: 'last',
        unit: 'week'
      });
    });
    it('converts Last Month', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.PreviousMonth)).toEqual({
        type: 'last',
        unit: 'month'
      });
    });
    it('converts Last Quarter', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.PreviousQuarter)).toEqual({
        type: 'last',
        unit: 'quarter'
      });
    });
    it('converts Last Year', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(_relative_timeframe_types.AllPresetTimeframes.PreviousYear)).toEqual({
        type: 'last',
        unit: 'year'
      });
    });
    it('converts custom inclusive ranges', function () {
      expect((0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)({
        from: new Date(2019, 0, 1),
        to: new Date(2019, 0, 31)
      })).toEqual({
        type: 'range',
        start: {
          year: 2019,
          month: 1,
          day: 1,
          hour: 0,
          minute: 0,
          second: 0
        },
        end: {
          year: 2019,
          month: 2,
          day: 1,
          hour: 0,
          minute: 0,
          second: 0
        }
      });
    });
  });
});
//# sourceMappingURL=relative_timeframe_conversions.spec.js.map