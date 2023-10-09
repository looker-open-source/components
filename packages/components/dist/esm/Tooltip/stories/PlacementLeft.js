import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function PlacementLeft() {
  return React.createElement(Tooltip, {
    content: 'Simple Content',
    placement: 'left'
  }, React.createElement(Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=PlacementLeft.js.map