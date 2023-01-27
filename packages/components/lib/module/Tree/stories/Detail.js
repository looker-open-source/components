

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { TreeItem, Tree, TreeCollection } from '..';
import { IconButton } from '../../Button';
export default function Detail() {
  return React.createElement(TreeCollection, null, React.createElement(Tree, {
    label: "Orders",
    icon: React.createElement(MaterialIcons.TableChart, null),
    detail: React.createElement(IconButton, {
      icon: React.createElement(MaterialIcons.Info, null),
      label: "Get Info",
      onClick: () => alert("You've got info!")
    })
  }, React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.Tag, null)
  }, "Cost")));
}
//# sourceMappingURL=Detail.js.map