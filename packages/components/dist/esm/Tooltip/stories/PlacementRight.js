import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function PlacemntRight() {
  return React.createElement(Tooltip, {
    content: 'Simple Content',
    placement: 'right'
  }, React.createElement(Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=PlacementRight.js.map