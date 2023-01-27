

import React from 'react';
import { TreeItem, Tree, TreeCollection } from '..';
export default function Link() {
  return React.createElement(TreeCollection, null, React.createElement(Tree, {
    href: 'https://google.com',
    itemRole: 'link',
    label: React.createElement("strong", null, "Click my label to go to Google"),
    rel: 'noopener noreferrer',
    target: '_blank'
  }, React.createElement(Tree, {
    label: React.createElement("strong", null, "Orders"),
    defaultOpen: true
  }, React.createElement(TreeItem, null, "ID"), React.createElement(TreeItem, null, "Status"), React.createElement(Tree, {
    label: React.createElement("strong", null, "Created"),
    defaultOpen: true
  }, React.createElement(TreeItem, null, "Created Date"), React.createElement(TreeItem, null, "Created Month"), React.createElement(TreeItem, null, "Created Year"), React.createElement(TreeItem, null, "Created Quarter")))));
}
//# sourceMappingURL=Link.js.map