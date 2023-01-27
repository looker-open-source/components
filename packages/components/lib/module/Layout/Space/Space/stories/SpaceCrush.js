
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Space, Paragraph, Status, Icon } from '../../../..';
export default function SpaceCrush(props) {
  return React.createElement(Space, props, React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.AccountCircle, null),
    size: "large"
  }), React.createElement(Status, {
    intent: "inform"
  }), React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
}
//# sourceMappingURL=SpaceCrush.js.map