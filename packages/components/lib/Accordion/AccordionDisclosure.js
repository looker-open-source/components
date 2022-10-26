import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { typography } from '@looker/design-tokens';
import { simpleLayoutCSS } from '../Layout/utils/simple';
import { Accordion2Disclosure } from '../Accordion2/Accordion2Disclosure';

const AccordionDisclosureInternal = props => React.createElement(Accordion2Disclosure, _extends({
  focusVisible: false,
  indicator: null
}, props));

export const AccordionDisclosure = styled(AccordionDisclosureInternal).attrs(({
  px: _px = 'none',
  py: _py = 'xsmall'
}) => ({
  px: _px,
  py: _py
})).withConfig({
  displayName: "AccordionDisclosure",
  componentId: "sc-8407zi-0"
})(_t || (_t = _`
  ${0}
  ${0}
`), typography, simpleLayoutCSS);
//# sourceMappingURL=AccordionDisclosure.js.map