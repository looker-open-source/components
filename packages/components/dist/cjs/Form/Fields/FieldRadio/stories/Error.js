"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Error;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Error() {
  return _react["default"].createElement(_.FieldRadio, {
    id: "fieldRadioId",
    label: "Field Radio Example",
    name: "thumbsUp",
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Error.js.map