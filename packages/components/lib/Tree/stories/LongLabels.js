import React from 'react';
import { Info } from '@styled-icons/material';
import { Explore, TableChart, Visibility } from '@styled-icons/material-outlined';
import { Tree, TreeCollection, TreeItem, IconButton } from '../..';
export const LongLabels = () => React.createElement(TreeCollection, null, React.createElement(Tree, {
  label: React.createElement("strong", null, "Tree with long labels"),
  icon: React.createElement(Explore, null),
  defaultOpen: true
}, React.createElement(Tree, {
  label: React.createElement("strong", null, "Wrapping next"),
  icon: React.createElement(Visibility, null),
  defaultOpen: true
}, React.createElement(Tree, {
  label: React.createElement("strong", null, "Orders Lorem ipsum dolor sit amet, consectetur adipiscing elit. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."),
  icon: React.createElement(TableChart, null),
  defaultOpen: true
}, React.createElement(TreeItem, {
  icon: React.createElement(Info, null)
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), React.createElement(TreeItem, {
  icon: React.createElement(Info, null)
}, "Nam sit amet imperdiet lacus, eget ullamcorper nunc. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."), React.createElement(TreeItem, {
  icon: React.createElement(Info, null),
  detail: {
    content: React.createElement(IconButton, {
      icon: React.createElement(Info, null),
      label: "Get Info",
      onClick: () => alert("You've got info!")
    }),
    options: {
      accessory: true
    }
  }
}, "Nunc convallis justo sed turpis interdum rutrum ac a neque. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."))), React.createElement(Tree, {
  label: React.createElement("strong", null, "Truncated text"),
  icon: React.createElement(Visibility, null),
  defaultOpen: true
}, React.createElement(Tree, {
  label: React.createElement("strong", null, "Users Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."),
  icon: React.createElement(TableChart, null),
  truncate: true,
  defaultOpen: true
}, React.createElement(TreeItem, {
  icon: React.createElement(Info, null),
  truncate: true
}, "Very long text renders a tooltip. Vivamus vitae mauris et erat sagittis tempus. Mauris euismod aliquet arcu ut viverra. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."), React.createElement(TreeItem, {
  icon: React.createElement(Info, null),
  truncate: true,
  detail: {
    content: React.createElement(IconButton, {
      icon: React.createElement(Info, null),
      label: "Get Info",
      onClick: () => alert("You've got info!")
    }),
    options: {
      accessory: true
    }
  }
}, "Quisque euismod risus quis sapien luctus rutrum. Cras a dui luctus, dictum elit vel, pellentesque nisl. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."), React.createElement(TreeItem, {
  icon: React.createElement(Info, null),
  truncate: true
}, "This short text should not render a tooltip")))));
//# sourceMappingURL=LongLabels.js.map