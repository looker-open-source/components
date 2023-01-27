

import React from 'react';
import { MessageBar, Space } from '../..';
export default function Intent() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(MessageBar, {
    intent: "critical"
  }, "Key"), React.createElement(MessageBar, {
    intent: "inform"
  }, "Positive"), React.createElement(MessageBar, {
    intent: "positive"
  }, "Inform"), React.createElement(MessageBar, {
    intent: "warn"
  }, "Neutral"));
}
//# sourceMappingURL=Intent.js.map