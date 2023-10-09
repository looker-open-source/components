"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TableRow = _styledComponents["default"].tr.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TableRow",
  componentId: "sc-1ty7jg8-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.border, _designTokens.typography);
exports.TableRow = TableRow;
//# sourceMappingURL=index.js.map