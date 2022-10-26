"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relativeTimeframeModelToFilterModel = exports.filterModelToRelativeTimeframeModel = void 0;

var _filterExpressions = require("@looker/filter-expressions");

var _relative_timeframe_types = require("../types/relative_timeframe_types");

var filterModelToRelativeTimeframeModel = function filterModelToRelativeTimeframeModel(filterModel) {
  var day = filterModel.day,
      end = filterModel.end,
      start = filterModel.start,
      type = filterModel.type,
      unit = filterModel.unit,
      value = filterModel.value,
      startInterval = filterModel.startInterval,
      endInterval = filterModel.endInterval;

  if (type === 'day' && day === 'today') {
    return _relative_timeframe_types.AllPresetTimeframes.Today;
  } else if (type === 'day' && day === 'yesterday') {
    return _relative_timeframe_types.AllPresetTimeframes.Yesterday;
  } else if (type === 'past' && unit === 'day' && value === 7) {
    return _relative_timeframe_types.AllPresetTimeframes.Last7;
  } else if (type === 'past' && unit === 'day' && value === 14) {
    return _relative_timeframe_types.AllPresetTimeframes.Last14;
  } else if (type === 'past' && unit === 'day' && value === 28) {
    return _relative_timeframe_types.AllPresetTimeframes.Last28;
  } else if (type === 'past' && unit === 'day' && value === 30) {
    return _relative_timeframe_types.AllPresetTimeframes.Last30;
  } else if (type === 'past' && unit === 'day' && value === 90) {
    return _relative_timeframe_types.AllPresetTimeframes.Last90;
  } else if (type === 'past' && unit === 'day' && value === 180) {
    return _relative_timeframe_types.AllPresetTimeframes.Last180;
  } else if (type === 'past' && unit === 'day' && value === 365) {
    return _relative_timeframe_types.AllPresetTimeframes.Last365;
  } else if (type === 'thisRange' && startInterval === 'year' && endInterval === 'second') {
    return _relative_timeframe_types.AllPresetTimeframes.YearToDate;
  } else if (type === 'this' && unit === 'week') {
    return _relative_timeframe_types.AllPresetTimeframes.ThisWeek;
  } else if (type === 'this' && unit === 'month') {
    return _relative_timeframe_types.AllPresetTimeframes.ThisMonth;
  } else if (type === 'this' && unit === 'quarter') {
    return _relative_timeframe_types.AllPresetTimeframes.ThisQuarter;
  } else if (type === 'this' && unit === 'year') {
    return _relative_timeframe_types.AllPresetTimeframes.ThisYear;
  } else if (type === 'last' && unit === 'week') {
    return _relative_timeframe_types.AllPresetTimeframes.PreviousWeek;
  } else if (type === 'last' && unit === 'month') {
    return _relative_timeframe_types.AllPresetTimeframes.PreviousMonth;
  } else if (type === 'last' && unit === 'quarter') {
    return _relative_timeframe_types.AllPresetTimeframes.PreviousQuarter;
  } else if (type === 'last' && unit === 'year') {
    return _relative_timeframe_types.AllPresetTimeframes.PreviousYear;
  } else if (type === 'range' && end && start) {
    var startDate = (0, _filterExpressions.filterDateTimeModelToDate)(start);
    var endDate = (0, _filterExpressions.addDays)((0, _filterExpressions.filterDateTimeModelToDate)(end), -1);
    return {
      from: startDate,
      to: endDate
    };
  }

  return undefined;
};

exports.filterModelToRelativeTimeframeModel = filterModelToRelativeTimeframeModel;

var relativeTimeframeModelToFilterModel = function relativeTimeframeModelToFilterModel(relativeTimeframe) {
  switch (relativeTimeframe) {
    case _relative_timeframe_types.AllPresetTimeframes.Today:
      return {
        day: 'today',
        type: 'day'
      };

    case _relative_timeframe_types.AllPresetTimeframes.Yesterday:
      return {
        day: 'yesterday',
        type: 'day'
      };

    case _relative_timeframe_types.AllPresetTimeframes.Last7:
      return {
        type: 'past',
        unit: 'day',
        value: 7
      };

    case _relative_timeframe_types.AllPresetTimeframes.Last14:
      return {
        type: 'past',
        unit: 'day',
        value: 14
      };

    case _relative_timeframe_types.AllPresetTimeframes.Last28:
      return {
        type: 'past',
        unit: 'day',
        value: 28
      };

    case _relative_timeframe_types.AllPresetTimeframes.Last30:
      return {
        type: 'past',
        unit: 'day',
        value: 30
      };

    case _relative_timeframe_types.AllPresetTimeframes.Last90:
      return {
        type: 'past',
        unit: 'day',
        value: 90
      };

    case _relative_timeframe_types.AllPresetTimeframes.Last180:
      return {
        type: 'past',
        unit: 'day',
        value: 180
      };

    case _relative_timeframe_types.AllPresetTimeframes.Last365:
      return {
        type: 'past',
        unit: 'day',
        value: 365
      };

    case _relative_timeframe_types.AllPresetTimeframes.YearToDate:
      return {
        type: 'thisRange',
        startInterval: 'year',
        endInterval: 'second'
      };

    case _relative_timeframe_types.AllPresetTimeframes.ThisWeek:
      return {
        type: 'this',
        unit: 'week'
      };

    case _relative_timeframe_types.AllPresetTimeframes.ThisMonth:
      return {
        type: 'this',
        unit: 'month'
      };

    case _relative_timeframe_types.AllPresetTimeframes.ThisQuarter:
      return {
        type: 'this',
        unit: 'quarter'
      };

    case _relative_timeframe_types.AllPresetTimeframes.ThisYear:
      return {
        type: 'this',
        unit: 'year'
      };

    case _relative_timeframe_types.AllPresetTimeframes.PreviousWeek:
      return {
        type: 'last',
        unit: 'week'
      };

    case _relative_timeframe_types.AllPresetTimeframes.PreviousMonth:
      return {
        type: 'last',
        unit: 'month'
      };

    case _relative_timeframe_types.AllPresetTimeframes.PreviousQuarter:
      return {
        type: 'last',
        unit: 'quarter'
      };

    case _relative_timeframe_types.AllPresetTimeframes.PreviousYear:
      return {
        type: 'last',
        unit: 'year'
      };
  }

  var dayRange = relativeTimeframe;
  var startDateModel = (0, _filterExpressions.dateToFilterDateTimeModel)(dayRange.from);
  var endPlusOne = (0, _filterExpressions.addDays)(dayRange.to, 1);
  var endDateModel = (0, _filterExpressions.dateToFilterDateTimeModel)(endPlusOne);
  return {
    end: endDateModel,
    start: startDateModel,
    type: 'range'
  };
};

exports.relativeTimeframeModelToFilterModel = relativeTimeframeModelToFilterModel;
//# sourceMappingURL=relative_timeframe_conversions.js.map