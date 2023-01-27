

import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { ContextWrapper, sdkMethodQueryForSlugListener } from '../testUtils';
import { useQueryId } from './useQueryId';

const dataContainerListener = jest.fn();
const TestComponent = ({
  slug: _slug = 'qz123'
}) => {
  const response = useQueryId(_slug);
  dataContainerListener(response);
  return null;
};
afterEach(() => {
  jest.resetAllMocks();
});
describe('useQueryId', () => {
  it('fetches query id on mount', async () => {
    render(React.createElement(ContextWrapper, null, React.createElement(TestComponent, null)));
    await waitFor(() => {
      expect(sdkMethodQueryForSlugListener).toHaveBeenCalledTimes(1);
    });
    expect(dataContainerListener).toHaveBeenCalledWith(expect.objectContaining({
      queryId: 126
    }));
  });
  it('does not dispatch request if data already exists for given id', async () => {
    render(React.createElement(ContextWrapper, {
      initialState: {
        byId: {},
        dashboardIdMap: {},
        modelExplore: {},
        slugIdMap: {
          qz123: 456
        }
      }
    }, React.createElement(TestComponent, {
      slug: 'qz123'
    })));
    await waitFor(() => expect(dataContainerListener).toHaveBeenCalledWith({
      isOK: true,
      isPending: false,
      queryId: 456
    }));

    expect(sdkMethodQueryForSlugListener).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=useQueryId.spec.js.map