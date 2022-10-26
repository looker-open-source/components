"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterErrorMessage = void 0;

var _components = require("@looker/components");

var _Error = require("@styled-icons/material-outlined/Error");

var _react = _interopRequireDefault(require("react"));

var _use_filters_errors = require("./use_filters_errors");

var _constants = require("../constants");

var FilterErrorMessage = function FilterErrorMessage(_ref) {
  var filters = _ref.filters,
      userAttributes = _ref.userAttributes,
      useLongMessageForm = _ref.useLongMessageForm;
  var options = {
    userAttributes: userAttributes,
    useLongMessageForm: useLongMessageForm
  };
  var filterErrors = (0, _use_filters_errors.useFiltersErrors)(filters, options);
  return filterErrors.type === _constants.ERROR_TYPE ? _react["default"].createElement(_components.Space, {
    gap: "u2",
    mt: "xsmall"
  }, _react["default"].createElement(_components.Icon, {
    icon: _react["default"].createElement(_Error.Error, null),
    color: "critical",
    size: "xsmall"
  }), _react["default"].createElement(_components.Span, {
    color: "critical",
    fontSize: "xsmall"
  }, filterErrors.message)) : null;
};

exports.FilterErrorMessage = FilterErrorMessage;
//# sourceMappingURL=FilterErrorMessage.js.map