import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function Default() {
  return React.createElement(Tooltip, {
    content: "Simple Content"
  }, React.createElement(Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=Default.js.map