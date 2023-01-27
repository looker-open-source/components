"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AutoResize;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["autoResize", "placeholder"];
function AutoResize(props) {
  var _props$autoResize = props.autoResize,
    autoResize = _props$autoResize === void 0 ? true : _props$autoResize,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Start typing to resize' : _props$placeholder,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputSearch, (0, _extends2["default"])({
    autoResize: autoResize,
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=AutoResize.js.map