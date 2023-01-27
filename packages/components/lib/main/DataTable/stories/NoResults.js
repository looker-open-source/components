"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = State;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function State() {
  var columns = [{
    id: 'name',
    title: 'Name',
    type: 'string'
  }];

  return _react["default"].createElement(_.DataTable, {
    caption: "Cheeses example",
    columns: columns,
    state: "noResults"
  }, _react["default"].createElement(_.DataTableItem, {
    id: 'cheddar',
    onClick: function onClick() {
      return alert("Row clicked");
    }
  }, _react["default"].createElement(_.DataTableCell, null, "Cheddar")));
}
//# sourceMappingURL=NoResults.js.map