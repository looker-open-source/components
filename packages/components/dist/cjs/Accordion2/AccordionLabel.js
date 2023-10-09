"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionLabel = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AccordionLabel = _styledComponents["default"].div.withConfig({
  displayName: "AccordionLabel",
  componentId: "sc-is7z3m-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  /*\n    min-width prevent truncate text from growing AccordionLabel past the disclosure's 100% width\n   */\n  min-width: 0;\n"])));
exports.AccordionLabel = AccordionLabel;
//# sourceMappingURL=AccordionLabel.js.map