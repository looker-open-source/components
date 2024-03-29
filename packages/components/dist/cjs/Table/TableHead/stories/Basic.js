"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _TableHead = require("../../TableHead");
var _TableRow = require("../../TableRow");
var _TableHeaderCell = require("../../TableHeaderCell");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic() {
  return _react["default"].createElement(_TableHead.TableHead, null, _react["default"].createElement(_TableRow.TableRow, null, _react["default"].createElement(_TableHeaderCell.TableHeaderCell, null, "Column 1"), _react["default"].createElement(_TableHeaderCell.TableHeaderCell, null, "Column 2"), _react["default"].createElement(_TableHeaderCell.TableHeaderCell, null, "Column 3")));
}
//# sourceMappingURL=Basic.js.map