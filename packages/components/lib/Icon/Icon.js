import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["title", "icon"];
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
IconLayout.displayName = 'IconLayout';
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