"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelWindow = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PanelWindow = _styledComponents["default"].div.withConfig({
  displayName: "PanelWindow",
  componentId: "sc-1d6pvpq-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin-top: 0;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  z-index: ", ";\n"])), function (_ref) {
  var zIndexFloor = _ref.theme.zIndexFloor;
  return zIndexFloor;
});
exports.PanelWindow = PanelWindow;
//# sourceMappingURL=PanelWindow.js.map