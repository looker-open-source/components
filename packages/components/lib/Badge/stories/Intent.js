import React from 'react';
import { Badge, Space } from '../..';
export default function Intent() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Badge, {
    intent: "key"
  }, "Key"), React.createElement(Badge, {
    intent: "positive"
  }, "Positive"), React.createElement(Badge, {
    intent: "inform"
  }, "Inform"), React.createElement(Badge, {
    intent: "neutral"
  }, "Neutral"), React.createElement(Badge, {
    intent: "warn"
  }, "Warn"), React.createElement(Badge, {
    intent: "critical"
  }, "Critical"));
}
//# sourceMappingURL=Intent.js.map