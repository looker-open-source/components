"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _i18next = _interopRequireDefault(require("i18next"));
var _i18nInit = require("./i18nInit");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('i18nInit', function () {
  test('calls init with correct options', function () {
    var spy = jest.spyOn(_i18next["default"], 'init');
    var resources = {
      'de-DE': {
        foo: {
          bar: 'BAR'
        }
      }
    };
    (0, _i18nInit.i18nInit)({
      locale: 'de-DE',
      resources: resources
    });
    expect(_i18next["default"].init).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, _i18nInit.i18nInitOptions), {}, {
      fallbackLng: ['en'],
      lng: 'de-DE',
      resources: resources
    }));
    spy.mockRestore();
  });
});
//# sourceMappingURL=i18nInit.spec.js.map