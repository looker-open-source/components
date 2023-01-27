

import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { ContextWrapper, sdkMethodDashboardListener } from '../testUtils';
import { useQueryIdFromDashboard } from './useQueryIdFromDashboard';

const dataContainerListener = jest.fn();
const TestComponent = ({
  dashboardId: _dashboardId = 1
}) => {
  const response = useQueryIdFromDashboard(_dashboardId);
  dataContainerListener(response);
  return null;
};
afterEach(() => {
  jest.clearAllMocks();
});
describe('useQueryIdFromDashboard', () => {
  it('fetches query ID on mount', async () => {
    render(React.createElement(ContextWrapper, null, React.createElement(TestComponent, null)));
    await waitFor(() => expect(dataContainerListener).toHaveBeenCalledWith(expect.objectContaining({
      queryId: 126
    })));
    expect(sdkMethodDashboardListener).toHaveBeenCalledTimes(1);
  });
  it('does not dispatch request if data already exists for given id', async () => {
    render(React.createElement(ContextWrapper, {
      initialState: {
        byId: {},
        dashboardIdMap: {
          456: 789
        },
        modelExplore: {},
        slugIdMap: {}
      }
    }, React.createElement(TestComponent, {
      dashboardId: 456
    })));
    await waitFor(() => expect(dataContainerListener).toHaveBeenCalledWith({
      isOK: true,
      isPending: false,
      queryId: 789
    }));

    expect(sdkMethodDashboardListener).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=useQueryIdFromDashboard.spec.js.map