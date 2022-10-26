"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableDataCell = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tableCell = require("./tableCell");

var _templateObject;

var TableDataCell = _styledComponents["default"].td.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TableDataCell",
  componentId: "sc-1ehugof-0"
}).attrs(function (_ref) {
  var _ref$borderTop = _ref.borderTop,
      borderTop = _ref$borderTop === void 0 ? 'ui2' : _ref$borderTop;
  return {
    borderTop: borderTop
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _tableCell.tableCellCSS);

exports.TableDataCell = TableDataCell;
//# sourceMappingURL=TableDataCell.js.map