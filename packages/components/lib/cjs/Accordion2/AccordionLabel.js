"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionLabel = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var AccordionLabel = _styledComponents["default"].div.withConfig({
  displayName: "AccordionLabel",
  componentId: "sc-is7z3m-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 1;\n  /*\n    min-width prevent truncate text from growing AccordionLabel past the disclosure's 100% width\n   */\n  min-width: 0;\n"])));

exports.AccordionLabel = AccordionLabel;
//# sourceMappingURL=AccordionLabel.js.map