let _ = t => t,
  _t,
  _t2;
const _excluded = ["children", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { pickStyledProps } from '@looker/design-tokens';
import { Heading } from '../Text/Heading';
import { ListItemContext, listItemDimensions } from '../ListItem';
import { useElementVisibility } from './MenuHeading.hooks';
const MenuHeadingInternal = _ref => {
  let {
      children,
      className
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const theme = useTheme();
  const [isLabelShimVisible, ref] = useElementVisibility();
  const {
    density
  } = useContext(ListItemContext);
  const {
    px
  } = listItemDimensions(density || theme.defaults.density);
  return React.createElement(MenuHeadingWrapper, {
    className: className,
    renderBoxShadow: !isLabelShimVisible
  }, React.createElement("div", {
    ref: ref,
    style: {
      height: '0'
    }
  }), React.createElement(Heading, _extends({
    as: "h2",
    color: "text5",
    fontFamily: "brand",
    fontSize: "xsmall",
    fontWeight: "medium",
    lineHeight: "xsmall",
    px: px,
    py: "xsmall"
  }, pickStyledProps(restProps)), children));
};
export const MenuHeading = styled(MenuHeadingInternal).withConfig({
  displayName: "MenuHeading",
  componentId: "sc-szhc1r-0"
})(_t || (_t = _``));
const MenuHeadingWrapper = styled.li.withConfig({
  displayName: "MenuHeading__MenuHeadingWrapper",
  componentId: "sc-szhc1r-1"
})(_t2 || (_t2 = _`
  background: ${0};
  box-shadow: ${0};
  position: sticky;
  top: -1px;
`), ({
  theme: {
    colors
  }
}) => colors.background, ({
  renderBoxShadow,
  theme: {
    colors
  }
}) => renderBoxShadow ? `0 4px 8px -2px ${colors.ui2}` : 'none');
//# sourceMappingURL=MenuHeading.js.map