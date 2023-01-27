

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Tree, TreeItem } from '..';
import { FieldToggleSwitch } from '../../Form';
import { useToggle } from '../../utils';
export default function Controlled() {
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
  }, React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.Tag, null)
  }, "Cost"), React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.Place, null)
  }, "Location"), React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.Filter, null)
  }, "Tier"), React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.Check, null)
  }, "Oui ou Non")));
}
//# sourceMappingURL=Controlled.js.map