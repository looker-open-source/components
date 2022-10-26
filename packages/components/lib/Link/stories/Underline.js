import React from 'react';
import { Link, Space } from '../..';
export default function Underline() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Link, {
    href: "https://google.com"
  }, "By default, underline appears on hover"), React.createElement(Link, {
    href: "https://google.com",
    underline: true
  }, "I always have an underline"), React.createElement(Link, {
    href: "https://google.com",
    underline: false
  }, "I never have an underline"));
}
Underline.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Underline.js.map