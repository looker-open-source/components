import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3;

const _excluded = ["children", "indicator", "indicatorPosition"];
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { shouldForwardProp } from '@looker/design-tokens';
import { focusVisibleCSSWrapper } from '../utils';
import { AccordionLabel } from './AccordionLabel';
const Accordion2DisclosureInternal = forwardRef((_ref, ref) => {
  let {
    children,
    indicator,
    indicatorPosition
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("div", _extends({
    ref: ref
  }, props), indicatorPosition === 'left' && indicator, React.createElement(AccordionLabel, null, children), indicatorPosition !== 'left' && indicator);
});
Accordion2DisclosureInternal.displayName = 'Accordion2DisclosureInternal';
const labelTypographyDefaults = css(_t || (_t = _`
  font-weight: ${0};
  text-align: left;
`), ({
  theme
}) => theme.fontWeights.semiBold);
export const Accordion2Disclosure = styled(Accordion2DisclosureInternal).withConfig({
  shouldForwardProp: prop => ['indicator', 'indicatorPosition'].includes(prop) ? true : shouldForwardProp(prop),
  displayName: "Accordion2Disclosure",
  componentId: "sc-n100ke-0"
})(_t2 || (_t2 = _`
  align-items: center;
  color: ${0};
  cursor: pointer;
  display: flex;
  outline: none;
  position: relative;
  width: 100%;

  ${0}

  &[disabled] {
    color: ${0};
    cursor: not-allowed;
  }

  ${0}
`), ({
  theme
}) => theme.colors.text5, labelTypographyDefaults, ({
  theme
}) => theme.colors.text1, focusVisibleCSSWrapper(({
  theme
}) => css(_t3 || (_t3 = _`
      box-shadow: inset 0 0 0 2px ${0};
    `), theme.colors.keyFocus)));
//# sourceMappingURL=Accordion2Disclosure.js.map