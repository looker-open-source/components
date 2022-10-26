import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["children", "color", "density", "disabled", "disableKeyboardNav", "height", "iconGutter", "onBlur", "onFocus", "onKeyDown", "role", "windowing"];
import React, { Children, forwardRef, isValidElement, useMemo } from 'react';
import { fontFamily, height, shouldForwardProp, width } from '@looker/design-tokens';
import styled, { useTheme } from 'styled-components';
import { useArrowKeyNav, useWindow } from '../utils';
import { ListItemContext, listItemDimensions } from '../ListItem';
import { getNextItemFocus } from './utils';

const getListItemHeight = (child, height) => {
  if (isValidElement(child) && child.props.description) {
    return height + 16;
  }

  return height;
};

export const ListInternal = forwardRef((_ref, forwardedRef) => {
  let {
    children,
    color,
    density,
    disabled,
    disableKeyboardNav,
    height,
    iconGutter = false,
    onBlur,
    onFocus,
    onKeyDown,
    role,
    windowing
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const childArray = useMemo(() => Children.toArray(children), [children]);
  const theme = useTheme();
  const itemDimensions = listItemDimensions(density || theme.defaults.density);

  if (windowing === undefined) {
    windowing = childArray.length > 100;
  }

  if (height === undefined && windowing) {
    height = '100%';
  }

  const {
    after,
    before,
    end,
    start,
    ref
  } = useWindow({
    enabled: windowing,
    itemCount: childArray.length,
    itemHeight: childArray[0] ? getListItemHeight(childArray[0], itemDimensions.height) : 0,
    ref: forwardedRef,
    spacerTag: 'li'
  });
  const content = windowing ? React.createElement(React.Fragment, null, before, childArray.slice(start, end + 1), after) : childArray;
  const navProps = useArrowKeyNav({
    axis: 'both',
    disabled: disableKeyboardNav,
    getNextFocus: getNextItemFocus,
    onBlur,
    onFocus,
    onKeyDown,
    ref
  });
  const context = {
    color,
    density,
    iconGutter
  };
  return React.createElement(ListItemContext.Provider, {
    value: context
  }, React.createElement(ListStyle, _extends({
    role: role || 'list',
    height: height,
    windowing: windowing
  }, props, navProps), content));
});
const ListStyle = styled.ul.withConfig({
  shouldForwardProp,
  displayName: "List__ListStyle",
  componentId: "sc-q1s69i-0"
}).attrs(({
  fontFamily: _fontFamily = 'inherit'
}) => ({
  fontFamily: _fontFamily
}))(_t || (_t = _`
  ${0}
  ${0}
  ${0}

  list-style: none;
  margin: 0;
  ${0}
  padding: 0;
`), fontFamily, height, width, ({
  windowing
}) => windowing && 'overflow: auto;');
export const List = styled(ListInternal).withConfig({
  displayName: "List",
  componentId: "sc-q1s69i-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=List.js.map