import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import styled from 'styled-components';
import { space } from '@looker/design-tokens';
import { DividerBase } from './Divider';
export const DividerVertical = styled(DividerBase).attrs(props => {
  if (props.height && props.stretch) {
    console.warn('When using DividerVertical, the props height and stretch are incompatible. The stretch value will be discarded');
  }

  const {
    height = '1rem',
    mx = 'xsmall',
    my = 'xsmall'
  } = props;
  return _objectSpread(_objectSpread({}, props), {}, {
    'aria-orientation': 'vertical',
    height,
    mx,
    my
  });
}).withConfig({
  displayName: "DividerVertical",
  componentId: "sc-10179s7-0"
})(_t || (_t = _`
  ${0}
  display: inline-block;
  width: ${0};
  ${0}
`), space, ({
  size
}) => size, ({
  height,
  stretch
}) => stretch ? `align-self: stretch; height: inherit;` : `height: ${height};`);
//# sourceMappingURL=DividerVertical.js.map