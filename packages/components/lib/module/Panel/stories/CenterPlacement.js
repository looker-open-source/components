
import React from 'react';
import { Aside, Layout, Page, Section, SpaceVertical } from '../../Layout';
import { Panel, Panels } from '..';
import { Paragraph } from '../../Text';
import { Button } from '../../Button';
export default function CenterPlacement() {
  return React.createElement(Page, {
    hasAside: true,
    height: "100vh"
  }, React.createElement(Aside, {
    width: "navigation"
  }, "Left sidebar"), React.createElement(Layout, {
    hasAside: true
  }, React.createElement(Section, null, React.createElement(Panels, null, React.createElement(Panel, {
    title: "Some title",
    content: React.createElement(SpaceVertical, null, React.createElement(Panel, {
      title: "Another title",
      direction: "right",
      content: React.createElement(SpaceVertical, null, React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"))
    }, React.createElement(Button, null, "Open Another Panel")), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"))
  }, React.createElement(Button, null, "Open Panel")), React.createElement(Paragraph, null, "Content to be covered by the panel"))), React.createElement(Aside, {
    width: "sidebar"
  }, "Right sidebar")));
}
//# sourceMappingURL=CenterPlacement.js.map