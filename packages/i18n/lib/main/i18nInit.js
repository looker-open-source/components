"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nInit = i18nInit;
exports.i18nUpdate = exports.i18nInitOptions = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _i18next = _interopRequireDefault(require("i18next"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var i18nInitOptions = {
  fallbackLng: 'en',
  initImmediate: false,
  interpolation: {
    escapeValue: false
  },
  keySeparator: false,
  lng: 'en',
  missingKeyHandler: function missingKeyHandler(languages, ns, key) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error("Missing i18n key (".concat(languages.join(', '), "): \"").concat(key, "\" in ").concat(ns));
    }
  },
  nsSeparator: false,
  saveMissing: true
};
exports.i18nInitOptions = i18nInitOptions;
var i18nUpdate = function i18nUpdate(_ref) {
  var resources = _ref.resources,
    locale = _ref.locale;
  if (resources) {
    Object.keys(resources).forEach(function (lng) {
      var allNamespaces = resources[lng];
      Object.keys(allNamespaces).forEach(function (ns) {
        _i18next["default"].addResourceBundle(lng, ns, allNamespaces[ns]);
      });
    });
  }
  if (locale && locale !== _i18next["default"].language) {
    _i18next["default"].changeLanguage(locale);
  }
};
exports.i18nUpdate = i18nUpdate;
function i18nInit(_x) {
  return _i18nInit.apply(this, arguments);
}
function _i18nInit() {
  _i18nInit = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee(options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (_i18next["default"].isInitialized) {
            i18nUpdate(options);
          }
          _i18next["default"].init(_objectSpread(_objectSpread({}, i18nInitOptions), {}, {
            lng: options.locale,
            resources: options.resources
          }));
          return _context.abrupt("return", _i18next["default"]);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _i18nInit.apply(this, arguments);
}
//# sourceMappingURL=i18nInit.js.map