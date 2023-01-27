import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import { Badge, Space } from '../..';
export default function Intent(props) {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Badge, _extends({
    intent: "key"
  }, props), "Key"), React.createElement(Badge, _extends({
    intent: "positive"
  }, props), "Positive"), React.createElement(Badge, _extends({
    intent: "inform"
  }, props), "Inform"), React.createElement(Badge, _extends({
    intent: "neutral"
  }, props), "Neutral"), React.createElement(Badge, _extends({
    intent: "warn"
  }, props), "Warn"), React.createElement(Badge, _extends({
    intent: "critical"
  }, props), "Critical"));
}
//# sourceMappingURL=Intent.js.map