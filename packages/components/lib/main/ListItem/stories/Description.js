"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Description;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Description() {
  return _react["default"].createElement(_.ListItem, {
    description: "Description text, which is different than detail text",
    detail: "detail text"
  }, "List Item");
}
//# sourceMappingURL=Description.js.map