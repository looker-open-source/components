"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Description;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Description() {
  return _react["default"].createElement(_.Box, {
    maxWidth: 500
  }, _react["default"].createElement(_.Truncate, {
    description: "This is pretty cheesy \uD83E\uDDC0"
  }, _react["default"].createElement("strong", null, "Hover over text to see the description:"), " Cheese is delicious."));
}
//# sourceMappingURL=Description.js.map