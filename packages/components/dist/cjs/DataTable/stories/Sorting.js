"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Sorting;
var _react = _interopRequireWildcard(require("react"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState2 = _slicedToArray(_useState, 2),
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
    _useState4 = _slicedToArray(_useState3, 2),
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