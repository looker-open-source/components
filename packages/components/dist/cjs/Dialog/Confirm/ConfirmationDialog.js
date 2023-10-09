"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = require("../../Button");
var _utils = require("../../utils");
var _Dialog = require("../Dialog");
var _ConfirmLayout = require("./ConfirmLayout");
var _excluded = ["cancelLabel", "close", "confirmLabel", "buttonColor", "cancelColor", "isOpen", "message", "onCancel", "onConfirm", "title"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    rest = _objectWithoutProperties(props, _excluded);
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
  return _react["default"].createElement(_Dialog.Dialog, _extends({
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