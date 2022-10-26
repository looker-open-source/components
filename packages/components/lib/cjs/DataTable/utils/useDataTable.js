"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataTable = require("../DataTable");

var _Item = require("../Item");

var _Column = require("../Column");

var useDataTable = function useDataTable(data, columns, caption) {
  var items = data.map(function (dataObj) {
    var defaultOrderColumn = columns[0].id;
    var id = dataObj[defaultOrderColumn];
    return _react["default"].createElement(_Item.DataTableItem, {
      id: id,
      key: id
    }, columns.map(function (column) {
      return _react["default"].createElement(_Column.DataTableCell, {
        key: column.id
      }, dataObj[column.id]);
    }));
  });
  return _react["default"].createElement(_DataTable.DataTable, {
    caption: caption,
    columns: columns
  }, items);
};

exports.useDataTable = useDataTable;
//# sourceMappingURL=useDataTable.js.map