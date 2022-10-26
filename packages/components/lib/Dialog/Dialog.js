import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "content"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { useDialog } from './useDialog';
import { DialogRender } from './DialogRender';
export const Dialog = _ref => {
  let {
    children,
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (!content && children) {
    content = children;
    children = undefined;
  }

  const dialogProps = useDialog(_objectSpread({
    content
  }, props));

  if (!content && !children) {
    console.error('Dialog cannot be used without specifying content');
    return null;
  }

  return React.createElement(DialogRender, dialogProps, children);
};
//# sourceMappingURL=Dialog.js.map