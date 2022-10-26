"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _DialogLongContent = require("../../fixtures/DialogLongContent");

var _Drawer = require("../Drawer");

var RenderProps = function RenderProps() {
  return _react["default"].createElement(_Drawer.Drawer, {
    content: _react["default"].createElement(_DialogLongContent.DialogLongContent, null)
  }, function (drawerProps) {
    return _react["default"].createElement("button", drawerProps, "Open Drawer");
  });
};

exports.RenderProps = RenderProps;
RenderProps.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=renderProps.stories.js.map