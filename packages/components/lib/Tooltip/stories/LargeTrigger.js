import React from 'react';
import { Tooltip } from '../Tooltip';
import { Card } from '../../Card';
export default function LargeTrigger() {
  return React.createElement(Tooltip, {
    content: "See what happens when you scroll",
    placement: "right"
  }, React.createElement(Card, {
    width: 500,
    height: 800,
    raised: true,
    p: "u5"
  }, "Very large trigger"));
}
//# sourceMappingURL=LargeTrigger.js.map