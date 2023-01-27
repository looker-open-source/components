

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Tree, TreeCollection, TreeItem } from '..';
export default function Example1() {
  return React.createElement(TreeCollection, null, React.createElement(Tree, {
    selected: true,
    label: "Orders",
    icon: React.createElement(MaterialIcons.TableChart, null),
    defaultOpen: true
  }, React.createElement(Tree, {
    disabled: true,
    label: "Created",
    defaultOpen: true
  }, React.createElement(TreeItem, {
    selected: true
  }, "Created Date"), React.createElement(TreeItem, {
    disabled: true
  }, "Created Month"), React.createElement(TreeItem, null, "Created Year"), React.createElement(TreeItem, null, "Created Quarter"))), React.createElement(Tree, {
    color: "key",
    selected: true,
    label: "Orders",
    icon: React.createElement(MaterialIcons.TableChart, null),
    defaultOpen: true
  }, React.createElement(Tree, {
    disabled: true,
    label: "Created",
    defaultOpen: true
  }, React.createElement(TreeItem, {
    selected: true
  }, "Created Date"), React.createElement(TreeItem, {
    disabled: true
  }, "Created Month"), React.createElement(TreeItem, null, "Created Year"), React.createElement(TreeItem, null, "Created Quarter"))));
}
//# sourceMappingURL=Example1.js.map