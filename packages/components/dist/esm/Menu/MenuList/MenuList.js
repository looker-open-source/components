let _ = t => t,
  _t;
const _excluded = ["children", "closeParentMenu"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { List } from '../../List';
import { listPadding } from '../../List/utils';
import { NestedMenuProvider } from '../NestedMenuProvider';
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
  componentId: "sc-qdtl3f-0"
})(_t || (_t = _`
  min-width: 12rem;

  ${0}
`), listPadding);
//# sourceMappingURL=MenuList.js.map