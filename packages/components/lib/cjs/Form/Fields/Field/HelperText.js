"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelperText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Layout = require("../../../Layout");

var _Text = require("../../../Text");

var _ValidationMessage = require("../../ValidationMessage");

var _templateObject;

var HelperText = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className,
      description = _ref.description,
      id = _ref.id,
      validationMessage = _ref.validationMessage;
  return _react["default"].createElement(_Layout.SpaceVertical, {
    pt: description || validationMessage ? 'u2' : 'none',
    gap: "u1",
    className: className,
    id: "describedby-".concat(id),
    "aria-live": "polite"
  }, description && _react["default"].createElement(_Text.Paragraph, {
    fontSize: "xsmall",
    color: "text2"
  }, description), validationMessage && _react["default"].createElement(_ValidationMessage.ValidationMessage, validationMessage));
}).withConfig({
  displayName: "HelperText",
  componentId: "sc-45tbno-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.HelperText = HelperText;
//# sourceMappingURL=HelperText.js.map