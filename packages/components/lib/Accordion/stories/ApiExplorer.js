let _ = t => t,
    _t;

import React from 'react';
import { ChevronLeft, ExpandMore } from '@styled-icons/material-rounded';
import styled from 'styled-components';
import { Accordion, AccordionDisclosure, Badge, Box2, UnorderedList, Text } from '../..';
export default function ApiExplorer() {
  const content = React.createElement(Box2, {
    borderLeft: true,
    ml: "xsmall",
    pl: "small"
  }, React.createElement(UnorderedList, {
    fontSize: "small"
  }, React.createElement("li", null, React.createElement(Badge, {
    intent: "inform"
  }, "GET"), " Search Favorites"), React.createElement("li", null, React.createElement(Badge, {
    intent: "inform"
  }, "GET"), " Get Favorites"), React.createElement("li", null, React.createElement(Badge, {
    intent: "critical"
  }, "GET"), " Delete Favorite"), React.createElement("li", null, React.createElement(Badge, {
    intent: "positive"
  }, "GET"), " Create Favorite"), React.createElement("li", null, React.createElement(Badge, {
    intent: "warn"
  }, "POST"), " Update Content")));
  return React.createElement(Customized, null, React.createElement(Accordion, {
    indicatorIcons: {
      close: React.createElement(ChevronLeft, null),
      open: React.createElement(ExpandMore, null)
    },
    content: content
  }, "First Group"), React.createElement(Accordion, {
    defaultOpen: true,
    indicatorIcons: {
      close: React.createElement(ChevronLeft, null),
      open: React.createElement(ExpandMore, null)
    },
    content: content
  }, React.createElement(Text, {
    color: "red"
  }, "Second Group")));
}
const Customized = styled.div.withConfig({
  displayName: "ApiExplorer__Customized",
  componentId: "sc-166uytv-0"
})(_t || (_t = _`
  ${0}[aria-expanded='true'] {
    color: ${0};
  }
`), AccordionDisclosure, ({
  theme
}) => theme.colors.key);
//# sourceMappingURL=ApiExplorer.js.map