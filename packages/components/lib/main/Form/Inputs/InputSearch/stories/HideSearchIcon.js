"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HideSearchIcon;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["hideSearchIcon", "placeholder"];
function HideSearchIcon(props) {
  var _props$hideSearchIcon = props.hideSearchIcon,
    hideSearchIcon = _props$hideSearchIcon === void 0 ? false : _props$hideSearchIcon,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'No search icon here' : _props$placeholder,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputSearch, (0, _extends2["default"])({
    hideSearchIcon: hideSearchIcon,
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=HideSearchIcon.js.map