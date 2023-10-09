"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableDataCell = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _tableCell = require("../tableCell");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TableDataCell = _styledComponents["default"].td.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TableDataCell",
  componentId: "sc-1ougxp0-0"
}).attrs(function (_ref) {
  var _ref$borderTop = _ref.borderTop,
    borderTop = _ref$borderTop === void 0 ? 'ui2' : _ref$borderTop;
  return {
    borderTop: borderTop
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _tableCell.tableCellCSS);
exports.TableDataCell = TableDataCell;
//# sourceMappingURL=index.js.map