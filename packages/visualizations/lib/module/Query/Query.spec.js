import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { DataProvider } from '@looker/components-data';
import { Query } from './';
import { waitFor, screen } from '@testing-library/react';
import { mockSDK, mockSdkFieldsResponse } from '@looker/visualizations-adapters';
import { renderWithTheme } from '@looker/components-test-utils';
const mockConsoleWarn = jest.fn();
const defaultConsoleWarn = globalThis.console.warn;
beforeEach(() => {
  globalThis.console.warn = mockConsoleWarn;
});
afterEach(() => {
  jest.clearAllMocks();
  globalThis.console.warn = defaultConsoleWarn;
});
describe('Query', () => {
  const mockDataListener = jest.fn();
  const isResponseOk = jest.fn();
  const TestChild = ({
    data,
    ok,
    loading
  }) => {
    mockDataListener(data);
    isResponseOk(ok === true && loading === false);
    return null;
  };
  const QueryTemplate = ({
    config,
    children
  }) => {
    const mockData = [{
      'orders.created_date': {
        value: '2019-11'
      },
      'orders.count': {
        value: 1
      }
    }, {
      'orders.created_date': {
        value: '2014-07'
      },
      'orders.count': {
        value: 300
      }
    }];
    return React.createElement(DataProvider, {
      sdk: _objectSpread(_objectSpread({}, mockSDK), {}, {
        run_query: () => Promise.resolve({
          ok: true,
          error: null,
          value: {
            data: mockData,
            fields: mockSdkFieldsResponse
          }
        })
      })
    }, React.createElement(Query, {
      query: '1',
      config: config
    }, children));
  };
  it('sorts data chronologically when dimension is_timeframe is true', async () => {
    renderWithTheme(React.createElement(QueryTemplate, null, React.createElement(TestChild, null)));
    await waitFor(() => expect(mockDataListener).toHaveBeenLastCalledWith([{
      'orders.created_date': '2014-07',
      'orders.count': 300
    }, {
      'orders.created_date': '2019-11',
      'orders.count': 1
    }]));
  });
  it('reverses data when config.x_axis[0].reversed is true', async () => {
    renderWithTheme(React.createElement(QueryTemplate, {
      config: {
        x_axis: [{
          reversed: true
        }]
      }
    }, React.createElement(TestChild, null)));
    await waitFor(() => expect(mockDataListener).toHaveBeenLastCalledWith([{
      'orders.created_date': '2019-11',
      'orders.count': 1
    }, {
      'orders.created_date': '2014-07',
      'orders.count': 300
    }]));
  });
  it('Restricted Props: Expect type failure if both query and dashboard props are used', async () => {
    renderWithTheme(React.createElement(DataProvider, {
      sdk: mockSDK
    }, React.createElement(Query, {
      query: 'abc',
      dashboard: 2
    }, React.createElement(TestChild, null))));
    await waitFor(() => {
      expect(isResponseOk).toHaveBeenLastCalledWith(true);
    });
    expect(mockConsoleWarn).toHaveBeenCalled();
  });
  it('Renders sdk error message in the dom', async () => {
    const errorMessage = 'Query not found';
    const mockSDKNotFound = _objectSpread(_objectSpread({}, mockSDK), {}, {
      query_for_slug: () => Promise.resolve({
        ok: false,
        error: {
          message: errorMessage
        }
      })
    });
    renderWithTheme(React.createElement(DataProvider, {
      sdk: mockSDKNotFound
    }, React.createElement(Query, {
      query: 'abc123'
    }, () => null)));
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=Query.spec.js.map