"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _TableRow = require("../../TableRow");
var _TableBody = require("../../TableBody");
var _TableDataCell = require("../../TableDataCell");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic() {
  return _react["default"].createElement(_TableBody.TableBody, null, _react["default"].createElement(_TableRow.TableRow, null, _react["default"].createElement(_TableDataCell.TableDataCell, null, "Cell 1"), _react["default"].createElement(_TableDataCell.TableDataCell, null, "Cell 2")));
}
//# sourceMappingURL=Basic.js.map