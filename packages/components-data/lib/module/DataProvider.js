

import React from 'react';
import { DataState } from './hooks';
import { SDKContext } from './SDKContext';
export const DataProvider = ({
  children,
  sdk
}) => {
  return React.createElement(SDKContext.Provider, {
    value: sdk
  }, React.createElement(DataState.Provider, null, children));
};
//# sourceMappingURL=DataProvider.js.map