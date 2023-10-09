let _ = t => t,
  _t;
const _excluded = ["title", "icon"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { color, omitStyledProps } from '@looker/design-tokens';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { simpleLayoutCSS } from '../Layout/utils/simple';
const IconLayout = forwardRef((_ref, ref) => {
  let {
      title,
      icon
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement("div", _extends({
    "aria-hidden": title === undefined && true,
    title: title,
    ref: ref,
    "aria-label": title,
    role: "img"
  }, omitStyledProps(props)), icon);
});
export const Icon = styled(IconLayout).attrs(({
  size: _size = 'medium'
}) => ({
  size: _size
})).withConfig({
  displayName: "Icon",
  componentId: "sc-7y0t4i-0"
})(_t || (_t = _`
  ${0}
  ${0}
    flex-shrink: 0;
  justify-content: center;

  svg {
    height: 100%;
    /**
    * @TODO vertical-align is a compatibility fix and should probably be removed once
    * icon refactor is complete and accepted
    **/
    vertical-align: initial;
    width: 100%;
  }
`), simpleLayoutCSS, color);
//# sourceMappingURL=Icon.js.map