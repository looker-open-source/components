import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { createContext, useCallback, useContext } from 'react';
import { useDelayedState } from '../utils';
const nestedMenuContext = {
  change: () => undefined,
  delayChange: () => undefined,
  value: '',
  waitChange: () => undefined
};
export const NestedMenuContext = createContext(nestedMenuContext);
export const NestedMenuProvider = ({
  children,
  closeParentMenu
}) => {
  const delayedStateProps = useDelayedState('');
  const {
    closeParentMenu: closeGrandparentMenu
  } = useContext(NestedMenuContext);
  const wrappedCloseParentMenu = useCallback(() => {
    closeGrandparentMenu === null || closeGrandparentMenu === void 0 ? void 0 : closeGrandparentMenu();
    closeParentMenu === null || closeParentMenu === void 0 ? void 0 : closeParentMenu();
  }, [closeGrandparentMenu, closeParentMenu]);
  return React.createElement(NestedMenuContext.Provider, {
    value: _objectSpread(_objectSpread({}, delayedStateProps), {}, {
      closeParentMenu: wrappedCloseParentMenu
    })
  }, children);
};
//# sourceMappingURL=NestedMenuProvider.js.map