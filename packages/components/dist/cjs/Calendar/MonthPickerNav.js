"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthPickerNav = void 0;
var _dateFns = require("date-fns");
var _react = _interopRequireWildcard(require("react"));
var _ChevronLeft = require("@styled-icons/material-rounded/ChevronLeft/ChevronLeft");
var _ChevronRight = require("@styled-icons/material-rounded/ChevronRight/ChevronRight");
var _Close = require("@styled-icons/material/Close");
var _Divider = require("../Divider");
var _Button = require("../Button");
var _Form = require("../Form");
var _Layout = require("../Layout");
var _utils = require("../utils");
var _utils2 = require("./utils");
var _YearList = require("./YearList");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MonthPickerNav = function MonthPickerNav(_ref) {
  var date = _ref.date,
    locale = _ref.locale,
    onClose = _ref.onClose,
    onMonthChange = _ref.onMonthChange;
  var _useTranslation = (0, _utils.useTranslation)('MonthPickerNav'),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)(date),
    _useState2 = _slicedToArray(_useState, 2),
    trackYear = _useState2[0],
    setTrackYear = _useState2[1];
  var _useState3 = (0, _react.useState)((0, _utils2.formatDateString)(trackYear, 'yyyy', locale)),
    _useState4 = _slicedToArray(_useState3, 2),
    inputText = _useState4[0],
    setInputText = _useState4[1];
  var _useState5 = (0, _react.useState)(date),
    _useState6 = _slicedToArray(_useState5, 2),
    baseMonth = _useState6[0],
    setBaseMonth = _useState6[1];
  var handleInputChange = (0, _react.useCallback)(function (event) {
    return setInputText(event.target.value);
  }, [setInputText]);
  (0, _react.useEffect)(function () {
    setInputText((0, _dateFns.getYear)(trackYear).toString());
  }, [trackYear]);
  var handleInputBlur = (0, _react.useCallback)(function (event) {
    if (event.target.value.length === 4) {
      var newYear = (0, _dateFns.setYear)(trackYear, Number(event.target.value));
      setTrackYear(newYear);
      setBaseMonth(newYear);
    }
  }, [trackYear]);
  var handleNextYear = (0, _react.useCallback)(function () {
    var newYear = (0, _dateFns.addYears)(trackYear, 1);
    setTrackYear(newYear);
    setBaseMonth(newYear);
  }, [setTrackYear, trackYear]);
  var handlePreviousYear = (0, _react.useCallback)(function () {
    var newYear = (0, _dateFns.addYears)(trackYear, -1);
    setTrackYear(newYear);
    setBaseMonth(newYear);
  }, [setTrackYear, trackYear]);
  var handleMonthClick = (0, _react.useCallback)(function (month) {
    onMonthChange((0, _dateFns.setMonth)(trackYear, month));
    onClose();
  }, [trackYear, onMonthChange, onClose]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Layout.Space, {
    between: true,
    py: "u3",
    pl: "u05",
    pr: "u5"
  }, _react["default"].createElement(_Layout.Space, {
    justify: "start",
    gap: "u2"
  }, _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_ChevronLeft.ChevronLeft, null),
    label: t('previous year'),
    onClick: handlePreviousYear,
    size: "xsmall"
  }), _react["default"].createElement(_Form.InlineInputText, {
    onBlur: handleInputBlur,
    onChange: handleInputChange,
    value: inputText
  }), _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_ChevronRight.ChevronRight, null),
    label: t('next year'),
    onClick: handleNextYear,
    size: "xsmall"
  })), _react["default"].createElement(_Layout.Space, {
    justify: "end"
  }, _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_Close.Close, null),
    label: t('close'),
    onClick: onClose,
    size: "xsmall"
  }))), _react["default"].createElement(_Divider.Divider, {
    appearance: "light"
  }), _react["default"].createElement(_YearList.YearList, {
    baseMonth: baseMonth,
    currentDate: trackYear,
    locale: locale,
    onMonthChange: setTrackYear,
    onMonthClick: handleMonthClick,
    selectedMonth: date,
    setBaseMonth: setBaseMonth
  }));
};
exports.MonthPickerNav = MonthPickerNav;
//# sourceMappingURL=MonthPickerNav.js.map