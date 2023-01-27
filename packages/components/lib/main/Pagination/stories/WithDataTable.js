"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithDataTable;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function WithDataTable() {
  var _useState = (0, _react.useState)(1),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var cheesePerPage = 1;
  var data = [{
    id: 1,
    name: 'Gouda'
  }, {
    id: 2,
    name: 'Pepper Jack'
  }, {
    id: 3,
    name: "Swiss"
  }, {
    id: 4,
    name: "Cheddar"
  }];
  var totalPages = data.length / cheesePerPage;
  var columns = [{
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    title: 'Name',
    type: 'string'
  }];
  var items = data.map(function (_ref, index) {
    var id = _ref.id,
      name = _ref.name;
    return index + 1 === currentPage && _react["default"].createElement(_.DataTableItem, {
      key: id,
      id: "".concat(id),
      onClick: function onClick() {
        return alert("Row clicked");
      },
      actions: _react["default"].createElement(_.DataTableAction, {
        onClick: function onClick() {
          return alert("".concat(name, " selected!"));
        }
      }, "Select Cheese")
    }, _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, name));
  });
  return _react["default"].createElement(_.Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, _react["default"].createElement(_.Box, {
    width: "100%",
    mb: "u3"
  }, _react["default"].createElement(_.DataTable, {
    caption: "Cheeses example",
    columns: columns
  }, items)), _react["default"].createElement(_.Pagination, {
    current: currentPage,
    pages: totalPages,
    onChange: setCurrentPage
  }));
}
//# sourceMappingURL=WithDataTable.js.map