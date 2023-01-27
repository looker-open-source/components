"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Basic() {
  return _react["default"].createElement(_.Popover, {
    content: _react["default"].createElement(_.PopoverContent, null, "Some content")
  }, _react["default"].createElement(_components.Button, null, "Open"));
}
//# sourceMappingURL=Basic.js.map