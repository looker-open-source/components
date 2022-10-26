let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { SpaceVertical } from '../../../Layout';
import { Paragraph } from '../../../Text';
import { ValidationMessage } from '../../ValidationMessage';
export const HelperText = styled(({
  className,
  description,
  id,
  validationMessage
}) => {
  return React.createElement(SpaceVertical, {
    pt: description || validationMessage ? 'u2' : 'none',
    gap: "u1",
    className: className,
    id: `describedby-${id}`,
    "aria-live": "polite"
  }, description && React.createElement(Paragraph, {
    fontSize: "xsmall",
    color: "text2"
  }, description), validationMessage && React.createElement(ValidationMessage, validationMessage));
}).withConfig({
  displayName: "HelperText",
  componentId: "sc-45tbno-0"
})(_t || (_t = _``));
//# sourceMappingURL=HelperText.js.map