"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nInit = i18nInit;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _i18n = require("@looker/i18n");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _locales = require("../locales");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function i18nInit() {
  return _i18nInit.apply(this, arguments);
}

function _i18nInit() {
  _i18nInit = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var options,
        resources,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 0 && _args[0] !== undefined ? _args[0] : _locales.en;
            resources = (0, _merge["default"])(options.resources, _locales.en.resources);
            return _context.abrupt("return", (0, _i18n.i18nInit)(_objectSpread(_objectSpread({}, options), {}, {
              resources: resources
            })));

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