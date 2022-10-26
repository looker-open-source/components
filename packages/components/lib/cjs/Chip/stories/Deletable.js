"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Deletable;

var _react = _interopRequireDefault(require("react"));

var _Chip = require("../Chip");

function Deletable() {
  return _react["default"].createElement(_Chip.Chip, {
    onDelete: function onDelete() {
      alert('Deletable');
    }
  }, "Deletable");
}
//# sourceMappingURL=Deletable.js.map