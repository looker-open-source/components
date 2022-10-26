import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Box2, AvatarIcon } from '../..';
export default function Icon() {
  return React.createElement(Box2, {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }, React.createElement(AvatarIcon, null), React.createElement(AvatarIcon, {
    icon: React.createElement(MaterialIcons.Code, null)
  }));
}
//# sourceMappingURL=Icon.js.map