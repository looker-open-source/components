import React from 'react';
import { Badge, Space } from '../..';
export default function Sizes() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Badge, {
    size: "small"
  }, "Small"), React.createElement(Badge, {
    size: "medium"
  }, "Medium"), React.createElement(Badge, {
    size: "large"
  }, "Large"));
}
//# sourceMappingURL=Sizes.js.map