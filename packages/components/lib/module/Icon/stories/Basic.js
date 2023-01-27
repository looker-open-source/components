
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Icon, Space } from '../..';
export default function Basic() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.Done, null)
  }), React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.Favorite, null),
    size: "large"
  }), React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.Settings, null),
    size: "small"
  }));
}
//# sourceMappingURL=Basic.js.map