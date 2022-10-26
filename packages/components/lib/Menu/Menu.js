import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
const _excluded = ["children", "content", "id", "listRef"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { cloneElement, forwardRef } from 'react';
import { Popover, popoverPropKeys } from '../Popover';
import { useID } from '../utils';
import { MenuList } from './MenuList';

const partitionMenuProps = (props, popoverPropKeys) => {
  const allProps = _objectSpread({}, props);

  const popoverProps = {};
  popoverPropKeys.forEach(key => {
    if (props[key] !== undefined) {
      popoverProps[key] = props[key];
    }

    delete allProps[key];
  });
  const listProps = allProps;
  return [popoverProps, listProps];
};

export const Menu = forwardRef((_ref, ref) => {
  let {
    children,
    content,
    id: propsID,
    listRef
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const [popoverProps, listProps] = partitionMenuProps(restProps, popoverPropKeys);
  const id = useID(propsID);
  const list = content && React.createElement(MenuList, _extends({
    id: id
  }, listProps, {
    ref: listRef,
    "data-autofocus": "true"
  }), content);
  children = cloneElement(children, {
    'aria-controls': id
  });
  return React.createElement(Popover, _extends({
    content: list,
    ref: ref
  }, popoverProps), children);
});
//# sourceMappingURL=Menu.js.map