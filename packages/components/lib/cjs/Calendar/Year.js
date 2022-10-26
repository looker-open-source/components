"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Year = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _dateFns = require("date-fns");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _Layout = require("../Layout");

var _Text = require("../Text");

var _MonthPicker = require("./MonthPicker");

var _dateConfirmations = require("./utils/dateConfirmations");

var _excluded = ["fullRender", "index", "setItemPosition", "date", "locale"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Year = function Year(_ref) {
  var fullRender = _ref.fullRender,
      index = _ref.index,
      setItemPosition = _ref.setItemPosition,
      date = _ref.date,
      locale = _ref.locale,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var ref = (0, _react.useCallback)(function (element) {
    if (element) {
      setItemPosition(index, element);
    }
  }, [setItemPosition, index]);

  var _useTheme = (0, _styledComponents.useTheme)(),
      space = _useTheme.space;

  var height = "calc(".concat(space.u7, " * 3 + ").concat(space.u3, " * 2)");
  return _react["default"].createElement(_Layout.SpaceVertical, {
    py: "u3",
    px: "u4",
    gap: "u5",
    ref: ref
  }, _react["default"].createElement(_Text.Span, {
    fontSize: "small",
    color: "text5",
    fontWeight: "bold"
  }, (0, _dateFns.getYear)(date)), _react["default"].createElement(_Layout.Grid, {
    columns: 4,
    gap: "u3",
    height: height
  }, fullRender && (0, _toConsumableArray2["default"])(Array(12)).map(function (_, i) {
    return _react["default"].createElement(_MonthPicker.MonthPicker, (0, _extends2["default"])({
      isTodaysMonth: (0, _dateConfirmations.confirmToday)(i),
      key: i,
      monthNumber: i,
      date: date,
      locale: locale
    }, props));
  })));
};

exports.Year = Year;
//# sourceMappingURL=Year.js.map