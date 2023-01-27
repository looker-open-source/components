import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import i18next from 'i18next';
import { i18nInit, i18nInitOptions } from './i18nInit';
describe('i18nInit', () => {
  test('calls init with correct options', () => {
    const spy = jest.spyOn(i18next, 'init');
    const resources = {
      'de-DE': {
        foo: {
          bar: 'BAR'
        }
      }
    };
    i18nInit({
      locale: 'de-DE',
      resources
    });
    expect(i18next.init).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, i18nInitOptions), {}, {
      fallbackLng: ['en'],
      lng: 'de-DE',
      resources
    }));
    spy.mockRestore();
  });
});
//# sourceMappingURL=i18nInit.spec.js.map