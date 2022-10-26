"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NestedMenuSurface = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _OverlaySurface = require("../Overlay/OverlaySurface");

var _templateObject;

var NestedMenuSurface = (0, _styledComponents["default"])(_OverlaySurface.OverlaySurface).withConfig({
  displayName: "NestedMenuSurface",
  componentId: "sc-5ytfs8-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  &[data-placement] {\n    padding: 0;\n  }\n  ", " {\n    box-shadow: ", ";\n  }\n"])), _OverlaySurface.OverlaySurfaceContentArea, function (_ref) {
  var theme = _ref.theme;
  return theme.elevations.plus2;
});
exports.NestedMenuSurface = NestedMenuSurface;
//# sourceMappingURL=NestedMenuSurface.js.map