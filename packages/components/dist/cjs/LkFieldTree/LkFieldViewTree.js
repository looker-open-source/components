"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LkFieldViewTree = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _LkFieldTreeAccordionContent = require("./LkFieldTreeAccordionContent");
var _LkFieldTree = require("./LkFieldTree");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var LkFieldViewTree = (0, _styledComponents["default"])(_LkFieldTree.LkFieldTree).withConfig({
  displayName: "LkFieldViewTree",
  componentId: "sc-1gehvrt-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > ", " {\n    padding-bottom: 0.5rem;\n    padding-top: 0.5rem;\n  }\n\n  border-bottom: 1px solid ", ";\n  padding: 0.25rem;\n"])), _LkFieldTreeAccordionContent.LkFieldTreeAccordionContent, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.ui2;
});
exports.LkFieldViewTree = LkFieldViewTree;
//# sourceMappingURL=LkFieldViewTree.js.map