let _ = t => t,
    _t;

import React from 'react';
import { reset } from '@looker/design-tokens';
import styled from 'styled-components';

const ValidationMessageLayout = ({
  className,
  message
}) => React.createElement("div", {
  className: className
}, message);

export const ValidationMessage = styled(ValidationMessageLayout).withConfig({
  displayName: "ValidationMessage",
  componentId: "sc-13fefl2-0"
})(_t || (_t = _`
  ${0}

  font-size: ${0};

  ${0}
`), reset, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme,
  type
}) => type === 'error' && `color: ${theme.colors.critical};`);
ValidationMessage.displayName = 'ValidationMessage';
//# sourceMappingURL=ValidationMessage.js.map