import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
const _excluded = ["children"];

import React, { Children, Fragment } from 'react';
import escapeRegExp from 'lodash/escapeRegExp';
import { Span } from '../Text';
const DefaultReplace = props => React.createElement(Span, _extends({
  fontWeight: "semiBold",
  textDecoration: "underline"
}, props));

const ReplaceString = ({
  children,
  match,
  replace: _replace = DefaultReplace
}) => {
  const matchRegExp = new RegExp(`(${escapeRegExp(match)})`, 'gi');
  const stringArr = children.split(matchRegExp);

  return React.createElement(React.Fragment, null, stringArr.map((stringItem, index) => React.createElement(Fragment, {
    key: index
  }, index % 2 === 1 ? _replace({
    children: stringItem
  }) : stringItem || null)));
};
export const ReplaceText = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (!rest.match) return React.createElement(React.Fragment, null, children);
  return React.createElement(React.Fragment, null, Children.map(children, child => typeof child === 'string' ? React.createElement(ReplaceString, rest, child) : child));
};
//# sourceMappingURL=ReplaceText.js.map