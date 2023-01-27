
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Icon, Space } from '../..';
export default function Color() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.Delete, null),
    color: "inform"
  }), React.createElement(Space, {
    align: "center",
    color: "critical",
    bg: "criticalSubtle",
    p: "u5"
  }, React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.Delete, null),
    display: "inline-flex"
  }), "Text color is red so the Icon is as well"));
}
//# sourceMappingURL=Color.js.map