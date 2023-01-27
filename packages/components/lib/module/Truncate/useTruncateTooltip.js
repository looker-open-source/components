

import React from 'react';
import { Span } from '../Text/Span';
import { useTooltip } from '../Tooltip';
import { isOverflowing } from '../utils';
export const useTruncateTooltip = ({
  children,
  description,
  element
}) => {
  return useTooltip({
    canOpen: triggerElement => description !== undefined || isOverflowing(element || triggerElement),
    content: React.createElement(React.Fragment, null, children, description && React.createElement(React.Fragment, null, React.createElement("br", null), React.createElement(Span, {
      color: "text2"
    }, description))),
    invert: false,
    placement: 'top-start',
    textAlign: 'left',
    width: 'auto'
  });
};
//# sourceMappingURL=useTruncateTooltip.js.map