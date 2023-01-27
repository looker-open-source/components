

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Tree, TreeCollection, TreeItem } from '..';
import { Space } from '../../Layout';
export default function Icon() {
  return React.createElement(TreeCollection, null, React.createElement(Tree, {
    defaultOpen: true,
    icon: React.createElement(MaterialIcons.Alarm, null),
    label: React.createElement("strong", null, React.createElement(Space, {
      between: true
    }, "\"Alarm\" icon has margin-right, but \"Download\" icon does not", React.createElement(MaterialIcons.Download, {
      size: 20
    })))
  }, React.createElement(TreeItem, null, "Don't mind me")));
}
//# sourceMappingURL=Icon.js.map