"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ActiveElement;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function ActiveElement() {
  return _react["default"].createElement(_.Dialog, {
    content: _react["default"].createElement(_.DialogLayout, null, _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.InputText, null), _react["default"].createElement(_.Select, {
      options: [{
        label: '1',
        value: '1'
      }],
      placeholder: "Choose value"
    }), _react["default"].createElement("select", null, _react["default"].createElement("option", null, "1"))))
  }, _react["default"].createElement(_.Button, null, "Open Dialog"));
}
//# sourceMappingURL=ActiveElement.js.map