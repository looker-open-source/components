"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Assignment = require("@styled-icons/material/Assignment");

var _Done = require("@styled-icons/material/Done");

var _ButtonOutline = require("../Button/ButtonOutline");

var _MultiFunctionButton = require("../Button/MultiFunctionButton");

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CopyToClipboard = function CopyToClipboard(props) {
  var _useTranslation = (0, _utils.useTranslation)('CopyToClipboard'),
      t = _useTranslation.t;

  var childrenText = t('Copy to Clipboard');
  var successText = t('Copied');
  var _props$children = props.children,
      children = _props$children === void 0 ? childrenText : _props$children,
      content = props.content,
      _props$success = props.success,
      success = _props$success === void 0 ? successText : _props$success;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
      setTimeout(function () {
        return setCopied(false);
      }, 2500);
    }
  };

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
    swap: copied
  }, copyButton);
};

exports.CopyToClipboard = CopyToClipboard;
//# sourceMappingURL=CopyToClipboard.js.map