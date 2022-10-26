"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ErrorIcon = require("../ErrorIcon");

var _InputText = require("../InputText");

var _simple = require("../../../Layout/utils/simple");

var _InputProps = require("../InputProps");

var _templateObject, _templateObject2;

var _excluded = ["className", "validationType"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextAreaLayout = function TextAreaLayout(_ref) {
  var className = _ref.className,
      validationType = _ref.validationType,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var textareaProps = (0, _InputProps.pickInputProps)(props);
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("textarea", (0, _extends2["default"])({
    "aria-invalid": validationType === 'error' ? 'true' : undefined
  }, textareaProps)), validationType && _react["default"].createElement(_ErrorIcon.ErrorIcon, null));
};

var textAreaResize = function textAreaResize(_ref2) {
  var resize = _ref2.resize;

  if (resize === false) {
    resize = 'none';
  } else if (resize === true) {
    resize = 'vertical';
  }

  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    resize: ", ";\n  "])), resize);
};

var TextArea = (0, _styledComponents["default"])(TextAreaLayout).attrs(function (_ref3) {
  var _ref3$resize = _ref3.resize,
      resize = _ref3$resize === void 0 ? 'vertical' : _ref3$resize,
      _ref3$minHeight = _ref3.minHeight,
      minHeight = _ref3$minHeight === void 0 ? '6.25rem' : _ref3$minHeight;
  return {
    minHeight: minHeight,
    resize: resize
  };
}).withConfig({
  displayName: "TextArea",
  componentId: "sc-10ezzv1-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  height: fit-content;\n  position: relative;\n  width: 100%;\n\n  ", " {\n    pointer-events: none;\n    position: absolute;\n    right: calc(", " + 1px);\n    top: calc(", " / 2);\n  }\n\n  textarea {\n    font-family: inherit;\n    margin: 0; /* override browser default(s) */\n    ", "\n    ", "\n    padding: ", ";\n    padding-right: ", ";\n    ", "\n    vertical-align: top; /* textarea is inline-block so this removes 4px generated below */\n    width: 100%;\n\n    ::placeholder {\n      color: ", ";\n    }\n\n    &:hover {\n      ", "\n    }\n\n    &:focus,\n    :focus-within {\n      ", "\n    }\n\n    ", "\n\n    ", "\n  }\n"])), _ErrorIcon.ErrorIcon, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u3;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.space.u3;
}, _simple.simpleLayoutCSS, _InputText.inputCSS, function (_ref6) {
  var theme = _ref6.theme;
  return "".concat(theme.space.u2, " ").concat(theme.space.u3);
}, function (_ref7) {
  var theme = _ref7.theme,
      validationType = _ref7.validationType;
  return validationType === 'error' && theme.space.u10;
}, textAreaResize, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.text2;
}, _InputText.inputTextHover, _InputText.inputTextFocus, function (_ref9) {
  var disabled = _ref9.disabled;
  return disabled ? _InputText.inputTextDisabled : '';
}, _InputText.inputTextValidation);
exports.TextArea = TextArea;
TextArea.displayName = 'TextArea';
//# sourceMappingURL=TextArea.js.map