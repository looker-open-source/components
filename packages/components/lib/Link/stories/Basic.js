import React from 'react';
import { Link, Space } from '../..';
export default function Basic() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Link, {
    href: "https://google.com"
  }, "\uD83D\uDC4B I am a link!"), React.createElement(Link, {
    href: "https://google.com",
    id: "thumbs-up"
  }, "\uD83D\uDC4D I am a link with an id"));
}
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Basic.js.map