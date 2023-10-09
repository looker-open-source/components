"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingLabelNoDefaultValue;
var _react = _interopRequireDefault(require("react"));
var _componentsProviders = require("@looker/components-providers");
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FloatingLabelNoDefaultValue(externalLabel) {
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_.FieldDate, {
    label: 'Example',
    externalLabel: false
  }));
}
//# sourceMappingURL=FloatingLabelNoDefaultValue.js.map