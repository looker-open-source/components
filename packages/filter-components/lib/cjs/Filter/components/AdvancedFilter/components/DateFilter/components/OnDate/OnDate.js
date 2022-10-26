"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnDate = void 0;

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireDefault(require("react"));

var _DateInput = require("../DateInput");

var OnDate = function OnDate(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange;
  var id = item.id,
      date = item.date;

  var dateChange = function dateChange(newValue) {
    var newDateTimeModel = (0, _filterExpressions.dateToFilterDateTimeModel)(newValue);
    onChange(id, {
      date: (0, _filterExpressions.clearTimeFilterDateTimeModel)(newDateTimeModel)
    });
  };

  var actualDate = date ? (0, _filterExpressions.filterDateTimeModelToDate)(date) : new Date(Date.now());
  return _react["default"].createElement(_DateInput.DateInput, {
    date: actualDate,
    onChange: dateChange,
    placement: "right"
  });
};

exports.OnDate = OnDate;
//# sourceMappingURL=OnDate.js.map