"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withThemeProvider = exports.renderWithTheme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _componentsProviders = require("@looker/components-providers");

var _react = require("@testing-library/react");

require("jest-styled-components");

var _react2 = _interopRequireDefault(require("react"));

var withThemeProvider = function withThemeProvider(Component, providerProps) {
  return _react2["default"].createElement(_componentsProviders.ComponentsProvider, (0, _extends2["default"])({
    disableStyleDefender: true
  }, providerProps), Component);
};

exports.withThemeProvider = withThemeProvider;

var renderWithTheme = function renderWithTheme(Component, renderOptions, providerProps) {
  return (0, _react.render)(withThemeProvider(Component, providerProps), renderOptions);
};

exports.renderWithTheme = renderWithTheme;
//# sourceMappingURL=with_theme.js.map