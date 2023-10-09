"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Year = void 0;
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Year = function Year(_ref) {
  var fullRender = _ref.fullRender,
    index = _ref.index,
    setItemPosition = _ref.setItemPosition,
    date = _ref.date,
    locale = _ref.locale,
    props = _objectWithoutProperties(_ref, _excluded);
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
  }, fullRender && _toConsumableArray(Array(12)).map(function (_, i) {
    return _react["default"].createElement(_MonthPicker.MonthPicker, _extends({
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