import React from 'react';
import { Accordion, UnorderedList } from '../..';
export default function Nested() {
  return React.createElement(Branch, null, React.createElement(Branch, null, React.createElement(Branch, null, React.createElement(Branch, null))));
}

const Branch = ({
  children
}) => React.createElement(Accordion, {
  indicatorPosition: "left",
  defaultOpen: true,
  pl: "medium",
  content: React.createElement(UnorderedList, null, React.createElement("li", null, "Cheddar"), React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), children)
}, "Hello World");
//# sourceMappingURL=Nested.js.map