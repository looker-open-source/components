"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = void 0;

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var CheckboxGroup = function CheckboxGroup(_ref) {
  var validationMessage = _ref.validationMessage,
      inline = _ref.inline,
      isLoading = _ref.isLoading,
      onChange = _ref.onChange,
      options = _ref.options,
      value = _ref.value;
  return isLoading ? _react["default"].createElement(_components.ProgressCircular, {
    size: "medium"
  }) : _react["default"].createElement(_components.CheckboxGroup, {
    inline: inline,
    onChange: onChange,
    options: options,
    value: value,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  });
};

exports.CheckboxGroup = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map