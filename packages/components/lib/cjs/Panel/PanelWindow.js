"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelWindow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var PanelWindow = _styledComponents["default"].div.withConfig({
  displayName: "PanelWindow",
  componentId: "sc-1d6pvpq-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin-top: 0;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  z-index: ", ";\n"])), function (_ref) {
  var zIndexFloor = _ref.theme.zIndexFloor;
  return zIndexFloor;
});

exports.PanelWindow = PanelWindow;
//# sourceMappingURL=PanelWindow.js.map