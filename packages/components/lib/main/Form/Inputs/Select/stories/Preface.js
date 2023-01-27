"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Preface;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Preface() {
  return _react["default"].createElement(_.Select, {
    maxWidth: 400,
    placeholder: "Select a field",
    options: [{
      description: 'Cost to stock - not the price the customer paid',
      label: 'Cost',
      preface: 'Inventory items',
      value: 'inventory_items.cost'
    }, {
      label: 'Count',
      preface: 'Order Items',
      value: 'order_items.count'
    }, {
      description: 'What the customer actually paid',
      label: 'Sale Price',
      preface: 'Order Items',
      value: 'order_items.sale_price'
    }, {
      description: 'Base retail price',
      label: 'Retail Price',
      preface: 'Inventory Items',
      value: 'inventory_items.retail_price'
    }, {
      label: 'Count',
      preface: 'Inventory Items',
      value: 'inventory_items.count'
    }]
  });
}
//# sourceMappingURL=Preface.js.map