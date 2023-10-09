import React from 'react';
import { Tooltip } from '../Tooltip';
import { ButtonOutline } from '../../Button';
import { Link } from '../../Link';
export default function Example() {
  return React.createElement(Tooltip, {
    content: React.createElement(React.Fragment, null, "This is a tooltip with quite a bit of text. It's probably not ideal to have this much text in a Tooltip. Perhaps you should link to", React.createElement(Link, {
      href: "#"
    }, "another document \u2192"))
  }, React.createElement(ButtonOutline, null, "Tooltip with lots of text"));
}
//# sourceMappingURL=Example.js.map