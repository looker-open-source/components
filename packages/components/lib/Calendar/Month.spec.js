import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import en from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Month } from './Month';
describe('Month', () => {
  const date = new Date('May 1, 2022');
  const defaultProps = {
    date,
    datesSelected: [],
    firstDayOfWeek: 0,
    fullRender: true,
    index: 0,
    locale: en,
    onDraftSelect: jest.fn(),
    onSelect: jest.fn(),
    setItemPosition: jest.fn()
  };
  test('renders may 2022 with en locale', () => {
    renderWithTheme(React.createElement(Month, defaultProps));
    expect(screen.getByText('May 2022')).toBeVisible();
    expect(screen.getByText('1')).toBeVisible();
  });
  test('renders may 2022 with es locale', () => {
    const esProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
      firstDayOfWeek: 1,
      locale: es
    });

    renderWithTheme(React.createElement(Month, esProps));
    expect(screen.getByText('may 2022')).toBeVisible();
    expect(screen.getByText('1')).toBeVisible();
  });
});
//# sourceMappingURL=Month.spec.js.map