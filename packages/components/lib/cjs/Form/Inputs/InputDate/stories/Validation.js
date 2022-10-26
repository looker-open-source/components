"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _default = function _default() {
  var _React$useState = _react["default"].useState(true),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      isValid = _React$useState2[0],
      setIsValid = _React$useState2[1];

  var handleChange = function handleChange() {
    return setIsValid(true);
  };

  var handleValidationFail = function handleValidationFail() {
    return setIsValid(false);
  };

  return _react["default"].createElement(_.InputDate, {
    onChange: handleChange,
    onValidationFail: handleValidationFail,
    validationType: isValid ? undefined : 'error'
  });
};

exports["default"] = _default;
//# sourceMappingURL=Validation.js.map