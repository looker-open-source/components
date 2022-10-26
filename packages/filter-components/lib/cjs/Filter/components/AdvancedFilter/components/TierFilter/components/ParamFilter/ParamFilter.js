"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParamFilter = void 0;

var _react = _interopRequireDefault(require("react"));

var _GroupSelect = require("../../../GroupSelect");

var ParamFilter = function ParamFilter(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange,
      enumerations = _ref.enumerations,
      validationMessage = _ref.validationMessage;

  var handleChange = function handleChange(value) {
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      value: [value]
    });
  };

  return _react["default"].createElement(_GroupSelect.GroupSelect, {
    placement: "right",
    value: item.value && item.value[0],
    onChange: handleChange,
    options: enumerations || [],
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  });
};

exports.ParamFilter = ParamFilter;
//# sourceMappingURL=ParamFilter.js.map