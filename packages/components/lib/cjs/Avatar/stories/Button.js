"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Button() {
  return _react["default"].createElement(_.AvatarButton, {
    imageUrl: "https://github.com/looker-open-source/components/blob/1b708b472d974987e80c30bbbb286911a438542a/packages/components/test-assets/cheese.png?raw=true",
    label: "Your Account"
  });
}
//# sourceMappingURL=Button.js.map