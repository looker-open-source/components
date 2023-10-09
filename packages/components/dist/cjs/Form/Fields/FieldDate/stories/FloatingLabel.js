"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingLabel;
var _react = _interopRequireDefault(require("react"));
var _componentsProviders = require("@looker/components-providers");
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FloatingLabel(externalLabel) {
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_.FieldDate, {
    defaultValue: new Date('July 25, 2020'),
    label: 'Example',
    externalLabel: false
  }));
}
//# sourceMappingURL=FloatingLabel.js.map