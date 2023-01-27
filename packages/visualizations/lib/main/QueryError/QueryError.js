"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryError = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _ErrorOutline = require("@styled-icons/material/ErrorOutline");
var _utils = require("../utils");

var QueryError = function QueryError(_ref) {
  var message = _ref.message;
  var _useTranslation = (0, _utils.useTranslation)('QueryError'),
    t = _useTranslation.t;
  return _react["default"].createElement(_components.SpaceVertical, {
    p: "medium",
    gap: "xxsmall"
  }, _react["default"].createElement(_components.Space, {
    justify: "center"
  }, _react["default"].createElement(_components.Icon, {
    icon: _react["default"].createElement(_ErrorOutline.ErrorOutline, null),
    size: "large",
    color: "ui4"
  })), _react["default"].createElement(_components.Space, {
    justify: "center",
    color: "text2",
    gap: "xxsmall"
  }, _react["default"].createElement("strong", null, t('Error'), ":"), _react["default"].createElement("span", null, message)));
};
exports.QueryError = QueryError;
//# sourceMappingURL=QueryError.js.map