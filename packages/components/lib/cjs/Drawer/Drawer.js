"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _DialogRender = require("../Dialog/DialogRender");

var _useDrawer = require("./useDrawer");

var _excluded = ["children"];

var Drawer = function Drawer(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_DialogRender.DialogRender, (0, _useDrawer.useDrawer)(props), children);
};

exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.js.map