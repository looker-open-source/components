"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = require("../../Text");

var _Layout = require("../Layout");

var ConfirmLayout = function ConfirmLayout(_ref) {
  var secondaryButton = _ref.secondaryButton,
      primaryButton = _ref.primaryButton,
      message = _ref.message,
      title = _ref.title;
  return _react["default"].createElement(_Layout.DialogLayout, {
    header: title,
    footer: _react["default"].createElement(_react["default"].Fragment, null, primaryButton, secondaryButton)
  }, typeof message === 'string' ? _react["default"].createElement(_Text.Paragraph, {
    breakword: true
  }, message) : message);
};

exports.ConfirmLayout = ConfirmLayout;
//# sourceMappingURL=ConfirmLayout.js.map