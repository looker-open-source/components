let _ = t => t,
    _t;

import React from 'react';
import { Error } from '@styled-icons/material/Error';
import styled from 'styled-components';
import { Icon } from '../../Icon';
export const ErrorIcon = styled(Icon).attrs(() => ({
  color: 'critical',
  icon: React.createElement(Error, null),
  size: 'xsmall'
})).withConfig({
  displayName: "ErrorIcon",
  componentId: "sc-1vqq5ut-0"
})(_t || (_t = _``));
//# sourceMappingURL=ErrorIcon.js.map