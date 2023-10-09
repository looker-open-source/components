"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DaysOfWeek = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Layout = require("../Layout");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DaysOfWeek = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className,
    firstDayOfWeek = _ref.firstDayOfWeek,
    locale = _ref.locale;
  var allDays = Array.from(Array(7), function (_, i) {
    var _locale$localize;
    return (_locale$localize = locale.localize) === null || _locale$localize === void 0 ? void 0 : _locale$localize.day(i, {
      width: 'narrow'
    });
  });
  var daysOfWeek = [].concat(_toConsumableArray(allDays.slice(firstDayOfWeek)), _toConsumableArray(allDays.slice(0, firstDayOfWeek)));
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement(_Layout.Grid, {
    columns: 7,
    gap: "none"
  }, daysOfWeek.map(function (day, i) {
    return _react["default"].createElement("div", {
      key: i
    }, day);
  })));
}).withConfig({
  displayName: "DaysOfWeek",
  componentId: "sc-10k3m05-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  ", " {\n    padding-left: ", ";\n    width: fit-content;\n    div {\n      color: ", ";\n      font-family: ", ";\n      font-size: ", ";\n      line-height: ", ";\n      text-align: center;\n      width: ", ";\n    }\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui1;
}, _Layout.Grid, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u5;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text2;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fonts.body;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSizes.xsmall;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.u8;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.space.u8;
});
exports.DaysOfWeek = DaysOfWeek;
//# sourceMappingURL=DaysOfWeek.js.map