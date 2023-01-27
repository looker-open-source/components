"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateLocale = void 0;
exports.i18nInitComponents = i18nInitComponents;
exports.i18nInitOptionsComponents = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _i18next = _interopRequireDefault(require("i18next"));
var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));
var _reactI18next = require("react-i18next");
var _i18nInit = require("./i18nInit");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var i18nInitOptionsComponents = _objectSpread(_objectSpread({}, _i18nInit.i18nInitOptions), {}, {
  react: {
    useSuspense: false
  }
});

exports.i18nInitOptionsComponents = i18nInitOptionsComponents;
var dateLocale = _enUS["default"];
var setDateLocale = function setDateLocale(_dateLocale) {
  if (_dateLocale) {
    dateLocale = _dateLocale;
  }
};
var getDateLocale = function getDateLocale() {
  return dateLocale;
};

exports.getDateLocale = getDateLocale;
function i18nInitComponents(_x) {
  return _i18nInitComponents.apply(this, arguments);
}
function _i18nInitComponents() {
  _i18nInitComponents = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee(_ref) {
    var locale, resources, dateLocale;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          locale = _ref.locale, resources = _ref.resources, dateLocale = _ref.dateLocale;
          setDateLocale(dateLocale);
          if (!_i18next["default"].isInitialized) {
            _context.next = 7;
            break;
          }
          (0, _i18nInit.i18nUpdate)({
            locale: locale,
            resources: resources
          });
          return _context.abrupt("return", _i18next["default"]);
        case 7:
          return _context.abrupt("return", _i18next["default"].use(_reactI18next.initReactI18next).init(_objectSpread(_objectSpread({}, i18nInitOptionsComponents), {}, {
            lng: locale,
            resources: resources
          })));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _i18nInitComponents.apply(this, arguments);
}
//# sourceMappingURL=i18nInitComponents.js.map