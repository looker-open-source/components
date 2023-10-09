"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldTextArea = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../utils");
var _Form = require("../../Form");
var _TextArea = require("../../Inputs/TextArea");
var _Field = require("../Field");
var _useFloatingLabel = require("../Field/useFloatingLabel");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FieldTextArea = (0, _styledComponents["default"])(function (props) {
  var id = (0, _utils.useID)(props.id);
  var validationMessage = (0, _Form.useFormContext)(props);
  return _react["default"].createElement(_Field.FloatingLabelField, _extends({}, (0, _Field.pickFieldProps)(props), {
    id: id,
    validationMessage: validationMessage,
    hasValue: (0, _useFloatingLabel.getHasValue)(props)
  }), _react["default"].createElement(_TextArea.TextArea, _extends({}, (0, _Field.omitFieldProps)(props), {
    id: id,
    "aria-describedby": "describedby-".concat(id),
    validationType: validationMessage && validationMessage.type
  })));
}).withConfig({
  displayName: "FieldTextArea",
  componentId: "sc-1nmc8fy-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.FieldTextArea = FieldTextArea;
//# sourceMappingURL=FieldTextArea.js.map