import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { ExtensionContext } from '@looker/extension-sdk-react';
import { DataProvider } from '@looker/components-data';
import { mockSDK } from '@looker/visualizations-adapters';
import { AppContext } from '../AppContext';
import { QueryInput } from './';
const handleInputChange = jest.fn();
const handleSetFetchBy = jest.fn();
const mockLocalStorage = {
  visComponentInputType: '"query"',
  visComponentQueryIdentifier: '"abc123"',
  visComponentDashboardId: '123'
};
const localStorageGetItem = jest.fn().mockImplementation(key => Promise.resolve(mockLocalStorage[key]));
const localStorageSetItem = jest.fn().mockImplementation((key, val) => {
  mockLocalStorage[key] = val;
});
afterEach(() => {
  jest.clearAllMocks();
});

const MockContextWrapper = ({
  children
}) => {
  return React.createElement(ExtensionContext.Provider, {
    value: {
      extensionSDK: {
        openBrowserWindow: jest.fn()
      },
      core40SDK: mockSDK
    }
  }, React.createElement(AppContext.Provider, {
    value: {
      localStorageGetItem,
      localStorageSetItem
    }
  }, React.createElement(DataProvider, {
    sdk: mockSDK
  }, children)));
};

describe('QueryInput', () => {
  it('allows dashboard id input', async () => {
    renderWithTheme(React.createElement(MockContextWrapper, null, React.createElement(QueryInput, {
      onChange: handleInputChange,
      setFetchBy: handleSetFetchBy,
      fetchBy: "query",
      dashboardId: 5,
      queryId: "abc123"
    })));
    fireEvent.click(screen.getByText('Dashboard (Numeric ID)'));
    await waitFor(() => {
      expect(handleInputChange).toHaveBeenLastCalledWith({
        type: 'dashboard',
        value: 5
      });
    });
  });
  it('allows query id input', async () => {
    renderWithTheme(React.createElement(MockContextWrapper, null, React.createElement(QueryInput, {
      onChange: handleInputChange,
      setFetchBy: handleSetFetchBy,
      fetchBy: "dashboard",
      dashboardId: 5,
      queryId: "abc123"
    })));
    fireEvent.click(screen.getByText('Query (Numeric ID or Slug)'));
    await waitFor(() => {
      expect(handleInputChange).toHaveBeenLastCalledWith({
        type: 'query',
        value: 'abc123'
      });
    });
  });
  it('restores dashboard and query id from localstorage on load', async () => {
    renderWithTheme(React.createElement(MockContextWrapper, null, React.createElement(QueryInput, {
      onChange: handleInputChange,
      dashboardId: 5,
      queryId: "abc123",
      setFetchBy: handleSetFetchBy,
      fetchBy: "query"
    })));
    await waitFor(() => {
      expect(screen.getByDisplayValue(JSON.parse(mockLocalStorage.visComponentQueryIdentifier))).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByDisplayValue(JSON.parse(mockLocalStorage.visComponentDashboardId))).toBeInTheDocument();
    });
  });
  it('updates localstorage when you input dashboard or query id', async () => {
    renderWithTheme(React.createElement(MockContextWrapper, null, React.createElement(QueryInput, {
      onChange: handleInputChange,
      dashboardId: 5,
      queryId: "abc123",
      setFetchBy: handleSetFetchBy,
      fetchBy: "query"
    })));
    const queryIdInput = screen.getByPlaceholderText('CmBbGK2\u2026');
    fireEvent.change(queryIdInput, {
      target: {
        value: 'new-query-id'
      }
    });
    await waitFor(() => {
      expect(localStorageSetItem).toHaveBeenLastCalledWith('visComponentQueryIdentifier', '"new-query-id"');
    });
  });
});
//# sourceMappingURL=QueryInput.spec.js.map