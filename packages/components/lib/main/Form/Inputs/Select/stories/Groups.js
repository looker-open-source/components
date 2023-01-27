"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Groups;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Groups() {
  return _react["default"].createElement(_.Select, {
    maxWidth: 400,
    options: [{
      label: 'CHEESES',
      options: [{
        label: 'Cheddar',
        value: 'cheddar'
      }, {
        label: 'Gouda',
        value: 'gouda'
      }, {
        label: 'Swiss',
        value: 'swiss'
      }]
    }, {
      label: 'FRUITS',
      options: [{
        label: 'Grapes',
        value: 'grape'
      }, {
        label: 'Apples',
        value: 'apple'
      }, {
        label: 'Strawberries',
        value: 'strawberries'
      }]
    }, {
      options: [{
        label: 'Pizza',
        value: 'pizza'
      }, {
        label: 'Hamburgers',
        value: 'hamburgers'
      }]
    }]
  });
}
//# sourceMappingURL=Groups.js.map