import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function PlacementTop() {
  return React.createElement(Tooltip, {
    content: 'Simple Content',
    placement: 'top'
  }, React.createElement(Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=PlacementTop.js.map