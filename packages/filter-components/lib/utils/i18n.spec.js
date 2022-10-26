import i18next from 'i18next';
import es from 'date-fns/locale/es';
import { getDateLocale } from '@looker/i18n';
import { i18nInit } from './i18n';
describe('i18nInit', () => {
  let spy;
  beforeEach(() => {
    i18next.isInitialized = false;
    spy = jest.spyOn(i18next, 'init');
  });
  afterEach(() => {
    spy.mockRestore();
  });
  it('initializes i18next', () => {
    i18nInit();
    expect(i18next.init).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].lng).toEqual('en');
  });
  it('initializes i18next with specific locale and resources', () => {
    const custom = {
      test: 'prueba'
    };
    i18nInit({
      dateLocale: es,
      locale: 'es-ES',
      resources: {
        'es-ES': custom
      }
    });
    expect(i18next.init).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].lng).toEqual('es-ES');
    expect(spy.mock.calls[0][0].resources['es-ES']).toMatchObject(custom);
    expect(getDateLocale()).toBe(es);
  });
});
//# sourceMappingURL=i18n.spec.js.map