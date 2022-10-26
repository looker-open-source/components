"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRange = void 0;

var _components = require("@looker/components");

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireDefault(require("react"));

var _MidInputLabel = require("../../../MidInputLabel");

var _DateInput = require("../DateInput");

var _TimeInput = require("../TimeInput");

var _utils = require("../../../../../../../utils");

var DateRange = function DateRange(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange,
      placement = _ref.placement,
      showTime = _ref.showTime;
  var id = item.id,
      start = item.start,
      end = item.end;
  var startDate = start ? (0, _filterExpressions.filterDateTimeModelToDate)(start) : new Date(Date.now());
  var endDate = end ? (0, _filterExpressions.filterDateTimeModelToDate)(end) : new Date(Date.now());

  var startChange = function startChange(newStart) {
    if (newStart > endDate) {
      var newEnd = (0, _filterExpressions.addDays)(newStart, 1);
      onChange(id, {
        start: (0, _filterExpressions.dateToFilterDateTimeModel)(newStart),
        end: (0, _filterExpressions.dateToFilterDateTimeModel)(newEnd)
      });
    } else {
      onChange(id, {
        start: (0, _filterExpressions.dateToFilterDateTimeModel)(newStart)
      });
    }
  };

  var endChange = function endChange(newEnd) {
    if (newEnd < startDate) {
      var newStart = (0, _filterExpressions.addDays)(newEnd, -1);
      onChange(id, {
        start: (0, _filterExpressions.dateToFilterDateTimeModel)(newStart),
        end: (0, _filterExpressions.dateToFilterDateTimeModel)(newEnd)
      });
    } else {
      onChange(id, {
        end: (0, _filterExpressions.dateToFilterDateTimeModel)(newEnd)
      });
    }
  };

  var _useTranslation = (0, _utils.useTranslation)('DateRange'),
      t = _useTranslation.t;

  return _react["default"].createElement(_components.Flex, null, _react["default"].createElement(_DateInput.DateInput, {
    date: startDate,
    onChange: startChange,
    placement: placement === 'right' ? 'middle' : 'left'
  }), showTime && _react["default"].createElement(_TimeInput.TimeInput, {
    date: startDate,
    onChange: startChange,
    placement: "middle"
  }), _react["default"].createElement(_MidInputLabel.MidInputLabel, null, t('until (before)')), _react["default"].createElement(_DateInput.DateInput, {
    date: endDate,
    onChange: endChange,
    placement: showTime ? 'middle' : 'right'
  }), showTime && _react["default"].createElement(_TimeInput.TimeInput, {
    date: endDate,
    onChange: endChange,
    placement: "right"
  }));
};

exports.DateRange = DateRange;
//# sourceMappingURL=DateRange.js.map