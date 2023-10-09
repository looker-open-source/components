"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Assignment = require("@styled-icons/material/Assignment");
var _Done = require("@styled-icons/material/Done");
var _ButtonOutline = require("../Button/ButtonOutline");
var _MultiFunctionButton = require("../Button/MultiFunctionButton");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CopyToClipboard = function CopyToClipboard(props) {
  var _useTranslation = (0, _utils.useTranslation)('CopyToClipboard'),
    t = _useTranslation.t;
  var childrenText = t('Copy to Clipboard');
  var successText = t('Copied');
  var _props$children = props.children,
    children = _props$children === void 0 ? childrenText : _props$children,
    content = props.content,
    _props$success = props.success,
    success = _props$success === void 0 ? successText : _props$success,
    disabled = props.disabled;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];
  var buttonRef = (0, _react.useRef)(null);
  var clickCopyButton = function clickCopyButton() {
    var textField = document.createElement('textarea');
    textField.value = content;
    if (buttonRef.current) {
      buttonRef.current.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      setCopied(true);
    }
  };
  (0, _react.useEffect)(function () {
    var t = setTimeout(function () {
      return copied && setCopied(false);
    }, 2500);
    return function () {
      clearTimeout(t);
    };
  }, [copied]);
  var copyButton = (0, _react.isValidElement)(children) ? (0, _react.cloneElement)(children, {
    onClick: clickCopyButton,
    ref: buttonRef
  }) : _react["default"].createElement(_ButtonOutline.ButtonOutline, {
    iconBefore: _react["default"].createElement(_Assignment.Assignment, null),
    onClick: clickCopyButton,
    ref: buttonRef
  }, children);
  var successButton = typeof success === 'string' ? _react["default"].createElement(_ButtonOutline.ButtonOutline, {
    "aria-live": "polite",
    iconBefore: _react["default"].createElement(_Done.Done, null)
  }, success) : (0, _react.cloneElement)(success, {
    'aria-live': 'polite'
  });
  return _react["default"].createElement(_MultiFunctionButton.MultiFunctionButton, {
    alternate: successButton,
    ref: buttonRef,
    swap: copied,
    disabled: disabled
  }, copyButton);
};
exports.CopyToClipboard = CopyToClipboard;
//# sourceMappingURL=CopyToClipboard.js.map