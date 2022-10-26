"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataTableSortManager = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _DataTable = require("../DataTable");

var _Item = require("../Item");

var _Column = require("../Column");

var _sort_utils = require("./sort_utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useDataTableSortManager = function useDataTableSortManager(caption, defaultData, defaultColumns, generateActions, onClickItem) {
  var _useState = (0, _react.useState)(defaultData),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultColumns),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      columns = _useState4[0],
      setColumns = _useState4[1];

  var onSort = function onSort(id, sortDirection) {
    var _doDataTableSort = (0, _sort_utils.doDataTableSort)(data, columns, id, sortDirection),
        sortedColumns = _doDataTableSort.columns,
        sortedData = _doDataTableSort.data;

    setData(sortedData);
    setColumns(sortedColumns);
  };

  var items = data.map(function (dataObj) {
    var defaultOrderColumn = columns[0].id;
    var id = dataObj[defaultOrderColumn];
    return _react["default"].createElement(_Item.DataTableItem, {
      id: id,
      key: id,
      onClick: onClickItem,
      actions: generateActions(dataObj)
    }, columns.map(function (column) {
      return _react["default"].createElement(_Column.DataTableCell, {
        key: column.id
      }, dataObj[column.id]);
    }));
  });
  return _react["default"].createElement(_DataTable.DataTable, {
    caption: caption,
    columns: columns,
    onSort: onSort
  }, items);
};

exports.useDataTableSortManager = useDataTableSortManager;
//# sourceMappingURL=useDataTableSortManager.js.map