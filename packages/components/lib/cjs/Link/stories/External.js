"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = External;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function External() {
  return _react["default"].createElement(_.Link, {
    href: "https://google.com",
    isExternal: true
  }, "Leaving this domain");
}

External.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=External.js.map