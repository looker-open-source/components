"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CloseOnSelect;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CloseOnSelect() {
  return _react["default"].createElement(_.SelectMulti, {
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }, {
      value: 'Mascarpone'
    }, {
      value: 'Brie'
    }, {
      value: 'Mozzarella'
    }, {
      value: 'Cotija'
    }, {
      value: 'Pepperjack'
    }],
    defaultValues: ['Swiss', 'Brie'],
    closeOnSelect: true
  });
}
//# sourceMappingURL=CloseOnSelect.js.map