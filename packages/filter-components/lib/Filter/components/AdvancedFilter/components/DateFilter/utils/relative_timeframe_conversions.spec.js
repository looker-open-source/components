import { AllPresetTimeframes } from '../types/relative_timeframe_types';
import { filterModelToRelativeTimeframeModel, relativeTimeframeModelToFilterModel } from './relative_timeframe_conversions';
describe('Relative Timeframe Conversions', () => {
  describe('filterModelToRelativeTimeframeModel', () => {
    it('converts Today', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'day',
        day: 'today'
      })).toEqual(AllPresetTimeframes.Today);
    });
    it('converts Yesterday', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'day',
        day: 'yesterday'
      })).toEqual(AllPresetTimeframes.Yesterday);
    });
    it('converts Last 7', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 7
      })).toEqual(AllPresetTimeframes.Last7);
    });
    it('converts Last 14', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 14
      })).toEqual(AllPresetTimeframes.Last14);
    });
    it('converts Last 28', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 28
      })).toEqual(AllPresetTimeframes.Last28);
    });
    it('converts Last 30', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 30
      })).toEqual(AllPresetTimeframes.Last30);
    });
    it('converts Last 90', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 90
      })).toEqual(AllPresetTimeframes.Last90);
    });
    it('converts Last 180', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 180
      })).toEqual(AllPresetTimeframes.Last180);
    });
    it('converts Last 365', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'past',
        unit: 'day',
        value: 365
      })).toEqual(AllPresetTimeframes.Last365);
    });
    it('converts This Week', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'this',
        unit: 'week'
      })).toEqual(AllPresetTimeframes.ThisWeek);
    });
    it('converts This Month', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'this',
        unit: 'month'
      })).toEqual(AllPresetTimeframes.ThisMonth);
    });
    it('converts This Quarter', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'this',
        unit: 'quarter'
      })).toEqual(AllPresetTimeframes.ThisQuarter);
    });
    it('converts This Year', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'this',
        unit: 'year'
      })).toEqual(AllPresetTimeframes.ThisYear);
    });
    it('converts Last Week', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'last',
        unit: 'week'
      })).toEqual(AllPresetTimeframes.PreviousWeek);
    });
    it('converts Last Month', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'last',
        unit: 'month'
      })).toEqual(AllPresetTimeframes.PreviousMonth);
    });
    it('converts Last Quarter', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'last',
        unit: 'quarter'
      })).toEqual(AllPresetTimeframes.PreviousQuarter);
    });
    it('converts Last Year', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'last',
        unit: 'year'
      })).toEqual(AllPresetTimeframes.PreviousYear);
    });
    it('converts Year to Date', () => {
      expect(filterModelToRelativeTimeframeModel({
        id: '1',
        is: true,
        type: 'thisRange',
        startInterval: 'year',
        endInterval: 'second'
      })).toEqual(AllPresetTimeframes.YearToDate);
    });
    it('converts custom ranges to inclusive ranges', () => {
      expect(filterModelToRelativeTimeframeModel({
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
  describe('relativeTimeframeModelToFilterModel', () => {
    it('converts Today', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Today)).toEqual({
        day: 'today',
        type: 'day'
      });
    });
    it('converts Yesterday', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Yesterday)).toEqual({
        day: 'yesterday',
        type: 'day'
      });
    });
    it('converts Last 7', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Last7)).toEqual({
        type: 'past',
        unit: 'day',
        value: 7
      });
    });
    it('converts Last 14', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Last14)).toEqual({
        type: 'past',
        unit: 'day',
        value: 14
      });
    });
    it('converts Last 28', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Last28)).toEqual({
        type: 'past',
        unit: 'day',
        value: 28
      });
    });
    it('converts Last 30', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Last30)).toEqual({
        type: 'past',
        unit: 'day',
        value: 30
      });
    });
    it('converts Last 90', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Last90)).toEqual({
        type: 'past',
        unit: 'day',
        value: 90
      });
    });
    it('converts Last 180', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Last180)).toEqual({
        type: 'past',
        unit: 'day',
        value: 180
      });
    });
    it('converts Last 365', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.Last365)).toEqual({
        type: 'past',
        unit: 'day',
        value: 365
      });
    });
    it('converts This Week', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.ThisWeek)).toEqual({
        type: 'this',
        unit: 'week'
      });
    });
    it('converts This Month', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.ThisMonth)).toEqual({
        type: 'this',
        unit: 'month'
      });
    });
    it('converts This Quarter', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.ThisQuarter)).toEqual({
        type: 'this',
        unit: 'quarter'
      });
    });
    it('converts This Year', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.ThisYear)).toEqual({
        type: 'this',
        unit: 'year'
      });
    });
    it('converts Last Week', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.PreviousWeek)).toEqual({
        type: 'last',
        unit: 'week'
      });
    });
    it('converts Last Month', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.PreviousMonth)).toEqual({
        type: 'last',
        unit: 'month'
      });
    });
    it('converts Last Quarter', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.PreviousQuarter)).toEqual({
        type: 'last',
        unit: 'quarter'
      });
    });
    it('converts Last Year', () => {
      expect(relativeTimeframeModelToFilterModel(AllPresetTimeframes.PreviousYear)).toEqual({
        type: 'last',
        unit: 'year'
      });
    });
    it('converts custom inclusive ranges', () => {
      expect(relativeTimeframeModelToFilterModel({
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