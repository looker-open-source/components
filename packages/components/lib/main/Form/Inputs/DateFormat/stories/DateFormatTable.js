"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFormatTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _Table = require("../../../../Table");
var _DateFormat = require("../DateFormat");

var DateFormatTable = function DateFormatTable() {
  return _react["default"].createElement(_Table.Table, {
    mb: "large"
  }, _react["default"].createElement(_Table.TableHead, null, _react["default"].createElement(_Table.TableRow, null, _react["default"].createElement(_Table.TableHeaderCell, null, "FORMAT"), _react["default"].createElement(_Table.TableHeaderCell, null, "OUTPUT"))), _react["default"].createElement(_Table.TableBody, null, _react["default"].createElement(_Table.TableRow, null, _react["default"].createElement(_Table.TableDataCell, null, "Short"), _react["default"].createElement(_Table.TableDataCell, null, _react["default"].createElement(_DateFormat.DateFormat, {
    format: "short"
  }))), _react["default"].createElement(_Table.TableRow, null, _react["default"].createElement(_Table.TableDataCell, null, "Medium *"), _react["default"].createElement(_Table.TableDataCell, null, _react["default"].createElement(_DateFormat.DateFormat, null))), _react["default"].createElement(_Table.TableRow, null, _react["default"].createElement(_Table.TableDataCell, null, "Long"), _react["default"].createElement(_Table.TableDataCell, null, _react["default"].createElement(_DateFormat.DateFormat, {
    format: "long"
  }))), _react["default"].createElement(_Table.TableRow, null, _react["default"].createElement(_Table.TableDataCell, null, "Full"), _react["default"].createElement(_Table.TableDataCell, null, _react["default"].createElement(_DateFormat.DateFormat, {
    format: "full"
  })))));
};
exports.DateFormatTable = DateFormatTable;
//# sourceMappingURL=DateFormatTable.js.map