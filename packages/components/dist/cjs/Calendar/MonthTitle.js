"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthTitle = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = require("../Text");
var _utils = require("./utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MonthTitle = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className,
    locale = _ref.locale,
    month = _ref.month;
  return _react["default"].createElement(_Text.Span, {
    className: className,
    fontSize: "xsmall",
    color: "text2",
    fontWeight: "bold",
    px: "u8",
    py: "u2"
  }, (0, _utils.formatDateString)(month, 'MMM yyyy', locale));
}).withConfig({
  displayName: "MonthTitle",
  componentId: "sc-1cr2h3a-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  display: block;\n  /* Title is inline with first week if month starts > 3 days after firstDayOfWeek */\n  /* stylelint-disable */\n  margin: ", ";\n  /* stylelint-enable */\n  position: relative;\n  width: fit-content;\n  z-index: ", ";\n"])), _utils.rangeTypeStyle, function (_ref2) {
  var inline = _ref2.inline,
    space = _ref2.theme.space;
  return inline ? "0 0 -".concat(space.u8, " 0") : "".concat(space.u05, " 0");
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.zIndexFloor;
});
exports.MonthTitle = MonthTitle;
//# sourceMappingURL=MonthTitle.js.map