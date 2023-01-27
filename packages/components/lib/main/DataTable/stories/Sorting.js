"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Sorting;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Sorting() {
  var _useState = (0, _react.useState)([{
      createdDate: new Date('11/11/2001'),
      id: 1,
      name: 'Gorgonzola'
    }, {
      createdDate: new Date('03/15/2001'),
      id: 2,
      name: 'Cheddar'
    }, {
      createdDate: new Date('07/20/2001'),
      id: 3,
      name: "Blue"
    }]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0, _react.useState)([{
      canSort: true,
      id: 'id',
      title: 'ID',
      type: 'number'
    }, {
      canSort: true,
      id: 'name',
      title: 'Name',
      type: 'string'
    }, {
      canSort: true,
      id: 'createdDate',
      size: 'nowrap',
      title: 'Created Date',
      type: 'date'
    }]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    columns = _useState4[0],
    setColumns = _useState4[1];
  var onSort = function onSort(id, sortDirection) {
    var _doDataTableSort = (0, _.doDataTableSort)(data, columns, id, sortDirection),
      sortedColumns = _doDataTableSort.columns,
      sortedData = _doDataTableSort.data;
    setData(sortedData);
    setColumns(sortedColumns);
  };
  var items = data.map(function (_ref) {
    var id = _ref.id,
      name = _ref.name,
      createdDate = _ref.createdDate;
    var actions = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DataTableAction, {
      onClick: function onClick() {
        return alert("".concat(name, " selected!"));
      }
    }, "Select Cheese"));
    return _react["default"].createElement(_.DataTableItem, {
      id: "".concat(id),
      key: id,
      onClick: function onClick() {
        return alert('Row clicked');
      },
      actions: actions
    }, _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, name), _react["default"].createElement(_.DataTableCell, null, _react["default"].createElement(_.DateFormat, null, createdDate)));
  });
  return _react["default"].createElement(_.DataTable, {
    caption: "Cheeses example",
    onSort: onSort,
    columns: columns
  }, items);
}
//# sourceMappingURL=Sorting.js.map