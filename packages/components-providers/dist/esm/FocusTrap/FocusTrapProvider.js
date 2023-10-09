function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { createContext } from 'react';
import { TrapStackProvider } from '../TrapStack';
import { activateFocusTrap } from './utils';
export const FocusTrapContext = createContext({});
FocusTrapContext.displayName = 'FocusTrapContext';
export const FocusTrapProvider = props => React.createElement(TrapStackProvider, _extends({
  activate: activateFocusTrap,
  context: FocusTrapContext
}, props));
//# sourceMappingURL=FocusTrapProvider.js.map