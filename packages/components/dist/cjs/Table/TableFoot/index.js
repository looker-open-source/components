"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFoot = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _tableSection = require("../tableSection");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TableFoot = _styledComponents["default"].tbody.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TableFoot",
  componentId: "sc-1oiql1t-0"
}).attrs(function (_ref) {
  var _ref$textAlign = _ref.textAlign,
    textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign;
  return {
    textAlign: textAlign
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _tableSection.tableSectionCSS);
exports.TableFoot = TableFoot;
//# sourceMappingURL=index.js.map