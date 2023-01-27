import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];

import { render } from '@testing-library/react';
import i18next from 'i18next';
import React from 'react';
import { useI18n } from './useI18n';
const i18nMockResources = {
  en: {
    AComponent: {
      Something: 'Something',
      'Something else': 'Something else'
    },
    BComponent: {
      Hello: 'Hello',
      World: 'World'
    }
  }
};
const TestComponent = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  useI18n(props);
  return React.createElement(React.Fragment, null, children);
};
describe('useI18n', () => {
  test('initializes i18next', () => {
    const spy = jest.spyOn(i18next, 'init');
    render(React.createElement(TestComponent, null));
    expect(i18next.init).toHaveBeenCalledTimes(1);
    spy.mockRestore();
    i18next.isInitialized = false;
  });
  test('updates with new props', () => {
    const spy = jest.spyOn(i18next, 'addResourceBundle');
    i18next.isInitialized = true;
    render(React.createElement(TestComponent, {
      resources: i18nMockResources
    }));
    expect(spy).toHaveBeenCalledTimes(Object.keys(i18nMockResources.en).length);
    spy.mockRestore();
  });
  test('updates with new locale', () => {
    const spy = jest.spyOn(i18next, 'changeLanguage');
    i18next.isInitialized = true;
    render(React.createElement(TestComponent, {
      locale: "de-DE"
    }));
    expect(spy.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "de-DE",
        ],
      ]
    `);
    spy.mockRestore();
  });
});
//# sourceMappingURL=useI18n.spec.js.map