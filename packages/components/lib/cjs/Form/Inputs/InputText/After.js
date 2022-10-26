"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.After = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = require("../../../Text");

var _ErrorIcon = require("../ErrorIcon");

var _InputTextContent = require("./InputTextContent");

var After = function After(_ref) {
  var after = _ref.after,
      iconAfter = _ref.iconAfter,
      noErrorIcon = _ref.noErrorIcon,
      validationType = _ref.validationType;

  var iconAfterOrSuffix = (iconAfter || typeof after === 'string') && _react["default"].createElement(_InputTextContent.InputTextContent, {
    pl: "u2",
    pr: "u2"
  }, iconAfter || _react["default"].createElement(_Text.Span, {
    fontSize: "small"
  }, after));

  var validationIcon = !noErrorIcon && validationType === 'error' && _react["default"].createElement(_InputTextContent.InputTextContent, {
    pl: after || iconAfter ? 'u1' : 'u2',
    pr: "u2"
  }, _react["default"].createElement(_ErrorIcon.ErrorIcon, null));

  return _react["default"].createElement(_react["default"].Fragment, null, iconAfterOrSuffix ? _react["default"].createElement(_react["default"].Fragment, null, iconAfterOrSuffix, validationIcon) : after || validationIcon);
};

exports.After = After;
//# sourceMappingURL=After.js.map