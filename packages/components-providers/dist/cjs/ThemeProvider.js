"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = void 0;
var _react = _interopRequireDefault(require("react"));
var _designTokens = require("@looker/design-tokens");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? _designTokens.theme : _ref$theme;
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, children);
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map