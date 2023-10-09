"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogContent = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _ModalContent = require("../../../Modal/ModalContent");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var dialogContentDefaults = {
  px: 'u8',
  py: 'u5'
};
var DialogContent = (0, _styledComponents["default"])(_ModalContent.ModalContent).attrs(function (_ref) {
  var p = _ref.p,
    py = _ref.py,
    px = _ref.px;
  return {
    px: p || px || dialogContentDefaults.px,
    py: p || py || dialogContentDefaults.py
  };
}).withConfig({
  displayName: "DialogContent",
  componentId: "sc-1meus4a-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _designTokens.layout);
exports.DialogContent = DialogContent;
//# sourceMappingURL=DialogContent.js.map