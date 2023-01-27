
import React, { useEffect } from 'react';
import { render, waitFor } from '@testing-library/react';
import { AppContext } from '../AppContext';
import { useLocalStorage } from './useLocalStorage';
const mockLocalStorage = {
  'TEST-DATA-STORE': 'true'
};
const localStorageGetItem = jest.fn().mockImplementation(key => Promise.resolve(mockLocalStorage[key]));
const localStorageSetItem = jest.fn().mockImplementation((key, val) => {
  mockLocalStorage[key] = val;
});
afterEach(() => {
  jest.fn();
});
const MockContextWrapper = ({
  children
}) => {
  return React.createElement(AppContext.Provider, {
    value: {
      localStorageGetItem,
      localStorageSetItem
    }
  }, children);
};
describe('useLocalStorage', () => {
  it('writes to localstorage', () => {
    const valStateListener = jest.fn();
    const localStorageListener = jest.fn();
    const TestComponent = ({
      value
    }) => {
      const [valState, setValState] = useLocalStorage('VALUE-PROP', value);
      valStateListener(valState);
      localStorageListener(mockLocalStorage);
      useEffect(() => {
        setValState(value);
      }, [value, setValState]);
      return null;
    };

    const {
      rerender
    } = render(React.createElement(MockContextWrapper, null, React.createElement(TestComponent, {
      value: "hello world"
    })));
    expect(valStateListener).toHaveBeenLastCalledWith('hello world');
    expect(localStorageListener).toHaveBeenLastCalledWith(expect.objectContaining({
      'VALUE-PROP': '"hello world"'
    }));

    rerender(React.createElement(MockContextWrapper, null, React.createElement(TestComponent, {
      value: "goodbye world"
    })));
    expect(valStateListener).toHaveBeenLastCalledWith('goodbye world');
    expect(localStorageListener).toHaveBeenLastCalledWith(expect.objectContaining({
      'VALUE-PROP': '"goodbye world"'
    }));
  });

  it('reads from localstorage', async () => {
    const valStateListener = jest.fn();
    const TestComponent = () => {
      const [valState] = useLocalStorage('TEST-DATA-STORE');
      valStateListener(valState);
      return null;
    };
    render(React.createElement(MockContextWrapper, null, React.createElement(TestComponent, null)));
    await waitFor(() => {
      expect(valStateListener).toHaveBeenLastCalledWith(true);
    });
  });
});
//# sourceMappingURL=useLocalStorage.spec.js.map