"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Validation;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../../../../");
var _2 = require("..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Validation() {
  var emailValidator = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    invalidValue = _useState4[0],
    setInvalidValue = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    duplicateValue = _useState6[0],
    setDuplicateValue = _useState6[1];
  function handleChange(newValues) {
    setValues(newValues);
    setInvalidValue(undefined);
    setDuplicateValue(undefined);
  }
  function validate(valueToValidate) {
    return emailValidator.test(valueToValidate);
  }
  function handleInvalid(draftValue) {
    setInvalidValue(draftValue);
  }
  function handleDuplicate(duplicateValue) {
    setDuplicateValue(duplicateValue);
  }
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.InputChips, {
    placeholder: "Enter email addresses",
    values: values,
    validate: validate,
    onChange: handleChange,
    onValidationFail: handleInvalid,
    onDuplicate: handleDuplicate,
    mb: "u3"
  }), invalidValue && _react["default"].createElement(_.Paragraph, null, "You entered an invalid email: ", invalidValue), duplicateValue && _react["default"].createElement(_.Paragraph, null, duplicateValue, " has already been entered"));
}
//# sourceMappingURL=Validation.js.map