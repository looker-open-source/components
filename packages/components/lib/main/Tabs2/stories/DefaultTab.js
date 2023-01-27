"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DefaultTab;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function DefaultTab() {
  return _react["default"].createElement(_.Tabs2, {
    defaultTabId: "dogs"
  }, _react["default"].createElement(_.Tab2, {
    id: "cats",
    label: "Cats"
  }, "Here's awesome story about cats"), _react["default"].createElement(_.Tab2, {
    id: "dogs",
    label: "Dogs"
  }, "Cats are way better than dogs. Go to other tab"), _react["default"].createElement(_.Tab2, {
    label: "Fish"
  }, "Are kinda smelly"));
}
//# sourceMappingURL=DefaultTab.js.map