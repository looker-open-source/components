import _extends from "@babel/runtime/helpers/extends";

import React, { createContext } from 'react';
import { TrapStackProvider } from '../TrapStack';
import { activateScrollLock } from './utils';
export const ScrollLockContext = createContext({});
ScrollLockContext.displayName = 'ScrollLockContext';
export const ScrollLockProvider = props => React.createElement(TrapStackProvider, _extends({
  activate: activateScrollLock,
  context: ScrollLockContext
}, props));
//# sourceMappingURL=ScrollLockProvider.js.map