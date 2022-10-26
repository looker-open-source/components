"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleNumberInput = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireDefault(require("react"));

var _GroupInput = require("../../../GroupInput");

var getInputValue = function getInputValue(value) {
  var _ref;

  var singleValue = (_ref = Array.isArray(value) ? value[0] : value) !== null && _ref !== void 0 ? _ref : '';

  if (['number', 'bigint'].indexOf((0, _typeof2["default"])(singleValue))) {
    return singleValue.toString();
  }

  return singleValue || '';
};

var SingleNumberInput = function SingleNumberInput(_ref2) {
  var item = _ref2.item,
      onChange = _ref2.onChange,
      placement = _ref2.placement,
      validationMessage = _ref2.validationMessage;

  var inputChange = function inputChange(_ref3) {
    var value = _ref3.currentTarget.value;
    var numberValue = (0, _filterExpressions.getNumberFromString)(value);
    var newValueArr = value === '' ? [] : [numberValue];

    if (!Number.isNaN(numberValue)) {
      onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
        value: newValueArr
      });
    }
  };

  var inputValue = getInputValue(item.value);
  return _react["default"].createElement(_GroupInput.GroupInput, {
    type: "number",
    value: inputValue,
    onChange: inputChange,
    placement: placement,
    minWidth: "4.5em",
    "data-testid": "single-number",
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    noErrorIcon: true
  });
};

exports.SingleNumberInput = SingleNumberInput;
//# sourceMappingURL=SingleNumberInput.js.map