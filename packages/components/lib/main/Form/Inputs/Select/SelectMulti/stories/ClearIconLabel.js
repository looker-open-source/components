"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClearIconLabel;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _Layout = require("../../../../../Layout");

function ClearIconLabel() {
  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_.SelectMulti, {
    clearIconLabel: "remove all chips",
    defaultValues: ['Cheddar'],
    flex: 1,
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }],
    placeholder: "Cheeses"
  }), _react["default"].createElement(_.SelectMulti, {
    defaultValues: ['Gouda', 'Feta'],
    chipIconLabel: "remove this chip",
    flex: 1,
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }]
  }), _react["default"].createElement(_.SelectMulti, {
    clearIconLabel: "remove all chips",
    defaultValues: ['Cheddar', 'Swiss'],
    chipIconLabel: "remove this chip",
    flex: 1,
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }]
  }));
}
//# sourceMappingURL=ClearIconLabel.js.map