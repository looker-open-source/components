"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingLabel;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _componentsProviders = require("@looker/components-providers");
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["defaultValue", "interval", "label"];
function FloatingLabel(props) {
  var _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '14:30' : _props$defaultValue,
    _props$interval = props.interval,
    interval = _props$interval === void 0 ? 10 : _props$interval,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Select Time' : _props$label,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(_.FieldTimeSelect, (0, _extends2["default"])({
    interval: interval,
    defaultValue: defaultValue,
    label: label
  }, restProps)));
}
//# sourceMappingURL=FloatingLabel.js.map