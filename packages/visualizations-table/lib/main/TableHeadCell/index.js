"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeadCell = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _TableCell = require("../TableCell");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var TableHeadCell = _styledComponents["default"].th.attrs(function (_ref) {
  var width = _ref.width;
  return {
    width: width
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  text-align: left;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  ", "\n"])), _TableCell.TableCellStyles, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.ui4;
}, function (_ref4) {
  var stickyLeft = _ref4.stickyLeft;
  return stickyLeft ? _TableCell.RowIndexStyles : null;
});
exports.TableHeadCell = TableHeadCell;
//# sourceMappingURL=index.js.map