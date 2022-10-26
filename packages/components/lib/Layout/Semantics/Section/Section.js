import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["main", "children"];
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { commonLayoutCSS } from '../../utils/common';
import { OverflowShadow, useOverflow } from '../../../utils';
const SectionLayout = forwardRef((_ref, forwardedRef) => {
  let {
    main,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [hasOverflow, ref] = useOverflow(forwardedRef);
  return React.createElement(OverflowShadow, _extends({
    as: main ? 'main' : 'section',
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
SectionLayout.displayName = 'SectionLayout';
export const Section = styled(SectionLayout).withConfig({
  displayName: "Section",
  componentId: "sc-1ud6x2v-0"
})(_t || (_t = _`
  ${0}
  flex: 1 0 auto;
  overflow: auto;
  ${0}
`), commonLayoutCSS, ({
  scrollWithin
}) => scrollWithin && 'height: fit-content;');
//# sourceMappingURL=Section.js.map