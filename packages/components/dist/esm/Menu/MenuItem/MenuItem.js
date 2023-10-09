const _excluded = ["className", "children", "detail", "onClick", "onKeyDown", "onMouseEnter", "onMouseLeave", "nestedMenu"],
  _excluded2 = ["onClick", "ref"];
let _ = t => t,
  _t,
  _t2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import styled, { useTheme } from 'styled-components';
import React, { forwardRef, useContext } from 'react';
import { shouldForwardProp, size } from '@looker/design-tokens';
import { ArrowRight } from '@styled-icons/material/ArrowRight';
import { DialogContext } from '../../Dialog';
import { ListItem, ListItemContext, listItemDimensions } from '../../ListItem';
import { useForkedRef, useID } from '../../utils';
import { NestedMenuContext } from '../NestedMenuProvider';
import { useNestedMenu } from '../useNestedMenu';
export const MenuItem = styled(forwardRef((_ref, forwardedRef) => {
  let {
      className,
      children,
      detail,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      nestedMenu
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const id = useID(props.id);
  const _useNestedMenu = useNestedMenu({
      id,
      nestedMenu,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave
    }),
    {
      popover,
      domProps: {
        onClick: nestedMenuOnClick,
        ref: nestedMenuRef
      }
    } = _useNestedMenu,
    nestedMenuProps = _objectWithoutProperties(_useNestedMenu.domProps, _excluded2);
  const ref = useForkedRef(nestedMenuRef, forwardedRef);
  const theme = useTheme();
  const {
    density
  } = useContext(ListItemContext);
  const {
    iconSize
  } = listItemDimensions(density || theme.defaults.density);
  if (detail && nestedMenu) {
    console.warn('The detail prop is not supported when nestedMenu is used.');
  }
  detail = nestedMenu ? React.createElement(NestedMenuIndicator, {
    size: iconSize
  }) : detail;
  const {
    closeModal
  } = useContext(DialogContext);
  const {
    closeParentMenu
  } = useContext(NestedMenuContext);
  const handleOnClick = event => {
    nestedMenuOnClick(event);
    if (!event.defaultPrevented) {
      closeModal === null || closeModal === void 0 ? void 0 : closeModal();
      closeParentMenu === null || closeParentMenu === void 0 ? void 0 : closeParentMenu();
    }
  };
  return React.createElement(React.Fragment, null, React.createElement(ListItem, _extends({
    className: className,
    detail: detail,
    onClick: handleOnClick,
    ref: ref,
    role: "menuitem"
  }, nestedMenuProps, props), children), popover);
})).withConfig({
  displayName: "MenuItem",
  componentId: "sc-1ux796b-0"
})(_t || (_t = _`
  /** Styling for items that have nested menus */
  [aria-expanded='true'] {
    background: ${0};
  }
`), ({
  theme: {
    colors
  }
}) => colors.ui1);
const NestedMenuIndicator = styled(ArrowRight).withConfig({
  shouldForwardProp,
  displayName: "MenuItem__NestedMenuIndicator",
  componentId: "sc-1ux796b-1"
})(_t2 || (_t2 = _`
  color: ${0};
  ${0}
`), ({
  theme
}) => theme.colors.text1, size);
//# sourceMappingURL=MenuItem.js.map