"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromptDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Button = require("../../Button");

var _Form = require("../../Form");

var _utils = require("../../utils");

var _VisuallyHidden = require("../../VisuallyHidden");

var _ = require("..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PromptDialog = function PromptDialog(props) {
  var _useTranslation = (0, _utils.useTranslation)('PromptDialog'),
      t = _useTranslation.t;

  var cancelLabelText = t('Cancel');
  var saveLabelText = t('Save');
  var _props$cancelColor = props.cancelColor,
      cancelColor = _props$cancelColor === void 0 ? 'neutral' : _props$cancelColor,
      _props$cancelLabel = props.cancelLabel,
      cancelLabel = _props$cancelLabel === void 0 ? cancelLabelText : _props$cancelLabel,
      clearOnCancel = props.clearOnCancel,
      close = props.close,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
      isOpen = props.isOpen,
      inputLabel = props.inputLabel,
      onSave = props.onSave,
      onCancel = props.onCancel,
      _props$saveLabel = props.saveLabel,
      saveLabel = _props$saveLabel === void 0 ? saveLabelText : _props$saveLabel,
      secondary = props.secondary,
      title = props.title;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var hasValue = !!value.trim();
  (0, _react.useEffect)(function () {
    setValue(defaultValue);
  }, [defaultValue]);
  var handleClose = (0, _react.useCallback)(function () {
    close();
  }, [close]);

  var onChange = function onChange(event) {
    setValue(event.currentTarget.value);
  };

  var onSubmit = (0, _react.useCallback)(function () {
    onSave(value, handleClose);
  }, [handleClose, onSave, value]);
  var cancel = (0, _react.useCallback)(function () {
    if (onCancel) {
      onCancel(handleClose);
    } else {
      handleClose();
    }

    clearOnCancel && setValue('');
  }, [clearOnCancel, handleClose, onCancel]);

  var onKeyDown = function onKeyDown(event) {
    if (event.key === 'Enter' && hasValue) {
      onSubmit();
    } else if (event.key === 'Escape') {
      cancel();
    }
  };

  var footer = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, {
    disabled: !hasValue,
    type: "submit",
    onClick: onSubmit,
    color: "key"
  }, saveLabel), _react["default"].createElement(_Button.ButtonTransparent, {
    type: "reset",
    color: cancelColor,
    onClick: cancel
  }, cancelLabel));

  return _react["default"].createElement(_.Dialog, {
    width: "30rem",
    isOpen: isOpen,
    onClose: cancel
  }, _react["default"].createElement(_.DialogLayout, {
    header: title,
    footer: footer,
    footerSecondary: secondary
  }, _react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, _react["default"].createElement(_Form.Label, {
    htmlFor: "promptInput"
  }, inputLabel)), _react["default"].createElement(_Form.InputText, {
    autoFocus: true,
    onKeyDown: onKeyDown,
    id: "promptInput",
    placeholder: inputLabel,
    onChange: onChange,
    width: "100%",
    value: value
  })));
};

exports.PromptDialog = PromptDialog;
//# sourceMappingURL=PromptDialog.js.map