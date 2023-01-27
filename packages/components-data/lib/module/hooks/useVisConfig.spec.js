

import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { ContextWrapper, sdkMethodQueryListener } from '../testUtils';
import { useVisConfig } from './useVisConfig';

const dataContainerListener = jest.fn();
const TestComponent = ({
  queryId: _queryId = 1
}) => {
  const response = useVisConfig(_queryId);
  dataContainerListener(response);
  return null;
};
beforeEach(() => {
  jest.resetAllMocks();
});
describe('useVisConfig', () => {
  it('fetches vis config on mount', async () => {
    render(React.createElement(ContextWrapper, null, React.createElement(TestComponent, null)));
    await waitFor(() => expect(sdkMethodQueryListener).toHaveBeenCalledTimes(1));
    expect(dataContainerListener).toHaveBeenLastCalledWith(expect.objectContaining({
      visConfig: expect.objectContaining({
        type: 'line'
      })
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
      visConfig: expect.objectContaining(defaultConfig)
    }));

    expect(sdkMethodQueryListener).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=useVisConfig.spec.js.map