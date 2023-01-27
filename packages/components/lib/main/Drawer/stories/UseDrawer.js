"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UseDrawer;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function UseDrawer() {
  var _useDrawer = (0, _.useDrawer)({
      content: 'Drawer content'
    }),
    dialog = _useDrawer.dialog,
    setOpen = _useDrawer.setOpen;
  return _react["default"].createElement(_react["default"].Fragment, null, dialog, _react["default"].createElement(_.ButtonOutline, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Drawer"));
}
//# sourceMappingURL=UseDrawer.js.map