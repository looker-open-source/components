"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NameAndId;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function NameAndId() {
  return _react["default"].createElement(_.InputHidden, {
    value: "some hidden value",
    name: "someName",
    id: "someId"
  });
}
//# sourceMappingURL=NameAndId.js.map