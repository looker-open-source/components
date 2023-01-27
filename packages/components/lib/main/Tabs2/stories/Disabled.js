"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Disabled() {
  return _react["default"].createElement(_.Tabs2, null, _react["default"].createElement(_.Tab2, {
    id: "cats",
    label: "Cats"
  }, "Here's awesome story about cats"), _react["default"].createElement(_.Tab2, {
    id: "dogs",
    label: "Dogs"
  }, "Cats are way better than dogs. Go to other tab"), _react["default"].createElement(_.Tab2, {
    label: "Fish"
  }, "Are kinda smelly"), _react["default"].createElement(_.Tab2, {
    disabled: true,
    id: "human",
    label: "Human"
  }, "Humans tab is disabled"));
}
//# sourceMappingURL=Disabled.js.map