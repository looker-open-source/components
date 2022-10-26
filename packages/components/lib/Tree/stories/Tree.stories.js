import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["label"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Alarm, Download } from '@styled-icons/material';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Tree, TreeCollection, TreeItem } from '..';
import { Button } from '../../Button';
import { Space } from '../../Layout';
import { FieldToggleSwitch } from '../../Form';
import { useToggle } from '../../utils';
export { BorderRadiusOverride } from './BorderRadius';
export { ColorfulTree } from './ColorfulTree';
export { Density } from './Density';
export { DisabledAndSelected } from './DisabledAndSelected';
export { FileTree, FileTreeClosed } from './FileTree';
export { HoverDisclosure } from './HoverDisclosure';
export { LongLabels } from './LongLabels';
export { Windowing } from './Windowing';
export default {
  argTypes,
  component: Tree,
  title: 'Tree'
};

const Template = _ref => {
  let {
    label = React.createElement("strong", null, "Orders")
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(TreeCollection, null, React.createElement(Tree, _extends({
    label: label
  }, args), React.createElement(Tree, {
    label: React.createElement("strong", null, "Orders"),
    defaultOpen: true
  }, React.createElement(TreeItem, null, "ID"), React.createElement(TreeItem, null, "Status"), React.createElement(Tree, {
    label: React.createElement("strong", null, "Created"),
    defaultOpen: true
  }, React.createElement(TreeItem, null, "Created Date"), React.createElement(TreeItem, null, "Created Month"), React.createElement(TreeItem, null, "Created Year"), React.createElement(TreeItem, null, "Created Quarter")))));
};

export const Basic = Template.bind({});
Basic.args = {
  defaultOpen: true
};
export const Border = Template.bind({});
Border.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  border: true
});
export const Link = Template.bind({});
Link.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  href: 'https://google.com',
  itemRole: 'link',
  label: React.createElement("strong", null, "Click my label to go to Google"),
  rel: 'noopener noreferrer',
  target: '_blank'
});
export const Icon = () => React.createElement(TreeCollection, null, React.createElement(Tree, {
  defaultOpen: true,
  icon: React.createElement(Alarm, null),
  label: React.createElement("strong", null, React.createElement(Space, {
    between: true
  }, "\"Alarm\" icon has margin-right, but \"Download\" icon does not", React.createElement(Download, {
    size: 20
  })))
}, React.createElement(TreeItem, null, "Don't mind me")));
export const Accessory = Template.bind({});
Accessory.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: {
    content: React.createElement(Button, {
      ml: "large",
      onClick: () => alert('Accessory Button')
    }, "Accessory Button"),
    options: {
      accessory: true
    }
  }
});
Accessory.parameters = {
  storyshots: {
    disable: true
  }
};
export const Controlled = () => {
  const {
    value,
    change,
    toggle
  } = useToggle(true);
  return React.createElement(React.Fragment, null, React.createElement(FieldToggleSwitch, {
    on: value,
    onChange: toggle,
    label: "Toggle"
  }), React.createElement(Tree, {
    isOpen: value,
    toggleOpen: change,
    label: "Controlled Tree"
  }, "Stuff here"));
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Tree.stories.js.map