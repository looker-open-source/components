"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Tree = require("../../Tree");
var _ = require("../");
var _excluded = ["label", "defaultOpen"];
function Basic(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? _react["default"].createElement("strong", null, "Orders") : _props$label,
    _props$defaultOpen = props.defaultOpen,
    defaultOpen = _props$defaultOpen === void 0 ? true : _props$defaultOpen,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_.LkFieldTree, (0, _extends2["default"])({
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