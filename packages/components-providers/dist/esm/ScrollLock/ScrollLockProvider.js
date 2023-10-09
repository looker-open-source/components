function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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