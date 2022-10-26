"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _i18n = require("@looker/i18n");

var _dateFns = require("date-fns");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Divider = require("../Divider");

var _utils = require("../utils");

var _DialogContext = require("../Dialog/DialogContext");

var _DaysOfWeek = require("./DaysOfWeek");

var _CalendarNav = require("./CalendarNav");

var _MonthList = require("./MonthList");

var _MonthPickerNav = require("./MonthPickerNav");

var _excluded = ["className", "firstDayOfWeek", "isRange", "locale", "onSelectDate", "onSelectRange", "onMonthChange", "readOnly", "selectedDate", "selectedRange", "showNextButton", "showPreviousButton", "viewMonth"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getDatesSelected = function getDatesSelected(date, range) {
  if (date && !range) return [date];

  if (range) {
    return [].concat((0, _toConsumableArray2["default"])(range.from ? [range.from] : []), (0, _toConsumableArray2["default"])(range.to ? [range.to] : []));
  }

  return [];
};

var Calendar = (0, _styledComponents["default"])(function (_ref) {
  var _locale$options;

  var className = _ref.className,
      firstDayOfWeek = _ref.firstDayOfWeek,
      isRange = _ref.isRange,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? (0, _i18n.getDateLocale)() : _ref$locale,
      onSelectDate = _ref.onSelectDate,
      onSelectRange = _ref.onSelectRange,
      onMonthChange = _ref.onMonthChange,
      readOnly = _ref.readOnly,
      selectedDate = _ref.selectedDate,
      selectedRange = _ref.selectedRange,
      showNextButton = _ref.showNextButton,
      showPreviousButton = _ref.showPreviousButton,
      _ref$viewMonth = _ref.viewMonth,
      viewMonth = _ref$viewMonth === void 0 ? new Date() : _ref$viewMonth,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var datesSelected = getDatesSelected(selectedDate, selectedRange);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      draftTo = _useState2[0],
      setDraftTo = _useState2[1];

  var _useState3 = (0, _react.useState)(viewMonth),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      baseMonth = _useState4[0],
      setBaseMonth = _useState4[1];

  var _useState5 = (0, _react.useState)('from'),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      activeInput = _useState6[0],
      setActiveInput = _useState6[1];

  var _useToggle = (0, _utils.useToggle)(false),
      showMonthPicker = _useToggle.value,
      setOn = _useToggle.setOn,
      setOff = _useToggle.setOff;

  var onOpenMonthPicker = (0, _react.useCallback)(function () {
    setOn();
    setBaseMonth(viewMonth);
  }, [setOn, viewMonth]);
  var handleDraftSelect = (0, _react.useCallback)(function (date) {
    if (isRange && selectedRange !== null && selectedRange !== void 0 && selectedRange.from && !selectedRange.to) {
      if ((0, _dateFns.isSameDay)(date, selectedRange.from) || (0, _dateFns.isBefore)(date, selectedRange.from)) {
        setDraftTo(undefined);
      } else {
        setDraftTo(date);
      }
    }
  }, [isRange, selectedRange]);

  var _useContext = (0, _react.useContext)(_DialogContext.DialogContext),
      closeModal = _useContext.closeModal;

  var handleSelect = (0, _react.useCallback)(function (date) {
    onSelectDate === null || onSelectDate === void 0 ? void 0 : onSelectDate(date);

    if (isRange) {
      var beforeFrom = (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.from) && (0, _dateFns.isBefore)(date, selectedRange.from);
      var afterTo = (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.to) && (0, _dateFns.isAfter)(date, selectedRange.to);

      if (activeInput === 'from') {
        if (!afterTo) {
          onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(_objectSpread(_objectSpread({}, selectedRange), {}, {
            from: date
          }));
          setActiveInput('to');
        } else {
          onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(_objectSpread(_objectSpread({}, selectedRange), {}, {
            to: date
          }));
        }
      } else if (activeInput === 'to') {
        if (!beforeFrom) {
          onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(_objectSpread(_objectSpread({}, selectedRange), {}, {
            to: date
          }));
          setActiveInput('from');
        } else {
          onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(_objectSpread(_objectSpread({}, selectedRange), {}, {
            from: date
          }));
        }
      }
    } else {
      closeModal();
    }
  }, [closeModal, selectedRange, onSelectRange, onSelectDate, activeInput, isRange]);
  var monthChangedFromScroll = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (!monthChangedFromScroll.current) {
      setBaseMonth(viewMonth);
    }
  }, [viewMonth]);
  var handleMonthChangeByScroll = (0, _react.useCallback)(function (newMonth) {
    monthChangedFromScroll.current = true;
    onMonthChange(newMonth);
    window.setTimeout(function () {
      monthChangedFromScroll.current = false;
    }, 50);
  }, [onMonthChange]);
  var localeProps = {
    firstDayOfWeek: firstDayOfWeek || ((_locale$options = locale.options) === null || _locale$options === void 0 ? void 0 : _locale$options.weekStartsOn) || 0,
    locale: locale
  };
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: className
  }, props), showMonthPicker ? _react["default"].createElement(_MonthPickerNav.MonthPickerNav, {
    locale: locale,
    date: viewMonth,
    onClose: setOff,
    onMonthChange: onMonthChange
  }) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_CalendarNav.CalendarNav, {
    locale: locale,
    monthYear: viewMonth,
    onMonthChange: onMonthChange,
    onOpenMonthPicker: onOpenMonthPicker
  }), _react["default"].createElement(_Divider.Divider, {
    appearance: "light"
  }), _react["default"].createElement(_DaysOfWeek.DaysOfWeek, localeProps), _react["default"].createElement(_MonthList.MonthList, (0, _extends2["default"])({}, localeProps, {
    onSelect: handleSelect,
    onDraftSelect: handleDraftSelect,
    draftTo: draftTo,
    currentDate: viewMonth,
    datesSelected: datesSelected,
    onMonthChange: handleMonthChangeByScroll,
    baseMonth: baseMonth,
    setBaseMonth: setBaseMonth
  }))));
}).withConfig({
  displayName: "Calendar",
  componentId: "sc-16c71io-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  width: fit-content;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.brand;
});
exports.Calendar = Calendar;
//# sourceMappingURL=Calendar.js.map