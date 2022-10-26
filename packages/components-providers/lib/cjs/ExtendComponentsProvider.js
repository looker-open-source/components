"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendComponentsThemeProvider = void 0;

var _designTokens = require("@looker/design-tokens");

var _styledComponents = require("styled-components");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ExtendComponentsThemeProvider = function ExtendComponentsThemeProvider(_ref) {
  var children = _ref.children,
      themeCustomizations = _ref.themeCustomizations;
  var parentTheme = (0, _styledComponents.useTheme)();
  var theme = (0, _react.useMemo)(function () {
    return (0, _designTokens.generateTheme)(parentTheme, themeCustomizations);
  }, [parentTheme, themeCustomizations]);
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, children);
};

exports.ExtendComponentsThemeProvider = ExtendComponentsThemeProvider;
//# sourceMappingURL=ExtendComponentsProvider.js.map