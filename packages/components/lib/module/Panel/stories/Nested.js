
import React from 'react';
import { List } from '../../List';
import { ListItem } from '../../ListItem';
import { Aside, Page, Section } from '../../Layout';
import { Panel, Panels } from '..';
import { Button } from '../../Button';
import { Paragraph } from '../../Text';
export default function Nested() {
  return React.createElement(Page, {
    hasAside: true
  }, React.createElement(Aside, {
    width: "12rem"
  }, React.createElement(Button, null, "Before"), React.createElement(Panels, null, React.createElement(List, null, React.createElement(Panel, {
    title: "Panel Title",
    content: React.createElement(Panel, {
      content: "Nested Panel content",
      title: "Nested"
    }, React.createElement(Button, null, "Open nested panel"))
  }, React.createElement(ListItem, null, "option A")), React.createElement(ListItem, null, "option B"), React.createElement(ListItem, null, "option C"), React.createElement(ListItem, null, "option D")))), React.createElement(Section, null, React.createElement(Paragraph, null, "Main stuff here..."), React.createElement(Button, null, "After")));
}
//# sourceMappingURL=Nested.js.map