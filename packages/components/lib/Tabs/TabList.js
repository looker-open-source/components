import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { Children, cloneElement, forwardRef } from 'react';
import styled from 'styled-components';
import { useArrowKeyNav, useTranslation } from '../utils';
import { tabListCSS } from '../Tabs2/TabList2';
export const TabList = styled(forwardRef(({
  children,
  selectedIndex,
  onSelectTab,
  className
}, ref) => {
  const {
    t
  } = useTranslation('TabList');
  const clonedChildren = Children.map(children, (child, index) => {
    return cloneElement(child, {
      index,
      onSelect: () => onSelectTab && onSelectTab(index),
      selected: index === selectedIndex
    });
  });
  const navProps = useArrowKeyNav({
    axis: 'horizontal',
    ref
  });
  return React.createElement("div", _extends({
    "aria-label": t('Tabs'),
    className: className,
    role: "tablist"
  }, navProps), clonedChildren);
})).attrs(({
  fontSize: _fontSize = 'small'
}) => ({
  fontSize: _fontSize
})).withConfig({
  displayName: "TabList",
  componentId: "sc-1xnjj79-0"
})(_t || (_t = _`
  ${0}
`), tabListCSS);
//# sourceMappingURL=TabList.js.map