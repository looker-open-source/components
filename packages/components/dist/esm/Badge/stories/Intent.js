function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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