import React from 'react';
import { DateRange } from '@styled-icons/material-outlined';
import { Tree, TreeCollection, TreeItem } from '..';
export const ColorfulTree = () => React.createElement(TreeCollection, null, React.createElement(Tree, {
  defaultOpen: true,
  label: React.createElement("strong", null, "Colorful Tree")
}, React.createElement(TreeItem, {
  color: "green",
  icon: React.createElement(DateRange, null)
}, "Green TreeItem"), React.createElement(Tree, {
  color: "blue",
  defaultOpen: true,
  icon: React.createElement(DateRange, null),
  label: React.createElement("strong", null, "Blue Tree")
}, React.createElement(TreeItem, {
  color: "purple",
  icon: React.createElement(DateRange, null)
}, "Purple TreeItem"))));
//# sourceMappingURL=ColorfulTree.js.map