"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpaceVertical = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Space = require("../Space");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SpaceVertical = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "SpaceVertical",
  componentId: "sc-1w1y32x-0"
}).attrs(function (_ref) {
  var _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'start' : _ref$align,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width;
  return {
    align: align,
    width: width
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  flex-direction: ", ";\n  /* gap throws off spacing for around & evenly */\n  ", "\n"])), _Space.spaceCSS, function (_ref2) {
  var reverse = _ref2.reverse;
  return reverse ? 'column-reverse' : 'column';
}, function (_ref3) {
  var around = _ref3.around,
    evenly = _ref3.evenly,
    _ref3$gap = _ref3.gap,
    gap = _ref3$gap === void 0 ? _Space.defaultGap : _ref3$gap,
    space = _ref3.theme.space;
  return !around && !evenly && "gap: ".concat(space[gap], " 0;");
});
exports.SpaceVertical = SpaceVertical;
//# sourceMappingURL=SpaceVertical.js.map