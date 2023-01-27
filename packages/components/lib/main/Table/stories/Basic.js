"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _Table = require("../Table");
var _TableHead = require("../TableHead");
var _TableRow = require("../TableRow");
var _TableHeaderCell = require("../TableHeaderCell");
var _TableBody = require("../TableBody");
var _TableDataCell = require("../TableDataCell");

function Basic() {
  return _react["default"].createElement(_Table.Table, null, _react["default"].createElement(_TableHead.TableHead, null, _react["default"].createElement(_TableRow.TableRow, null, _react["default"].createElement(_TableHeaderCell.TableHeaderCell, null, "Column 1"), _react["default"].createElement(_TableHeaderCell.TableHeaderCell, null, "Column 2"), _react["default"].createElement(_TableHeaderCell.TableHeaderCell, null, "Column 3"))), _react["default"].createElement(_TableBody.TableBody, null, _react["default"].createElement(_TableRow.TableRow, null, _react["default"].createElement(_TableDataCell.TableDataCell, null, "1"), _react["default"].createElement(_TableDataCell.TableDataCell, null, "2"), _react["default"].createElement(_TableDataCell.TableDataCell, null, "3")), _react["default"].createElement(_TableRow.TableRow, null, _react["default"].createElement(_TableDataCell.TableDataCell, null, "1"), _react["default"].createElement(_TableDataCell.TableDataCell, null, "2"), _react["default"].createElement(_TableDataCell.TableDataCell, null, "3")), _react["default"].createElement(_TableRow.TableRow, null, _react["default"].createElement(_TableDataCell.TableDataCell, null, "1"), _react["default"].createElement(_TableDataCell.TableDataCell, null, "2"), _react["default"].createElement(_TableDataCell.TableDataCell, null, "3"))));
}
//# sourceMappingURL=Basic.js.map