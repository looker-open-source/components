"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectManager;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function SelectManager() {
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
    size: 20,
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    size: 80,
    title: 'Name',
    type: 'string'
  }];
  var allSelectableItems = data.map(function (_ref) {
    var id = _ref.id;
    return String(id);
  });
  var _useSelectManager = (0, _.useSelectManager)(allSelectableItems),
    onSelect = _useSelectManager.onSelect,
    onSelectAll = _useSelectManager.onSelectAll,
    selections = _useSelectManager.selections;
  var items = data.map(function (_ref2) {
    var id = _ref2.id,
      name = _ref2.name;
    return _react["default"].createElement(_.DataTableItem, {
      id: String(id),
      key: id,
      onClick: function onClick() {
        return alert("".concat(name, " clicked"));
      },
      actions: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DataTableAction, {
        onClick: function onClick() {
          return alert("".concat(name, " deleted"));
        }
      }, "Delete"))
    }, _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, name));
  });
  return _react["default"].createElement(_.DataTable, {
    caption: "Cheeses example",
    columns: columns,
    select: {
      onSelect: onSelect,
      onSelectAll: onSelectAll,
      pageItems: allSelectableItems,
      selectedItems: selections
    }
  }, items);
}
//# sourceMappingURL=SelectManager.js.map