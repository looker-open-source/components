"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _i18next = _interopRequireDefault(require("i18next"));

var _es = _interopRequireDefault(require("date-fns/locale/es"));

var _i18n = require("@looker/i18n");

var _i18n2 = require("./i18n");

describe('i18nInit', function () {
  var spy;
  beforeEach(function () {
    _i18next["default"].isInitialized = false;
    spy = jest.spyOn(_i18next["default"], 'init');
  });
  afterEach(function () {
    spy.mockRestore();
  });
  it('initializes i18next', function () {
    (0, _i18n2.i18nInit)();
    expect(_i18next["default"].init).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].lng).toEqual('en');
  });
  it('initializes i18next with specific locale and resources', function () {
    var custom = {
      test: 'prueba'
    };
    (0, _i18n2.i18nInit)({
      dateLocale: _es["default"],
      locale: 'es-ES',
      resources: {
        'es-ES': custom
      }
    });
    expect(_i18next["default"].init).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].lng).toEqual('es-ES');
    expect(spy.mock.calls[0][0].resources['es-ES']).toMatchObject(custom);
    expect((0, _i18n.getDateLocale)()).toBe(_es["default"]);
  });
});
//# sourceMappingURL=i18n.spec.js.map