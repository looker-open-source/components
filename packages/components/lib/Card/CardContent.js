import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import styled from 'styled-components';
import { flexbox, paddingDefaultsHelper, shouldForwardProp } from '@looker/design-tokens';
import { commonLayoutCSS } from '../Layout/utils/common';
export const CardContent = styled.div.withConfig({
  shouldForwardProp,
  displayName: "CardContent",
  componentId: "sc-21xesl-0"
}).attrs(p => _objectSpread({}, paddingDefaultsHelper(p, {
  p: 'u4'
})))(_t || (_t = _`
  ${0}
  ${0}
`), commonLayoutCSS, flexbox);
//# sourceMappingURL=CardContent.js.map