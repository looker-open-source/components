import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "className", "disabled", "hovered", "ripple", "selected", "style"],
      _excluded2 = ["callbacks"];

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import pick from 'lodash/pick';
import React from 'react';
import styled from 'styled-components';
import { rippleHandlerKeys, rippleStyle, useBoundedRipple, useRippleHandlers } from '../Ripple';
import { generateIndent } from '../Tree/utils';
import { listItemBackgroundColor } from '../ListItem/utils';
export const NavTreeDisclosure = styled(_ref => {
  let {
    children,
    className,
    disabled,
    hovered,
    ripple,
    selected,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const _useBoundedRipple = useBoundedRipple({
    className,
    color: selected ? 'key' : 'neutral',
    style
  }),
        {
    callbacks
  } = _useBoundedRipple,
        ripplePropsRest = _objectWithoutProperties(_useBoundedRipple, _excluded2);

  const rippleHandlers = useRippleHandlers(callbacks, pick(props, rippleHandlerKeys), disabled);

  const rippleProps = _objectSpread(_objectSpread({}, ripplePropsRest), rippleHandlers);

  return React.createElement("li", _extends({}, props, rippleProps), children);
}).withConfig({
  displayName: "NavTreeDisclosure",
  componentId: "sc-iyovyt-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}

  color: ${0};
  display: flex;
`), generateIndent, listItemBackgroundColor, rippleStyle, ({
  theme
}) => theme.colors.text5);
//# sourceMappingURL=NavTreeDisclosure.js.map