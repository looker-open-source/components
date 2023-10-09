"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CircleContainer = _styledComponents["default"].svg.withConfig({
  displayName: "ProgressSvg__CircleContainer",
  componentId: "sc-1qfpzk5-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fill: transparent;\n  height: 100%;\n  position: absolute;\n  stroke: ", ";\n  width: 100%;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.key;
});
exports.CircleContainer = CircleContainer;
//# sourceMappingURL=ProgressSvg.js.map