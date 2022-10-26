import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["collapse", "children"];
import React, { forwardRef } from 'react';
import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { OverflowShadow, useOverflow } from '../../../utils';
import { commonLayoutCSS } from '../../utils/common';
import { asideWidth } from './asideWidth';
const AsideLayout = forwardRef((_ref, forwardedRef) => {
  let {
    collapse,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [hasOverflow, ref] = useOverflow(forwardedRef);
  return collapse ? null : React.createElement(OverflowShadow, _extends({
    as: "aside",
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
AsideLayout.displayName = 'AsideLayout';
export const Aside = styled(AsideLayout).withConfig({
  shouldForwardProp: prop => prop === 'collapse' || shouldForwardProp(prop),
  displayName: "Aside",
  componentId: "sc-1t83syr-0"
}).attrs(({
  width: _width = 'sidebar'
}) => ({
  width: _width
}))(_t || (_t = _`
${0}

flex: 0 0 ${0};
max-width: ${0};
min-width: ${0};
overflow: auto;
width: 0;
${0}

${0}`), commonLayoutCSS, ({
  width
}) => width, ({
  width
}) => width, ({
  width
}) => width, ({
  scrollWithin
}) => scrollWithin && 'height: fit-content;', asideWidth);
//# sourceMappingURL=Aside.js.map