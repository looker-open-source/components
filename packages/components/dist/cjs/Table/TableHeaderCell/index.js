"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeaderCell = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _tableCell = require("../tableCell");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TableHeaderCell = _styledComponents["default"].th.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TableHeaderCell",
  componentId: "sc-hi6xhd-0"
}).attrs(function (_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'text2' : _ref$color,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === void 0 ? 'xsmall' : _ref$fontSize,
    _ref$fontWeight = _ref.fontWeight,
    fontWeight = _ref$fontWeight === void 0 ? 'semiBold' : _ref$fontWeight;
  return {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _tableCell.tableCellCSS);
exports.TableHeaderCell = TableHeaderCell;
//# sourceMappingURL=index.js.map