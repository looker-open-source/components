"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldTextArea = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _Form = require("../../Form");

var _TextArea = require("../../Inputs/TextArea");

var _Field = require("../Field");

var _useFloatingLabel = require("../Field/useFloatingLabel");

var _templateObject;

var FieldTextArea = (0, _styledComponents["default"])(function (props) {
  var id = (0, _utils.useID)(props.id);
  var validationMessage = (0, _Form.useFormContext)(props);
  return _react["default"].createElement(_Field.FloatingLabelField, (0, _extends2["default"])({}, (0, _Field.pickFieldProps)(props), {
    id: id,
    validationMessage: validationMessage,
    hasValue: (0, _useFloatingLabel.getHasValue)(props)
  }), _react["default"].createElement(_TextArea.TextArea, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    id: id,
    "aria-describedby": "describedby-".concat(id),
    validationType: validationMessage && validationMessage.type
  })));
}).withConfig({
  displayName: "FieldTextArea",
  componentId: "sc-1nmc8fy-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldTextArea = FieldTextArea;
//# sourceMappingURL=FieldTextArea.js.map