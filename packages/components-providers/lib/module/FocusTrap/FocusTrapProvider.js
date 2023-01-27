import _extends from "@babel/runtime/helpers/extends";

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