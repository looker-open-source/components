"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Detail;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Detail() {
  return _react["default"].createElement(_.Select, {
    maxWidth: 400,
    placeholder: "Select food",
    options: [{
      detail: 'Cheese',
      value: 'Gouda'
    }, {
      detail: 'Fruit',
      value: 'Apple'
    }]
  });
}
//# sourceMappingURL=Detail.js.map