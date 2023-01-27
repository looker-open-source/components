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
var _excluded = ["description", "detail", "label"];
function FloatingLabel(props) {
  var _props$description = props.description,
    description = _props$description === void 0 ? 'this is the description' : _props$description,
    _props$detail = props.detail,
    detail = _props$detail === void 0 ? 'detail' : _props$detail,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Label' : _props$label,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(_.FieldTime, (0, _extends2["default"])({
    detail: detail,
    description: description,
    label: label
  }, restProps)));
}
//# sourceMappingURL=FloatingLabel.js.map