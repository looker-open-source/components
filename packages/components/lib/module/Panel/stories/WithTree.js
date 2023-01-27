
import React from 'react';
import { Aside, Page, Section } from '../../Layout';
import { Panel, Panels } from '..';
import { Button } from '../../Button';
import { TreeCollection, Tree, TreeItem } from '../../Tree';
export default function WithTree() {
  return React.createElement(Page, {
    hasAside: true
  }, React.createElement(Aside, {
    width: "navigation"
  }, React.createElement(Panels, null, React.createElement(Panel, {
    title: "Some title",
    content: "Tree should be hidden"
  }, React.createElement(Button, null, "Open Panel")), React.createElement(TreeCollection, null, React.createElement(Tree, {
    label: React.createElement("strong", null, "Orders"),
    defaultOpen: true
  }, React.createElement(TreeItem, null, "ID"), React.createElement(TreeItem, null, "Status"), React.createElement(Tree, {
    label: React.createElement("strong", null, "Created"),
    defaultOpen: true
  }, React.createElement(TreeItem, null, "Created Date"), React.createElement(TreeItem, null, "Created Month"), React.createElement(TreeItem, null, "Created Year"), React.createElement(TreeItem, null, "Created Quarter")))))), React.createElement(Section, null, "Main content"));
}
//# sourceMappingURL=WithTree.js.map