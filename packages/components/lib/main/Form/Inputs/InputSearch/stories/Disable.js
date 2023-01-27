"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disable;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _2 = require("../../../../");
var _excluded = ["disabled", "placeholder", "value"];
function Disable(props) {
  var _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? true : _props$disabled,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Type your search' : _props$placeholder,
    _props$value = props.value,
    value = _props$value === void 0 ? 'Value Disabled' : _props$value,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_2.SpaceVertical, {
    align: "start"
  }, _react["default"].createElement(_.InputSearch, {
    disabled: disabled
  }), _react["default"].createElement(_.InputSearch, {
    disabled: disabled,
    value: value
  }), _react["default"].createElement(_.InputSearch, (0, _extends2["default"])({
    disabled: disabled,
    placeholder: placeholder
  }, restProps)));
}
//# sourceMappingURL=Disable.js.map