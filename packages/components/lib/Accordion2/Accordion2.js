let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { Accordion2Disclosure } from './Accordion2Disclosure';
import { accordionDimensions } from './accordionDimensions';
import { useAccordion2 } from './useAccordion2';

const Accordion2Internal = props => {
  const {
    content,
    domProps,
    disclosureProps
  } = useAccordion2(props);
  return React.createElement("div", domProps, React.createElement(Accordion2Disclosure, disclosureProps), content);
};

export const Accordion2 = styled(Accordion2Internal).withConfig({
  displayName: "Accordion2",
  componentId: "sc-526vzy-0"
})(_t || (_t = _`
  font-size: ${0};
  width: 100%;
`), ({
  theme,
  density
}) => theme.fontSizes[accordionDimensions(density || theme.defaults.density).fontSize]);
//# sourceMappingURL=Accordion2.js.map