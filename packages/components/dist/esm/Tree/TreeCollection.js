let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import { getNextItemFocus, getItems } from '../List/utils';
import { useArrowKeyNav, useForkedRef } from '../utils';
const TreeCollectionInternal = forwardRef((props, forwardedRef) => {
  const internalRef = useRef(null);
  const handleKeyDown = event => {
    const treeItems = getItems(internalRef.current);
    if (event.key === 'Home') {
      const firstItem = treeItems[0];
      firstItem && firstItem.focus();
    } else if (event.key === 'End') {
      const lastItem = treeItems[treeItems.length - 1];
      lastItem && lastItem.focus();
    }
  };
  const navProps = useArrowKeyNav({
    axis: 'both',
    getNextFocus: getNextItemFocus,
    onKeyDown: handleKeyDown,
    ref: useForkedRef(internalRef, forwardedRef)
  });
  return React.createElement("ul", _extends({
    role: "tree"
  }, props, navProps));
});
export const TreeCollection = styled(TreeCollectionInternal).withConfig({
  displayName: "TreeCollection",
  componentId: "sc-l1fxxy-0"
})(_t || (_t = _`
  list-style-type: none;
  margin: 0;
  padding: 0;
`));
//# sourceMappingURL=TreeCollection.js.map