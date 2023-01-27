"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClearIconLabel;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["clearIconLabel", "value"];
function ClearIconLabel(props) {
  var _props$clearIconLabel = props.clearIconLabel,
    clearIconLabel = _props$clearIconLabel === void 0 ? 'Reset this seach field' : _props$clearIconLabel,
    _props$value = props.value,
    value = _props$value === void 0 ? 'my query' : _props$value,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputSearch, (0, _extends2["default"])({
    clearIconLabel: clearIconLabel,
    value: value
  }, restProps));
}
//# sourceMappingURL=ClearIconLabel.js.map