import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { ReplaceText } from '@looker/components';

export const searchTree = (trees, search, parentIsOpen) => trees.map(tree => {
  const isOpen = !tree.isNotHighlightable && containsString(tree, search) || !!parentIsOpen;
  const match = tree.isNotHighlightable ? undefined : search;
  if (tree.children) {
    const children = searchTree(tree.children, search, isOpen);
    const childContains = children.some(child => child.isOpen);
    return _objectSpread(_objectSpread({}, tree), {}, {
      isOpen: isOpen || childContains,
      hide: !isOpen && !childContains && search !== '',
      label: React.createElement(ReplaceText, {
        match: match
      }, tree.value),
      children
    });
  } else {
    return _objectSpread(_objectSpread({}, tree), {}, {
      label: React.createElement(ReplaceText, {
        match: match
      }, tree.value),
      isOpen,
      hide: !isOpen && search !== ''
    });
  }
});
export const containsString = ({
  value
}, str2) => !!(str2 && value.toLowerCase().includes(str2.toLowerCase()));

export const hasAnyVisibleEntry = tree => (tree || []).some(entry => !entry.hide);
//# sourceMappingURL=search_tree.js.map