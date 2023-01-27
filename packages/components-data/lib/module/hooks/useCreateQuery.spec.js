

import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { ContextWrapper, sdkMethodCreateQueryListener } from '../testUtils';
import { DataState } from './useDataState';
import { useCreateQuery } from './useCreateQuery';

const dataContainerListener = jest.fn();
const dataStateListener = jest.fn();
const TestComponent = ({
  newQuery
}) => {
  const response = useCreateQuery(newQuery);
  const {
    getById
  } = DataState.useContainer();
  const mockMetadata = getById((response === null || response === void 0 ? void 0 : response.queryId) || 0, 'metadata');
  dataContainerListener(response);
  dataStateListener(mockMetadata);
  return null;
};
afterEach(() => {
  jest.resetAllMocks();
});
describe('useCreateQuery', () => {
  it('does not dispatch request if no arguments are passed', async () => {
    render(React.createElement(ContextWrapper, {
      initialState: {
        byId: {},
        dashboardIdMap: {},
        modelExplore: {},
        slugIdMap: {}
      }
    }, React.createElement(TestComponent, null)));
    await waitFor(() => expect(dataContainerListener).toHaveBeenLastCalledWith({
      isOK: true,
      isPending: false,
      queryId: undefined
    }));

    expect(sdkMethodCreateQueryListener).not.toHaveBeenCalled();
  });
  it('creates new query object when `newQuery` argument is passed in', async () => {
    render(React.createElement(ContextWrapper, {
      initialState: {
        byId: {},
        dashboardIdMap: {},
        modelExplore: {},
        slugIdMap: {}
      }
    }, React.createElement(TestComponent, {
      newQuery: {
        model: 'thelook'
      }
    })));
    await waitFor(() => expect(dataContainerListener).toHaveBeenLastCalledWith({
      isOK: true,
      isPending: false,
      queryId: 126
    }));
    expect(sdkMethodCreateQueryListener).toHaveBeenCalledTimes(1);

    expect(dataStateListener).toHaveBeenLastCalledWith(expect.objectContaining({
      model: 'thelook',
      view: 'orders',
      vis_config: expect.anything()
    }));
  });
});
//# sourceMappingURL=useCreateQuery.spec.js.map