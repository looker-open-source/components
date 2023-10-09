"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NestedMenuSurface = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _OverlaySurface = require("../Overlay/OverlaySurface");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var NestedMenuSurface = (0, _styledComponents["default"])(_OverlaySurface.OverlaySurface).withConfig({
  displayName: "NestedMenuSurface",
  componentId: "sc-5ytfs8-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &[data-placement] {\n    padding: 0;\n  }\n  ", " {\n    box-shadow: ", ";\n  }\n"])), _OverlaySurface.OverlaySurfaceContentArea, function (_ref) {
  var theme = _ref.theme;
  return theme.elevations.plus2;
});
exports.NestedMenuSurface = NestedMenuSurface;
//# sourceMappingURL=NestedMenuSurface.js.map