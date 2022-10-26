"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonToggles = void 0;

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var ButtonToggles = function ButtonToggles(_ref) {
  var isLoading = _ref.isLoading,
      onChange = _ref.onChange,
      options = _ref.options,
      value = _ref.value;
  return isLoading ? _react["default"].createElement(_components.ProgressCircular, {
    size: "medium"
  }) : _react["default"].createElement(_components.ButtonToggle, {
    onChange: onChange,
    options: options,
    value: value
  });
};

exports.ButtonToggles = ButtonToggles;
//# sourceMappingURL=ButtonToggles.js.map