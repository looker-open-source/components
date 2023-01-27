"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithDialog;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _utils = require("../../utils");

function WithDialog() {
  var _useToggle = (0, _utils.useToggle)(),
    value = _useToggle.value,
    setOn = _useToggle.setOn,
    setOff = _useToggle.setOff;
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setOn();
  };
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Menu, {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.MenuItem, {
      onClick: setOn
    }, "Open Dialog"), _react["default"].createElement(_.MenuItem, {
      onClick: handleClick
    }, "Open Dialog, keep Menu open"))
  }, _react["default"].createElement(_.Button, null, "Menu with Dialog")), _react["default"].createElement(_.Dialog, {
    isOpen: value,
    onClose: setOff
  }, _react["default"].createElement(_.DialogLayout, {
    footer: _react["default"].createElement(_.Button, {
      onClick: setOff
    }, "Close"),
    header: "A Dialog"
  }, "Dialog must be placed outside of Menu")));
}
//# sourceMappingURL=WithDialog.js.map