
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Space, SpaceVertical, Button, IconButton } from '../..';
export default function InsideComponents() {
  return React.createElement(SpaceVertical, null, React.createElement(Space, {
    gap: "u2"
  }, React.createElement(Button, {
    size: "large",
    iconAfter: React.createElement(MaterialIcons.Refresh, null)
  }, "Add"), React.createElement(IconButton, {
    size: "large",
    icon: React.createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })), React.createElement(Space, {
    gap: "u2"
  }, React.createElement(Button, {
    iconAfter: React.createElement(MaterialIcons.Refresh, null)
  }, "Add"), React.createElement(IconButton, {
    size: "medium",
    icon: React.createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })), React.createElement(Space, {
    gap: "u2"
  }, React.createElement(Button, {
    size: "small",
    iconAfter: React.createElement(MaterialIcons.Refresh, null)
  }, "Add"), React.createElement(IconButton, {
    size: "small",
    icon: React.createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })), React.createElement(Space, {
    gap: "u2"
  }, React.createElement(Button, {
    size: "xsmall",
    iconAfter: React.createElement(MaterialIcons.Refresh, null)
  }, "Add"), React.createElement(IconButton, {
    size: "xsmall",
    icon: React.createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })), React.createElement(Space, {
    gap: "u2"
  }, React.createElement(Button, {
    size: "xxsmall",
    iconAfter: React.createElement(MaterialIcons.Refresh, null)
  }, "Add"), React.createElement(IconButton, {
    size: "xxsmall",
    icon: React.createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })));
}
//# sourceMappingURL=InsideComponents.js.map