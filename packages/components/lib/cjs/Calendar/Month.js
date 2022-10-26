"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Month = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _dateFns = require("date-fns");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _Layout = require("../Layout");

var _Day = require("./Day");

var _Cell = require("./Cell");

var _MonthTitle = require("./MonthTitle");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getMonthPadding = function getMonthPadding(month, firstDayOfWeek) {
  var startDate = (0, _dateFns.startOfMonth)(month);
  var endDate = (0, _dateFns.endOfMonth)(month);
  var startDay = (0, _dateFns.getDay)(startDate);
  var endDay = (0, _dateFns.getDay)(endDate);
  var startPadding = correctNegativePadding(startDay - firstDayOfWeek);
  var endPadding = 6 - endDay + firstDayOfWeek;
  return {
    endPadding: endPadding,
    startPadding: startPadding
  };
};

var correctNegativePadding = function correctNegativePadding(padding) {
  return padding < 0 ? padding + 7 : padding;
};

var getDaysArray = function getDaysArray(month, startPadding, endPadding) {
  var daysInMonth = (0, _dateFns.getDaysInMonth)(month);
  var totalDays = startPadding + daysInMonth + endPadding;
  return Array.from(Array(totalDays), function (_, i) {
    if (i < startPadding) return 'before';
    if (i > totalDays - endPadding - 1) return 'after';
    var dayOfMonth = i - startPadding + 1;
    return (0, _dateFns.setDate)(month, dayOfMonth);
  });
};

var getRangeType = function getRangeType(_ref) {
  var datesSelected = _ref.datesSelected,
      draftTo = _ref.draftTo;
  if (datesSelected.length === 2) return 'selected';
  if (draftTo) return 'draft';
  return 'none';
};

var getRangePosition = function getRangePosition(day, month, _ref2) {
  var datesSelected = _ref2.datesSelected,
      draftTo = _ref2.draftTo;
  var start = datesSelected[0];
  var end = datesSelected[1] || draftTo;
  if (!start || !end) return undefined;

  if (day === 'before') {
    if (start && end && (0, _dateFns.isBefore)(start, (0, _dateFns.startOfMonth)(month)) && (0, _dateFns.isAfter)(end, (0, _dateFns.startOfMonth)(month))) {
      return 'middle';
    }

    return undefined;
  }

  if (day === 'after') {
    if (start && end && (0, _dateFns.isBefore)(start, (0, _dateFns.endOfMonth)(month)) && (0, _dateFns.isAfter)(end, (0, _dateFns.endOfMonth)(month))) {
      return 'middle';
    }

    return undefined;
  }

  if ((0, _dateFns.isSameDay)(day, start) && (0, _dateFns.isSameDay)(day, end)) return undefined;
  if ((0, _dateFns.isSameDay)(day, start)) return 'start';
  if ((0, _dateFns.isSameDay)(day, end)) return 'end';
  if ((0, _dateFns.isAfter)(day, start) && (0, _dateFns.isBefore)(day, end)) return 'middle';
  return undefined;
};

var Month = (0, _styledComponents["default"])(function (_ref3) {
  var className = _ref3.className,
      datesSelected = _ref3.datesSelected,
      draftTo = _ref3.draftTo,
      firstDayOfWeek = _ref3.firstDayOfWeek,
      fullRender = _ref3.fullRender,
      index = _ref3.index,
      locale = _ref3.locale,
      onSelect = _ref3.onSelect,
      onDraftSelect = _ref3.onDraftSelect,
      date = _ref3.date,
      setItemPosition = _ref3.setItemPosition;

  var _getMonthPadding = getMonthPadding(date, firstDayOfWeek),
      startPadding = _getMonthPadding.startPadding,
      endPadding = _getMonthPadding.endPadding;

  var days = getDaysArray(date, startPadding, endPadding);
  var rangeType = getRangeType({
    datesSelected: datesSelected,
    draftTo: draftTo
  });
  var ref = (0, _react.useCallback)(function (element) {
    if (element) {
      setItemPosition(index, element);
    }
  }, [setItemPosition, index]);
  var titleInline = startPadding > 2;
  var firstDayRangePosition = getRangePosition((0, _dateFns.startOfMonth)(date), date, {
    datesSelected: datesSelected,
    draftTo: draftTo
  });
  var titleRangeType = !titleInline && fullRender && firstDayRangePosition === 'middle' ? rangeType : 'none';

  var _useTheme = (0, _styledComponents.useTheme)(),
      space = _useTheme.space;

  var height = "calc(".concat(space.u8, " * ").concat(days.length / 7, ")");
  return _react["default"].createElement("div", {
    className: className,
    ref: ref
  }, _react["default"].createElement(_MonthTitle.MonthTitle, {
    month: date,
    rangePosition: firstDayRangePosition,
    rangeType: titleRangeType,
    inline: titleInline,
    locale: locale
  }), _react["default"].createElement(_Layout.Grid, {
    columns: 7,
    gap: "none",
    height: height,
    className: fullRender ? 'full-render' : ''
  }, fullRender && days.map(function (day, i) {
    var rangePosition = getRangePosition(day, date, {
      datesSelected: datesSelected,
      draftTo: draftTo
    });
    return _react["default"].createElement(_Cell.Cell, {
      key: i,
      weekStart: i % 7 === 0,
      weekEnd: i % 7 === 6,
      rangeType: rangeType,
      rangePosition: rangePosition
    }, typeof day !== 'string' && _react["default"].createElement(_Day.Day, {
      date: day,
      locale: locale,
      onSelect: onSelect,
      onDraftSelect: onDraftSelect,
      selected: datesSelected.some(function (date) {
        return (0, _dateFns.isSameDay)(date, day);
      })
    }));
  })));
}).withConfig({
  displayName: "Month",
  componentId: "sc-1d3pod3-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: fit-content;\n  ", " {\n    /* Use auto instead of the default minmax(0, 1fr)\n    so that 1st & last cells in the row can be larger */\n    grid-template-columns: repeat(7, auto);\n    &.full-render {\n      animation-duration: ", ";\n      animation-fill-mode: forwards;\n      animation-name: ", ";\n    }\n  }\n"])), _Layout.Grid, function (_ref4) {
  var theme = _ref4.theme;
  return "".concat(theme.transitions.moderate, "ms");
}, _designTokens.fadeIn);
exports.Month = Month;
//# sourceMappingURL=Month.js.map