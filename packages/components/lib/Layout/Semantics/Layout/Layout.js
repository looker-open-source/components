import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];

let _ = t => t,
    _t,
    _t2;

import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { commonLayoutCSS } from '../../utils/common';
import { OverflowShadow, useOverflow } from '../../../utils';
import { Section } from '../Section';
const hasAsideCSS = css(_t || (_t = _`
  flex-direction: row;
  & > ${0} {
    width: 0;
  }
`), Section);
const LayoutLayout = forwardRef((_ref, forwardedRef) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [hasOverflow, ref] = useOverflow(forwardedRef);
  return React.createElement(OverflowShadow, _extends({
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
LayoutLayout.displayName = 'LayoutLayout';
export const Layout = styled(LayoutLayout).withConfig({
  displayName: "Layout",
  componentId: "sc-vtli68-0"
})(_t2 || (_t2 = _`
  ${0}
  display: flex;
  flex: 1 1 auto;
  overflow: ${0};
  ${0}
`), commonLayoutCSS, ({
  fixed
}) => fixed ? 'hidden' : 'auto', ({
  hasAside
}) => hasAside ? hasAsideCSS : 'flex-direction: column;');
//# sourceMappingURL=Layout.js.map