"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputFilterEditor = void 0;

var _react = _interopRequireDefault(require("react"));

var _OptionsGroup = require("../OptionsGroup");

var inputFilterEditor = function inputFilterEditor(_ref) {
  var closeEditor = _ref.closeEditor,
      filterOptions = _ref.filterOptions,
      onChange = _ref.onChange,
      value = _ref.value;
  var _filterOptions$multip = filterOptions.multiple,
      multiple = _filterOptions$multip === void 0 ? false : _filterOptions$multip;
  var options = filterOptions.options ? filterOptions.options.map(function (value) {
    return {
      label: value,
      value: value
    };
  }) : [];

  var handleChangeCheckbox = function handleChangeCheckbox(newValues) {
    return onChange(newValues.sort().join(','));
  };

  var handleChangeRadio = function handleChangeRadio(newValue) {
    onChange(newValue);
    closeEditor();
  };

  return multiple ? _react["default"].createElement(_OptionsGroup.CheckboxGroup, {
    value: value ? value.split(',') : [],
    options: options,
    onChange: handleChangeCheckbox
  }) : _react["default"].createElement(_OptionsGroup.RadioGroup, {
    value: value,
    options: options,
    onChange: handleChangeRadio
  });
};

exports.inputFilterEditor = inputFilterEditor;
//# sourceMappingURL=inputFilterEditor.js.map