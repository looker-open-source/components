import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function Open() {
  return React.createElement(Tooltip, {
    content: 'Simple Content',
    isOpen: true
  }, React.createElement(Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=Open.js.map