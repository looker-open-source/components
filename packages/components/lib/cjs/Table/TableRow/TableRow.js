"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var TableRow = _styledComponents["default"].tr.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TableRow",
  componentId: "sc-1tgwedx-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.border, _designTokens.typography);

exports.TableRow = TableRow;
//# sourceMappingURL=TableRow.js.map