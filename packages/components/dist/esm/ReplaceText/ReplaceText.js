const _excluded = ["children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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