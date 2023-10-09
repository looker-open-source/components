let _ = t => t,
  _t,
  _t2,
  _t3;
const _excluded = ["children", "indicator", "indicatorPosition"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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