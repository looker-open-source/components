"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _ModalContent = require("../../../Modal/ModalContent");

var _templateObject;

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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _designTokens.layout);
exports.DialogContent = DialogContent;
//# sourceMappingURL=DialogContent.js.map