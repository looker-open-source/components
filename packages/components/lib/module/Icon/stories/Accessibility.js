
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Icon, Space } from '../..';
export default function Accessibility() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.Delete, null),
    title: "It's a trash can"
  }), React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.DeleteOutline, null)
  }));
}
//# sourceMappingURL=Accessibility.js.map