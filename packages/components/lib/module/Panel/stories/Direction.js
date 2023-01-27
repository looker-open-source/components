
import React from 'react';
import { List } from '../../List';
import { ListItem } from '../../ListItem';
import { Aside, Page, Section } from '../../Layout';
import { Panel, Panels } from '..';
export default function Direction() {
  return React.createElement(Page, {
    hasAside: true
  }, React.createElement(Aside, {
    width: "12rem"
  }, React.createElement(Panels, null, React.createElement(List, null, React.createElement(Panel, {
    content: 'content from Right...',
    title: 'Right',
    defaultOpen: true,
    direction: 'right'
  }, React.createElement(ListItem, null, "option A")), React.createElement(Panel, {
    content: 'content from Left...',
    direction: 'left',
    defaultOpen: true,
    title: "Left"
  }, React.createElement(ListItem, null, "Left")), React.createElement(ListItem, null, "option C"), React.createElement(ListItem, null, "option D")))), React.createElement(Section, null, "Main stuff here..."));
}
//# sourceMappingURL=Direction.js.map