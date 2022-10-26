import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "closeParentMenu"];
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { List } from '../List';
import { listPadding } from '../List/utils';
import { NestedMenuProvider } from './NestedMenuProvider';
export const MenuListInternal = forwardRef((_ref, forwardedRef) => {
  let {
    children,
    closeParentMenu
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(NestedMenuProvider, {
    closeParentMenu: closeParentMenu
  }, React.createElement(List, _extends({
    role: "menu",
    ref: forwardedRef
  }, props), children));
});
MenuListInternal.displayName = 'MenuListInternal';
export const MenuList = styled(MenuListInternal).withConfig({
  displayName: "MenuList",
  componentId: "sc-1m0jggd-0"
})(_t || (_t = _`
  min-width: 12rem;

  ${0}
`), listPadding);
//# sourceMappingURL=MenuList.js.map