"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic() {
  var columns = [{
    id: 'title',
    size: 50,
    title: 'Title',
    type: 'string'
  }, {
    id: 'description',
    size: 50,
    title: 'Description',
    type: 'string'
  }];
  return _react["default"].createElement(_.DataTable, {
    caption: "Cheeses example",
    columns: columns
  }, _react["default"].createElement(_.DataTableItem, {
    key: "cheddar",
    id: "cheddar"
  }, _react["default"].createElement(_.DataTableCell, null, "Cheddar"), _react["default"].createElement(_.DataTableCell, null, _react["default"].createElement(_.Truncate, null, "Cheddar cheese is a relatively hard, off-white (or orange if colourings such as annatto are added), sometimes sharp-tasting, natural cheese. Originating in the English village of Cheddar in Somerset, cheeses of this style are now produced beyond the region and in several countries around the world."))), _react["default"].createElement(_.DataTableItem, {
    key: "parm",
    id: "parm"
  }, _react["default"].createElement(_.DataTableCell, null, "Parmesan"), _react["default"].createElement(_.DataTableCell, null, _react["default"].createElement(_.Truncate, null, "Parmigiano-Reggiano or Parmesan is an Italian hard, granular cheese that is produced from cow's milk and has aged 12\u201336 months. It is named after the producing areas, the provinces of Parma, Reggio Emilia, the part of Bologna west of the Reno, and Modena (all in Emilia-Romagna); and the part of Mantua (Lombardy) south of the Po. Parmigiano is the Italian adjective for Parma and Reggiano that for Reggio Emilia."))));
}
//# sourceMappingURL=Truncate.js.map