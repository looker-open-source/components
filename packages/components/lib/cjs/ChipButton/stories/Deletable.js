"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Deletable;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Deletable() {
  return _react["default"].createElement(_.ChipButton, {
    onDelete: function onDelete() {
      return alert('Deletable');
    }
  }, "Deletable");
}
//# sourceMappingURL=Deletable.js.map