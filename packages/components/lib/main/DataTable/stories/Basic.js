"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Basic() {
  var data = [{
    id: 1,
    name: 'Gorgonzola'
  }, {
    id: 2,
    name: 'Cheddar'
  }, {
    id: 3,
    name: "Blue"
  }];
  var columns = [{
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    title: 'Name',
    type: 'string'
  }];
  var items = data.map(function (_ref) {
    var id = _ref.id,
      name = _ref.name;
    var actions = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DataTableAction, {
      onClick: function onClick() {
        return alert("".concat(name, " selected!"));
      }
    }, "Select Cheese"));
    return _react["default"].createElement(_.DataTableItem, {
      key: id,
      id: "".concat(id),
      onClick: function onClick() {
        return alert('Row clicked');
      },
      actions: actions
    }, _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, name));
  });
  return _react["default"].createElement(_.DataTable, {
    caption: "Cheeses example",
    columns: columns
  }, items);
}
//# sourceMappingURL=Basic.js.map