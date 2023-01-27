import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
let _ = t => t,
  _t;
const _excluded = ["children", "className", "selectedIndex"],
  _excluded2 = ["onSelectTab"];

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