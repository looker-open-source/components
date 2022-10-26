"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearMonth = void 0;

var _filterExpressions = require("@looker/filter-expressions");

var _padStart = _interopRequireDefault(require("lodash/padStart"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../../../../utils");

var _option_utils = require("../../../../../../utils/option_utils");

var _GroupSelect = require("../../../GroupSelect");

var _GroupInput = require("../../../GroupInput");

var YearMonth = function YearMonth(_ref) {
  var _ref$item = _ref.item,
      id = _ref$item.id,
      month = _ref$item.month,
      year = _ref$item.year,
      onChange = _ref.onChange;

  var _useTranslation = (0, _utils.useTranslation)('get_months'),
      t = _useTranslation.t;

  var months = (0, _filterExpressions.getMonths)(t);
  var monthNumber = Number.parseInt(month, 10) - 1;
  var monthString = months[monthNumber];

  var yearChange = function yearChange(e) {
    onChange(id, {
      year: e.target.value
    });
  };

  var monthChange = function monthChange(value) {
    var monthValue = (0, _padStart["default"])(String(months.indexOf(value) + 1), 2, '0');
    onChange(id, {
      month: monthValue
    });
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: monthString,
    options: (0, _option_utils.createOptions)(months),
    onChange: monthChange,
    placement: "middle"
  }), _react["default"].createElement(_GroupInput.GroupInput, {
    onChange: yearChange,
    value: year,
    placement: "right"
  }));
};

exports.YearMonth = YearMonth;
//# sourceMappingURL=YearMonth.js.map