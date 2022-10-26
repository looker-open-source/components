"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationDialog = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Button = require("../../Button");

var _utils = require("../../utils");

var _Dialog = require("../Dialog");

var _ConfirmLayout = require("./ConfirmLayout");

var _excluded = ["cancelLabel", "close", "confirmLabel", "buttonColor", "cancelColor", "isOpen", "message", "onCancel", "onConfirm", "title"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ConfirmationDialog = function ConfirmationDialog(props) {
  var _useTranslation = (0, _utils.useTranslation)('ConfirmationDialog'),
      t = _useTranslation.t;

  var _props$cancelLabel = props.cancelLabel,
      cancelLabel = _props$cancelLabel === void 0 ? t('Cancel') : _props$cancelLabel,
      close = props.close,
      _props$confirmLabel = props.confirmLabel,
      confirmLabel = _props$confirmLabel === void 0 ? t('Confirm') : _props$confirmLabel,
      _props$buttonColor = props.buttonColor,
      buttonColor = _props$buttonColor === void 0 ? 'key' : _props$buttonColor,
      _props$cancelColor = props.cancelColor,
      cancelColor = _props$cancelColor === void 0 ? 'neutral' : _props$cancelColor,
      _props$isOpen = props.isOpen,
      isOpen = _props$isOpen === void 0 ? false : _props$isOpen,
      message = props.message,
      onCancel = props.onCancel,
      onConfirm = props.onConfirm,
      title = props.title,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var confirm = (0, _react.useCallback)(function () {
    onConfirm(close);
  }, [close, onConfirm]);
  var cancel = (0, _react.useCallback)(function () {
    if (onCancel) {
      onCancel(close);
    } else {
      close();
    }
  }, [close, onCancel]);
  return _react["default"].createElement(_Dialog.Dialog, (0, _extends2["default"])({
    isOpen: isOpen,
    onClose: cancel
  }, rest), _react["default"].createElement(_ConfirmLayout.ConfirmLayout, {
    title: title,
    message: message,
    primaryButton: _react["default"].createElement(_Button.Button, {
      onClick: confirm,
      color: buttonColor
    }, confirmLabel),
    secondaryButton: _react["default"].createElement(_Button.ButtonTransparent, {
      color: cancelColor,
      onClick: cancel
    }, cancelLabel)
  }));
};

exports.ConfirmationDialog = ConfirmationDialog;
//# sourceMappingURL=ConfirmationDialog.js.map