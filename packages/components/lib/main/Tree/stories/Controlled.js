"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controlled;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("..");
var _Form = require("../../Form");
var _utils = require("../../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Controlled() {
  var _useToggle = (0, _utils.useToggle)(true),
    value = _useToggle.value,
    change = _useToggle.change,
    toggle = _useToggle.toggle;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Form.FieldToggleSwitch, {
    on: value,
    onChange: toggle,
    label: "Toggle"
  }), _react["default"].createElement(_.Tree, {
    isOpen: value,
    toggleOpen: change,
    label: "Controlled Tree"
  }, _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(MaterialIcons.Tag, null)
  }, "Cost"), _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(MaterialIcons.Place, null)
  }, "Location"), _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(MaterialIcons.Filter, null)
  }, "Tier"), _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(MaterialIcons.Check, null)
  }, "Oui ou Non")));
}
//# sourceMappingURL=Controlled.js.map