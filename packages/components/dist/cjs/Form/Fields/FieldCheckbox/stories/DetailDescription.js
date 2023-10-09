"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DetailDescription;
var _react = _interopRequireDefault(require("react"));
var _FieldCheckbox = require("../../FieldCheckbox");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function DetailDescription(props) {
  return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, _extends({
    description: "describe something here.",
    detail: "4/20",
    id: "id",
    label: "Example Field",
    name: "thumbsUp"
  }, props));
}
//# sourceMappingURL=DetailDescription.js.map