"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DisabledItem;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["options", "defaultValue"];
var mockOptions = [{
  disabled: true,
  label: 'Brie',
  value: 'brie'
}, {
  label: 'Cheddar',
  value: 'cheddar'
}, {
  disabled: true,
  label: 'Gouda',
  value: 'gouda'
}, {
  label: 'Mozzarella',
  value: 'mozzarella'
}];
function DisabledItem(props) {
  var _props$options = props.options,
    options = _props$options === void 0 ? mockOptions : _props$options,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? 'cheddar' : _props$defaultValue,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.RadioGroup, (0, _extends2["default"])({
    name: "group1",
    options: options,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=DisabledItem.js.map