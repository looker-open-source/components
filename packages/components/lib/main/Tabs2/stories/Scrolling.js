"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Scrolling;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Scrolling() {
  var tabs = new Array(20).fill('Tab2');
  return _react["default"].createElement(_.Tabs2, null, tabs.map(function (value, index) {
    return _react["default"].createElement(_.Tab2, {
      label: "Hello World ".concat(index),
      key: index
    }, "This is ", value, " ", index);
  }));
}
//# sourceMappingURL=Scrolling.js.map