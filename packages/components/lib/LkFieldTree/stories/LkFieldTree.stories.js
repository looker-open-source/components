import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { TreeCollection } from '../../Tree';
import { LkFieldItem, LkFieldTree } from '../';
export default {
  argTypes,
  component: LkFieldTree,
  title: 'LkFieldTree'
};
export { FieldPicker } from './FieldPicker';

const Template = args => React.createElement(TreeCollection, null, React.createElement(LkFieldTree, _extends({
  label: React.createElement("strong", null, "Orders")
}, args), React.createElement(LkFieldTree, {
  label: React.createElement("strong", null, "Orders"),
  defaultOpen: true
}, React.createElement(LkFieldItem, null, "ID"), React.createElement(LkFieldItem, null, "Status"), React.createElement(LkFieldTree, {
  label: React.createElement("strong", null, "Created"),
  defaultOpen: true
}, React.createElement(LkFieldItem, null, "Created Date"), React.createElement(LkFieldItem, null, "Created Month"), React.createElement(LkFieldItem, null, "Created Year"), React.createElement(LkFieldItem, null, "Created Quarter")))));

export const Basic = Template.bind({});
Basic.args = {
  defaultOpen: true
};
//# sourceMappingURL=LkFieldTree.stories.js.map