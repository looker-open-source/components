"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentsProvider = void 0;
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    props = _objectWithoutProperties(_ref, _excluded);
  var theme = (0, _react.useMemo)(function () {
    var draft = (0, _designTokens.generateTheme)(props.theme || _designTokens.theme, themeCustomizations);
    if (loadGoogleFonts) {
      draft.fontSources = [].concat(_toConsumableArray(draft.fontSources || []), [{
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
  return _react["default"].createElement(_reactHelmetAsync.HelmetProvider, null, _react["default"].createElement(_ThemeProvider.ThemeProvider, _extends({}, props, {
    theme: theme
  }), _react["default"].createElement(ConditionalStyleDefender, null, loadFontSources && _react["default"].createElement(_FontFaceLoader.FontFaceLoader, null), _react["default"].createElement(_FocusTrap.FocusTrapProvider, null, _react["default"].createElement(_ScrollLock.ScrollLockProvider, null, children)))));
};
exports.ComponentsProvider = ComponentsProvider;
//# sourceMappingURL=ComponentsProvider.js.map