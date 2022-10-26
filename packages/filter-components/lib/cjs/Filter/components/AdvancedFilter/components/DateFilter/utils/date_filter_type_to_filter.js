"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateFilterTypeToFilter = void 0;

var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));

var _MatchesAdvanced = require("../../MatchesAdvanced");

var _UserAttributes = require("../../UserAttributes");

var _BeforeAfter = require("../components/BeforeAfter");

var _DateRange = require("../components/DateRange");

var _OnDate = require("../components/OnDate");

var _Past = require("../components/Past");

var _Relative = require("../components/Relative");

var _ThisNextLast = require("../components/ThisNextLast");

var _Year = require("../components/Year");

var _YearMonth = require("../components/YearMonth");

var Blank = function Blank() {
  return '';
};

var filterTypeToDateMap = {
  "null": Blank,
  anyvalue: Blank,
  notnull: Blank,
  past: _Past.Past,
  pastAgo: _MatchesAdvanced.MatchesAdvanced,
  day: _MatchesAdvanced.MatchesAdvanced,
  "this": _ThisNextLast.ThisNextLast,
  next: _ThisNextLast.ThisNextLast,
  last: _ThisNextLast.ThisNextLast,
  year: _Year.Year,
  month: _YearMonth.YearMonth,
  before: _BeforeAfter.BeforeAfter,
  after: _BeforeAfter.BeforeAfter,
  range: _DateRange.DateRange,
  thisRange: _MatchesAdvanced.MatchesAdvanced,
  on: _OnDate.OnDate,
  relative: _Relative.Relative,
  user_attribute: _UserAttributes.UserAttributes
};

var dateFilterTypeToFilter = function dateFilterTypeToFilter(type) {
  return (0, _defaultTo["default"])(filterTypeToDateMap[type], _MatchesAdvanced.MatchesAdvanced);
};

exports.dateFilterTypeToFilter = dateFilterTypeToFilter;
//# sourceMappingURL=date_filter_type_to_filter.js.map