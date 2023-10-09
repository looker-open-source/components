"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = void 0;
var _react = _interopRequireDefault(require("react"));
var _DialogRender = require("../Dialog/DialogRender");
var _useDrawer = require("./useDrawer");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Drawer = function Drawer(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(_DialogRender.DialogRender, (0, _useDrawer.useDrawer)(props), children);
};
exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.js.map