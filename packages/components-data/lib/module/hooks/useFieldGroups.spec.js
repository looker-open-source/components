

import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { ContextWrapper, sdkMethodLookmlModelExploreListener } from '../testUtils';
import { useFieldGroups } from './useFieldGroups';

const dataContainerListener = jest.fn();
const TestComponent = ({
  id: _id = 1
}) => {
  const response = useFieldGroups(_id);
  dataContainerListener(response);
  return null;
};
afterEach(() => {
  jest.resetAllMocks();
});
describe('useFieldGroups', () => {
  it('fetches query id on mount', async () => {
    render(React.createElement(ContextWrapper, null, React.createElement(TestComponent, null)));
    await waitFor(() => expect(sdkMethodLookmlModelExploreListener).toHaveBeenCalledTimes(1));
    expect(dataContainerListener).toHaveBeenCalledWith(expect.objectContaining({
      fieldGroups: {}
    }));
  });
  it('does not dispatch request if data already exists for given id', async () => {
    const dimensionMetadata = {
      label: 'Orders Created Date',
      view: 'orders'
    };
    render(React.createElement(ContextWrapper, {
      initialState: {
        byId: {},
        dashboardIdMap: {},
        modelExplore: {
          thelook: {
            orders: {
              fields: {
                dimensions: [dimensionMetadata]
              }
            }
          }
        },
        slugIdMap: {}
      }
    }, React.createElement(TestComponent, {
      id: 456
    })));
    await waitFor(() => expect(dataContainerListener).toHaveBeenCalledWith({
      fieldGroups: {
        orders: [{
          label: 'Orders Created Date',
          view: 'orders'
        }]
      },
      isOK: true,
      isPending: false
    }));

    expect(sdkMethodLookmlModelExploreListener).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=useFieldGroups.spec.js.map