let _ = t => t,
  _t;
const _excluded = ["children", "className", "selectedIndex"],
  _excluded2 = ["onSelectTab"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { Children, cloneElement } from 'react';
import styled from 'styled-components';
import { flexbox, layout, space, reset } from '@looker/design-tokens';
const Layout = _ref => {
  let {
      children,
      className,
      selectedIndex
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
      onSelectTab: _onSelectTab
    } = props,
    tabPanelsLayoutProps = _objectWithoutProperties(props, _excluded2);
  const clonedChildren = Children.map(children, (child, index) => {
    return cloneElement(child, {
      selected: index === selectedIndex
    });
  });
  return React.createElement("div", _extends({
    "aria-labelledby": `tab-${selectedIndex}`,
    className: className,
    id: `panel-${selectedIndex}`,
    role: "tabpanel"
  }, tabPanelsLayoutProps), clonedChildren);
};
export const TabPanels = styled(Layout).attrs(({
  pt: _pt = 'large'
}) => ({
  pt: _pt
})).withConfig({
  displayName: "TabPanels",
  componentId: "sc-15ef4fm-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  ${0}
`), reset, flexbox, layout, space);
//# sourceMappingURL=TabPanels.js.map