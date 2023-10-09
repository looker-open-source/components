import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function OpenDelayNone() {
  return React.createElement(Tooltip, {
    content: 'Simple Content',
    delay: 'none',
    isOpen: true
  }, React.createElement(Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=OpenDelayNone.js.map