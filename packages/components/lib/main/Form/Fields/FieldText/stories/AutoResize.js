"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AutoResize;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../../");
var _2 = require("../..");
var _excluded = ["autoResize", "name", "label", "placeholder", "inline"];
function AutoResize(props) {
  var _props$autoResize = props.autoResize,
    autoResize = _props$autoResize === void 0 ? true : _props$autoResize,
    _props$name = props.name,
    name = _props$name === void 0 ? 'firstName' : _props$name,
    _props$label = props.label,
    label = _props$label === void 0 ? 'First Name' : _props$label,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Start typing and watch me scale to fit content' : _props$placeholder,
    _inline = props.inline,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Space, null, _react["default"].createElement(_2.FieldText, (0, _extends2["default"])({
    autoResize: autoResize,
    name: name,
    label: label,
    placeholder: placeholder
  }, restProps)), _react["default"].createElement(_2.FieldText, (0, _extends2["default"])({
    autoResize: autoResize,
    name: name,
    label: label,
    placeholder: placeholder,
    inline: true
  }, restProps)));
}
//# sourceMappingURL=AutoResize.js.map