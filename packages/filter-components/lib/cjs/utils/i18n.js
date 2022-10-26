"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nInit = i18nInit;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _i18n = require("@looker/i18n");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _locales = require("../locales");

function i18nInit() {
  return _i18nInit.apply(this, arguments);
}

function _i18nInit() {
  _i18nInit = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var _ref,
        _ref$locale,
        locale,
        resources,
        dateLocale,
        mergedResources,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : _locales.en, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? 'en' : _ref$locale, resources = _ref.resources, dateLocale = _ref.dateLocale;
            mergedResources = (0, _merge["default"])({}, resources, _locales.en.resources);
            return _context.abrupt("return", (0, _i18n.i18nInitComponents)({
              dateLocale: dateLocale,
              locale: locale,
              resources: mergedResources
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _i18nInit.apply(this, arguments);
}
//# sourceMappingURL=i18n.js.map