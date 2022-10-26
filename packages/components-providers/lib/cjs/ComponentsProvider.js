"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentsProvider = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireWildcard(require("react"));

var _reactHelmetAsync = require("react-helmet-async");

var _FocusTrap = require("./FocusTrap");

var _ScrollLock = require("./ScrollLock");

var _I18n = require("./I18n");

var _ThemeProvider = require("./ThemeProvider");

var _FontFaceLoader = require("./FontFaceLoader");

var _StyleDefender = require("./StyleDefender");

var _excluded = ["children", "loadFontSources", "loadGoogleFonts", "disableStyleDefender", "dateLocale", "locale", "resources", "themeCustomizations"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ComponentsProvider = function ComponentsProvider(_ref) {
  var children = _ref.children,
      _ref$loadFontSources = _ref.loadFontSources,
      loadFontSources = _ref$loadFontSources === void 0 ? true : _ref$loadFontSources,
      _ref$loadGoogleFonts = _ref.loadGoogleFonts,
      loadGoogleFonts = _ref$loadGoogleFonts === void 0 ? false : _ref$loadGoogleFonts,
      _ref$disableStyleDefe = _ref.disableStyleDefender,
      disableStyleDefender = _ref$disableStyleDefe === void 0 ? false : _ref$disableStyleDefe,
      dateLocale = _ref.dateLocale,
      locale = _ref.locale,
      resources = _ref.resources,
      themeCustomizations = _ref.themeCustomizations,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _react.useMemo)(function () {
    var draft = (0, _designTokens.generateTheme)(props.theme || _designTokens.theme, themeCustomizations);

    if (loadGoogleFonts) {
      draft.fontSources = [].concat((0, _toConsumableArray2["default"])(draft.fontSources || []), [{
        url: (0, _designTokens.googleFontUrl)(draft)
      }]);
    }

    return draft;
  }, [props.theme, loadGoogleFonts, themeCustomizations]);
  (0, _I18n.useI18n)({
    dateLocale: dateLocale,
    locale: locale,
    resources: resources
  });
  var ConditionalStyleDefender = disableStyleDefender ? _react.Fragment : _StyleDefender.StyleDefender;
  return _react["default"].createElement(_reactHelmetAsync.HelmetProvider, null, _react["default"].createElement(_ThemeProvider.ThemeProvider, (0, _extends2["default"])({}, props, {
    theme: theme
  }), _react["default"].createElement(ConditionalStyleDefender, null, loadFontSources && _react["default"].createElement(_FontFaceLoader.FontFaceLoader, null), _react["default"].createElement(_FocusTrap.FocusTrapProvider, null, _react["default"].createElement(_ScrollLock.ScrollLockProvider, null, children)))));
};

exports.ComponentsProvider = ComponentsProvider;
//# sourceMappingURL=ComponentsProvider.js.map