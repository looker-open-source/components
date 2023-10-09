"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromptDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = require("../../Button");
var _Form = require("../../Form");
var _utils = require("../../utils");
var _VisuallyHidden = require("../../VisuallyHidden");
var _ = require("..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState2 = _slicedToArray(_useState, 2),
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
    setValue(event.target.value);
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