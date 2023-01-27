import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { ContextWrapper, sdkMethodRunQueryListener } from '../testUtils';
import { useQueryData } from './useQueryData';

const dataContainerListener = jest.fn();
const TestComponent = ({
  queryId: _queryId = 1
}) => {
  const response = useQueryData(_queryId);
  dataContainerListener(response);
  return null;
};
afterEach(() => {
  jest.resetAllMocks();
});
describe('useQueryData', () => {
  it('fetches query data on mount', async () => {
    render(React.createElement(ContextWrapper, null, React.createElement(TestComponent, null)));
    await waitFor(() => expect(dataContainerListener).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.anything(),
      fields: expect.anything()
    })));
    expect(sdkMethodRunQueryListener).toHaveBeenCalledTimes(1);
  });
  it('does not dispatch request if data query id is out of range', async () => {
    render(React.createElement(ContextWrapper, null, React.createElement(TestComponent, {
      queryId: -1
    })));
    await waitFor(() => {
      expect(dataContainerListener).toHaveBeenLastCalledWith(expect.objectContaining({
        data: [],
        isPending: false
      }));
    });

    expect(sdkMethodRunQueryListener).not.toHaveBeenCalled();
  });
  it('does not dispatch request if data already exists for given id', async () => {
    const queryResult = {
      data: [{
        count: 100
      }],
      fields: {
        dimensions: [],
        measures: [],
        pivots: []
      }
    };
    render(React.createElement(ContextWrapper, {
      initialState: {
        byId: {
          '123': queryResult
        },
        dashboardIdMap: {},
        modelExplore: {},
        slugIdMap: {
          '123': 123
        }
      }
    }, React.createElement(TestComponent, {
      queryId: 123
    })));
    await waitFor(() => expect(dataContainerListener).toHaveBeenLastCalledWith(_objectSpread(_objectSpread({}, queryResult), {}, {
      isOK: true,
      isPending: false
    })));

    expect(sdkMethodRunQueryListener).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=useQueryData.spec.js.map