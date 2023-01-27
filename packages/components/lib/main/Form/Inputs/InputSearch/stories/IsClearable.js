"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = IsClearable;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["placeholder", "defaultValue", "isClearable"];
function IsClearable(props) {
  var _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Type your search' : _props$placeholder,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? 'test search 1' : _props$defaultValue,
    _props$isClearable = props.isClearable,
    isClearable = _props$isClearable === void 0 ? false : _props$isClearable,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputSearch, (0, _extends2["default"])({
    placeholder: placeholder,
    defaultValue: defaultValue,
    isClearable: isClearable
  }, restProps));
}
//# sourceMappingURL=IsClearable.js.map