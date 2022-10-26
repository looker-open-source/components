"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CopyToClipboard;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));

var _ = require("../..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CopyToClipboard() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      change = _useState2[0],
      setChange = _useState2[1];

  var handleSwap = function handleSwap() {
    setChange(true);
    setTimeout(function () {
      return setChange(false);
    }, 2500);
  };

  var alternateCopyButton = _react["default"].createElement(_.ButtonTransparent, {
    iconBefore: _react["default"].createElement(MaterialIcons.Check, null),
    size: "large",
    width: 300
  }, "Copied!");

  return _react["default"].createElement(_.MultiFunctionButton, {
    alternate: alternateCopyButton,
    swap: change
  }, _react["default"].createElement(_.Button, {
    onClick: handleSwap
  }, "Copy to Clipboard"));
}
//# sourceMappingURL=CopyToClipboard.js.map