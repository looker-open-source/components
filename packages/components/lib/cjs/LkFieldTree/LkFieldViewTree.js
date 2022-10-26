"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LkFieldViewTree = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _LkFieldTreeAccordionContent = require("./LkFieldTreeAccordionContent");

var _LkFieldTree = require("./LkFieldTree");

var _templateObject;

var LkFieldViewTree = (0, _styledComponents["default"])(_LkFieldTree.LkFieldTree).withConfig({
  displayName: "LkFieldViewTree",
  componentId: "sc-1gehvrt-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  > ", " {\n    padding-bottom: 0.5rem;\n    padding-top: 0.5rem;\n  }\n\n  border-bottom: 1px solid ", ";\n  padding: 0.25rem;\n"])), _LkFieldTreeAccordionContent.LkFieldTreeAccordionContent, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.ui2;
});
exports.LkFieldViewTree = LkFieldViewTree;
//# sourceMappingURL=LkFieldViewTree.js.map