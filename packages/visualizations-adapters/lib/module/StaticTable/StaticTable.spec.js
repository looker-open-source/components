import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { StaticTable } from '.';
import { mockBarConfig, mockFields, mockData } from '../fixtures';
describe('StaticTable', () => {
  it('renders StaticTable', () => {
    renderWithTheme(React.createElement(StaticTable, {
      data: mockData,
      fields: mockFields,
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        type: 'table'
      })
    }));

    expect(screen.getAllByText('Orders')[0].tagName).toEqual('TH');
    expect(screen.getAllByText('California')[0].tagName).toEqual('TD');
  });
});
//# sourceMappingURL=StaticTable.spec.js.map