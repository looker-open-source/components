
import React from 'react';
import { List } from '../../List';
import { ListItem } from '../../ListItem';
import { Aside, Page, Section } from '../../Layout';
import { Panel, Panels } from '..';
export default function Open() {
  return React.createElement(Page, {
    hasAside: true
  }, React.createElement(Aside, {
    width: "12rem"
  }, React.createElement(Panels, null, React.createElement(List, null, React.createElement(Panel, {
    content: 'Panel Content',
    title: 'Panel Title',
    defaultOpen: true,
    iconToggle: true
  }, React.createElement(ListItem, null, "option A")), React.createElement(ListItem, null, "option B"), React.createElement(ListItem, null, "option C"), React.createElement(ListItem, null, "option D")))), React.createElement(Section, null, "Main stuff here..."));
}
//# sourceMappingURL=IconToggle.js.map