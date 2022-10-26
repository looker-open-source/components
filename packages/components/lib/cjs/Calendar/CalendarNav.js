"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChevronLeft = require("@styled-icons/material-rounded/ChevronLeft/ChevronLeft");

var _ChevronRight = require("@styled-icons/material-rounded/ChevronRight/ChevronRight");

var _ArrowDropDown = require("@styled-icons/material/ArrowDropDown/ArrowDropDown");

var _dateFns = require("date-fns");

var _Button = require("../Button");

var _Layout = require("../Layout");

var _utils = require("../utils");

var _utils2 = require("./utils");

var CalendarNav = function CalendarNav(_ref) {
  var locale = _ref.locale,
      monthYear = _ref.monthYear,
      onMonthChange = _ref.onMonthChange,
      onOpenMonthPicker = _ref.onOpenMonthPicker;

  var _useTranslation = (0, _utils.useTranslation)('CalendarNav'),
      t = _useTranslation.t;

  var handleNextMonth = function handleNextMonth() {
    onMonthChange && onMonthChange((0, _dateFns.setMonth)(monthYear, (0, _dateFns.getMonth)(monthYear) + 1));
  };

  var handlePreviousMonth = function handlePreviousMonth() {
    onMonthChange && onMonthChange((0, _dateFns.setMonth)(monthYear, (0, _dateFns.getMonth)(monthYear) - 1));
  };

  return _react["default"].createElement(_Layout.Space, {
    py: "u3",
    px: "u4"
  }, _react["default"].createElement(_Button.ButtonTransparent, {
    color: "neutral",
    iconAfter: _react["default"].createElement(_ArrowDropDown.ArrowDropDown, null),
    onClick: onOpenMonthPicker,
    size: "xsmall"
  }, (0, _utils2.formatDateString)(monthYear, 'MMM yyyy', locale)), _react["default"].createElement(_Layout.Space, {
    justify: "end",
    gap: "xsmall"
  }, _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_ChevronLeft.ChevronLeft, null),
    label: t('previous month'),
    onClick: handlePreviousMonth
  }), _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_ChevronRight.ChevronRight, null),
    label: t('next month'),
    onClick: handleNextMonth
  })));
};

exports.CalendarNav = CalendarNav;
//# sourceMappingURL=CalendarNav.js.map