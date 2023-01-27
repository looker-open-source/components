

import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { mockSdkConfigResponse } from '@looker/visualizations-adapters';
import { ContextWrapper, sdkMethodQueryListener } from '../testUtils';
import { useQueryMetadata } from './useQueryMetadata';

const dataContainerListener = jest.fn();
const TestComponent = ({
  queryId: _queryId = 1
}) => {
  const response = useQueryMetadata(_queryId);
  dataContainerListener(response);
  return null;
};
afterEach(() => {
  jest.resetAllMocks();
});
describe('useQueryMetadata', () => {
  it('fetches metadata on mount', async () => {
    render(React.createElement(ContextWrapper, null, React.createElement(TestComponent, null)));
    await waitFor(() => expect(sdkMethodQueryListener).toHaveBeenCalledTimes(1));
    expect(dataContainerListener).toHaveBeenLastCalledWith(expect.objectContaining({
      metadata: {
        model: 'thelook',
        view: 'orders',
        vis_config: expect.objectContaining(mockSdkConfigResponse)
      }
    }));
  });
  it('does not dispatch request if data already exists for given id', async () => {
    const defaultConfig = {
      type: 'sparkline'
    };
    render(React.createElement(ContextWrapper, {
      initialState: {
        byId: {
          456: {
            metadata: {
              model: 'thelook',
              view: 'orders',
              vis_config: defaultConfig
            }
          }
        },
        dashboardIdMap: {},
        modelExplore: {},
        slugIdMap: {}
      }
    }, React.createElement(TestComponent, {
      queryId: 456
    })));
    await waitFor(() => expect(dataContainerListener).toHaveBeenCalledWith({
      isOK: true,
      isPending: false,
      metadata: {
        model: 'thelook',
        view: 'orders',
        vis_config: defaultConfig
      }
    }));
    expect(sdkMethodQueryListener).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=useQueryMetadata.spec.js.map