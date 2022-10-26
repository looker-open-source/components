import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { TextSnippet } from '@styled-icons/material';
import { Explore, TableChart, Visibility } from '@styled-icons/material-outlined';
import { Tree } from '../Tree';
import { TreeCollection } from '../TreeCollection';
import { TreeItem } from '../TreeItem';

const Template = args => React.createElement(TreeCollection, null, React.createElement(Tree, _extends({}, args, {
  label: React.createElement("strong", null, "thelook"),
  icon: React.createElement(Explore, null)
}), React.createElement(Tree, {
  label: "Users",
  icon: React.createElement(Visibility, null),
  defaultOpen: true
}, React.createElement(Tree, {
  label: "Orders",
  icon: React.createElement(TableChart, null),
  defaultOpen: true
}, React.createElement(TreeItem, {
  icon: React.createElement(TextSnippet, null)
}, "ID"), React.createElement(TreeItem, {
  icon: React.createElement(TextSnippet, null)
}, "Status"), React.createElement(TreeItem, {
  icon: React.createElement(TextSnippet, null)
}, "Created")), React.createElement(Tree, {
  label: "Users",
  icon: React.createElement(TableChart, null),
  defaultOpen: true
}, React.createElement(TreeItem, {
  icon: React.createElement(TextSnippet, null)
}, "ID"), React.createElement(TreeItem, {
  icon: React.createElement(TextSnippet, null)
}, "Name"), React.createElement(TreeItem, {
  icon: React.createElement(TextSnippet, null)
}, "Created")))));

export const FileTree = Template.bind({});
FileTree.args = {
  defaultOpen: true
};
export const FileTreeClosed = Template.bind({});
FileTreeClosed.args = {};
//# sourceMappingURL=FileTree.js.map