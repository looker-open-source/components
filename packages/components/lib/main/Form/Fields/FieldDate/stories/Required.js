"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Required;
var _react = _interopRequireDefault(require("react"));
var _componentsProviders = require("@looker/components-providers");
var _ = require("..");

function Required() {
  var externalLabel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_.FieldDate, {
    defaultValue: new Date('July 25, 2020'),
    label: 'Example',
    required: true
  }));
}
//# sourceMappingURL=Required.js.map