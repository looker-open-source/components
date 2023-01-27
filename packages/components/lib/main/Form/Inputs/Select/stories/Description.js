"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Description;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Description() {
  return _react["default"].createElement(_.Select, {
    maxWidth: 400,
    options: [{
      description: 'Popular in the US',
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      description: 'Dutch sheeps milk',
      label: 'Gouda',
      value: 'gouda'
    }, {
      description: 'Full of holes',
      label: 'Swiss',
      value: 'swiss'
    }]
  });
}
//# sourceMappingURL=Description.js.map