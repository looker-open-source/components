import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function DelayNone() {
  return React.createElement(Tooltip, {
    content: 'Simple Content',
    delay: 'none'
  }, React.createElement(Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=DelayNone.js.map