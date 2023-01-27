"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Bullet;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Bullet() {
  return _react["default"].createElement(_.UnorderedList, {
    type: 'bullet'
  }, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack"));
}
//# sourceMappingURL=Bullet.js.map