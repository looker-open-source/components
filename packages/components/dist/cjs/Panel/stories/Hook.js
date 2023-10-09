"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hook;
var _react = _interopRequireDefault(require("react"));
var _List = require("../../List");
var _ListItem = require("../../ListItem");
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var HookInner = function HookInner() {
  var _usePanel = (0, _.usePanel)({
      content: 'Panel content',
      title: 'Panel Hook'
    }),
    panel = _usePanel.panel,
    setOpen = _usePanel.setOpen;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ListItem.ListItem, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Option A"), panel);
};
function Hook() {
  return _react["default"].createElement(_.Panels, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(HookInner, null), _react["default"].createElement(_ListItem.ListItem, null, "Option B")));
}
//# sourceMappingURL=Hook.js.map