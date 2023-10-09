"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DisabledAndSelected;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _Grid = require("../../Layout/Grid");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Basic = function Basic(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, _extends({
    label: children,
    defaultOpen: true
  }, props), _react["default"].createElement(_.Tree, {
    disabled: true,
    label: _react["default"].createElement("strong", null, "Disabled Tree"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, {
    disabled: true
  }, "Disabled TreeItem"), _react["default"].createElement(_.TreeItem, {
    selected: true
  }, "Selected TreeItem")), _react["default"].createElement(_.Tree, {
    selected: true,
    label: _react["default"].createElement("strong", null, "Selected Tree"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, {
    disabled: true
  }, "Disabled TreeItem"), _react["default"].createElement(_.TreeItem, {
    selected: true
  }, "Selected TreeItem"))));
};
function DisabledAndSelected() {
  return _react["default"].createElement(_Grid.Grid, {
    columns: 3
  }, _react["default"].createElement(Basic, null, _react["default"].createElement("strong", null, "Default")), _react["default"].createElement(Basic, {
    color: "key"
  }, _react["default"].createElement("strong", null, "Key")), _react["default"].createElement(Basic, {
    color: "calculation"
  }, _react["default"].createElement("strong", null, "Dimension")));
}
//# sourceMappingURL=DisabledAndSelected.js.map