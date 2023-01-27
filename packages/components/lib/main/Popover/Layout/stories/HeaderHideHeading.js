"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeaderHideHeading;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function HeaderHideHeading() {
  return _react["default"].createElement(_.PopoverLayout, {
    header: "Header text",
    hideHeader: true
  }, "We the People of the United States");
}
//# sourceMappingURL=HeaderHideHeading.js.map