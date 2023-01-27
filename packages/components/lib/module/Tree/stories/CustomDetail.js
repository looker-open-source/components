

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { TreeCollection, TreeItem, Tree } from '..';
import { IconButton } from '../../Button';
export default function CustomDetail() {
  return React.createElement(TreeCollection, null, React.createElement(Tree, {
    label: "Orders",
    icon: React.createElement(MaterialIcons.TableChart, null),
    defaultOpen: true,
    detail: {
      content: React.createElement(IconButton, {
        icon: React.createElement(MaterialIcons.Info, null),
        label: "Get Info",
        onClick: () => alert("You've got info!")
      }),
      options: {
        accessory: true,
        hoverDisclosure: true
      }
    }
  }, React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.Tag, null),
    detail: {
      content: React.createElement(IconButton, {
        icon: React.createElement(MaterialIcons.Star, null),
        label: React.createElement(MaterialIcons.Star, null),
        onClick: () => alert("You've pivoted!")
      }),
      options: {
        accessory: true,
        hoverDisclosure: true
      }
    }
  }, "Cost")));
}
//# sourceMappingURL=CustomDetail.js.map