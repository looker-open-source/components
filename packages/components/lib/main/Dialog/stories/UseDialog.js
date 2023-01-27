"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UseDialog;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function UseDialog() {
  var _useDialog = (0, _.useDialog)({
      content: 'My Neat Dialog'
    }),
    dialog = _useDialog.dialog,
    setOpen = _useDialog.setOpen;
  return _react["default"].createElement(_react["default"].Fragment, null, dialog, _react["default"].createElement(_.ButtonOutline, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Dialog"));
}
//# sourceMappingURL=UseDialog.js.map