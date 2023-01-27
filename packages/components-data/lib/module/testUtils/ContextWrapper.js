
import React from 'react';
import { SWRConfig } from 'swr';
import { ComponentsProvider } from '@looker/components';
import { SDKContext } from '../SDKContext';
import { DataState } from '../hooks';
import { mockSDKWithListeners } from '.';
export const ContextWrapper = ({
  children,
  initialState
}) => {
  return React.createElement(ComponentsProvider, null, React.createElement(SWRConfig, {
    value: {
      provider: () => new Map()
    }
  }, React.createElement(SDKContext.Provider, {
    value: mockSDKWithListeners
  }, React.createElement(DataState.Provider, {
    initialState: initialState
  }, children))));
};
//# sourceMappingURL=ContextWrapper.js.map