import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { FilterCollection } from './FilterCollection';
import { DashboardFilter } from '../DashboardFilter';
jest.mock('@looker/sdk', () => _objectSpread(_objectSpread({}, jest.requireActual('@looker/sdk')), {}, {
  model_fieldname_suggestions: jest.fn(sdk => sdk.get())
}));

import { model_fieldname_suggestions } from '@looker/sdk';
describe('FilterCollection', () => {
  it('shares state for linked filters', async () => {
    const onChangeMock = jest.fn();
    const sdkOkMock = jest.fn(value => Promise.resolve(value));
    const sdkGetMock = jest.fn(() => ({
      suggestions: ['brand1', 'brand2', 'brand3']
    }));
    const sdkMock = {
      ok: sdkOkMock,
      get: sdkGetMock
    };
    renderWithTheme(React.createElement(FilterCollection, {
      sdk: sdkMock
    }, React.createElement(DashboardFilter, {
      filter: {
        dimension: 'products.category',
        name: 'Category',
        title: 'Category',
        field: {
          name: 'products.category',
          suggestions: ['Accessories', 'Home + Garden'],
          project_name: 'testmodel_',
          suggest_dimension: 'products.category',
          view: 'products'
        },
        model: 'testmodel',
        ui_config: {
          type: 'button_group'
        }
      },
      onChange: onChangeMock
    }), React.createElement(DashboardFilter, {
      filter: {
        name: 'Brand',
        title: 'Brand',
        listens_to_filters: ['Category'],
        field: {
          name: 'products.brand',
          suggestable: true,
          project_name: 'testmodel_',
          suggest_dimension: 'products.brand',
          view: 'products'
        },
        model: 'testmodel',
        ui_config: {
          type: 'button_group'
        }
      },
      onChange: onChangeMock
    })));
    fireEvent.click(screen.getByText('Home + Garden'));
    await screen.findByText('brand1');
    expect(model_fieldname_suggestions).toHaveBeenCalledTimes(2);
    expect(model_fieldname_suggestions).toHaveBeenLastCalledWith({
      ok: sdkOkMock,
      get: sdkGetMock
    }, {
      field_name: 'products.brand',
      filters: {
        'products.category': 'Home%20%2B%20Garden'
      },
      model_name: 'testmodel',
      term: '',
      view_name: 'products'
    });
  });
});
//# sourceMappingURL=FilterCollection.spec.js.map