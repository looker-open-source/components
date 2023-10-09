"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Space = require("../Space");
var _common = require("../utils/common");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Grid = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Grid",
  componentId: "sc-1h75l3v-0"
}).attrs(function (_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width;
  return {
    width: width
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  display: grid;\n  grid-gap: ", ";\n  grid-template-columns:\n    repeat(", ", minmax(0, 1fr));\n"])), _common.commonLayoutCSS, function (_ref2) {
  var gap = _ref2.gap,
    theme = _ref2.theme;
  return theme.space[gap || _Space.defaultGap];
}, function (_ref3) {
  var columns = _ref3.columns;
  return columns || 2;
});
exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map