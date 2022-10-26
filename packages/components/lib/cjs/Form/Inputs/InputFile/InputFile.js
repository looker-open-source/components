"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputFile = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Space = require("../../../Layout/Space");

var _InputText = require("../InputText");

var _ButtonOutline = require("../../../Button/ButtonOutline");

var _ariaProps = require("../ariaProps");

var _excluded = ["accept", "buttonText", "className", "handleFile", "onChange", "onClick", "placeholder", "type"];

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HiddenFileInput = _styledComponents["default"].input.attrs(function () {
  return {
    'data-testid': 'input-file',
    type: 'file'
  };
}).withConfig({
  displayName: "InputFile__HiddenFileInput",
  componentId: "sc-1469vmt-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: none;\n"])));

var InputFile = (0, _styledComponents["default"])(function (_ref) {
  var _ref$accept = _ref.accept,
      accept = _ref$accept === void 0 ? '' : _ref$accept,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? 'Upload File' : _ref$buttonText,
      className = _ref.className,
      handleFile = _ref.handleFile,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      placeholder = _ref.placeholder,
      type = _ref.type,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      fileName = _useState2[0],
      setFileName = _useState2[1];

  var hiddenFileInput = (0, _react.useRef)(null);
  var ariaProps = (0, _ariaProps.pickAriaAndValidationProps)(restProps);
  var buttonOutlineProps = (0, _ariaProps.omitAriaAndValidationProps)(restProps);

  var handleClick = function handleClick(event) {
    var _hiddenFileInput$curr;

    onClick && onClick(event);
    hiddenFileInput === null || hiddenFileInput === void 0 ? void 0 : (_hiddenFileInput$curr = hiddenFileInput.current) === null || _hiddenFileInput$curr === void 0 ? void 0 : _hiddenFileInput$curr.click();
  };

  var handleChange = function handleChange(event) {
    onChange && onChange(event);

    if (!event.target.files) {
      console.warn('There was a problem uploading the file.');
      return;
    }

    var fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
    setFileName(fileUploaded.name);
  };

  return _react["default"].createElement(_Space.Space, {
    className: className
  }, _react["default"].createElement(_InputText.InputText, (0, _extends2["default"])({
    placeholder: placeholder,
    value: fileName,
    readOnly: true
  }, ariaProps)), _react["default"].createElement(_ButtonOutline.ButtonOutline, (0, _extends2["default"])({
    onClick: handleClick
  }, buttonOutlineProps), buttonText), _react["default"].createElement(HiddenFileInput, {
    onChange: handleChange,
    ref: hiddenFileInput,
    accept: accept
  }));
}).withConfig({
  displayName: "InputFile",
  componentId: "sc-1469vmt-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""])));
exports.InputFile = InputFile;
//# sourceMappingURL=InputFile.js.map