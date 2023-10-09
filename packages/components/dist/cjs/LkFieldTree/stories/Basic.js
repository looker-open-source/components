"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _Tree = require("../../Tree");
var _ = require("../");
var _excluded = ["label", "defaultOpen"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Basic(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? _react["default"].createElement("strong", null, "Orders") : _props$label,
    _props$defaultOpen = props.defaultOpen,
    defaultOpen = _props$defaultOpen === void 0 ? true : _props$defaultOpen,
    rest = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_.LkFieldTree, _extends({
    label: label
  }, rest), _react["default"].createElement(_.LkFieldTree, {
    label: label,
    defaultOpen: true
  }, _react["default"].createElement(_.LkFieldItem, null, "ID"), _react["default"].createElement(_.LkFieldItem, null, "Status"), _react["default"].createElement(_.LkFieldTree, {
    label: _react["default"].createElement("strong", null, "Created"),
    defaultOpen: defaultOpen
  }, _react["default"].createElement(_.LkFieldItem, null, "Created Date"), _react["default"].createElement(_.LkFieldItem, null, "Created Month"), _react["default"].createElement(_.LkFieldItem, null, "Created Year"), _react["default"].createElement(_.LkFieldItem, null, "Created Quarter")))));
}
//# sourceMappingURL=Basic.js.map