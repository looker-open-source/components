import React from 'react';
import { Add, Code, MoreVert } from '@styled-icons/material';
import { Assignment, Explore, Extension, FavoriteBorder, Folder, Home, Schedule, Widgets } from '@styled-icons/material-outlined';
import { IconButton } from '../../Button';
import { Divider } from '../../Divider';
import { Aside } from '../../Layout';
import { ListItem } from '../../ListItem';
import { NavTree, NavTreeItem } from '../../NavTree';
import { NavList } from '../NavList';
export const LeftNav = () => React.createElement(Aside, {
  width: "navigation"
}, React.createElement(NavList, null, React.createElement(ListItem, {
  icon: React.createElement(Explore, null)
}, "Explore"), React.createElement(ListItem, {
  icon: React.createElement(Code, null)
}, "Develop"), React.createElement(Divider, {
  my: "medium"
}), React.createElement(ListItem, {
  icon: React.createElement(Home, null)
}, "Home"), React.createElement(NavTree, {
  defaultOpen: true,
  icon: React.createElement(Schedule, null),
  label: "Recently Viewed"
}, React.createElement(NavTreeItem, {
  parentIcon: true
}, "I just saw you."), React.createElement(NavTreeItem, {
  parentIcon: true
}, "Yeah, you!")), React.createElement(NavTree, {
  icon: React.createElement(FavoriteBorder, null),
  label: "Favorites"
}, React.createElement(NavTreeItem, {
  parentIcon: true
}, "My Favorite Dashboard")), React.createElement(NavTree, {
  defaultOpen: true,
  icon: React.createElement(Assignment, null),
  label: "Boards",
  detail: React.createElement(IconButton, {
    icon: React.createElement(Add, null),
    label: "Add Board",
    onClick: () => alert('Board added!'),
    size: "medium"
  })
}, React.createElement(NavTree, {
  defaultOpen: true,
  label: "Elliot's Sick Board",
  href: "https://google.com",
  indicatorLabel: "Sick Board Indicator",
  target: "_blank",
  detail: {
    content: React.createElement(IconButton, {
      icon: React.createElement(MoreVert, null),
      label: "Edit Board",
      onClick: () => alert('Edited board!'),
      size: "medium"
    }),
    options: {
      hoverDisclosure: true
    }
  }
}, React.createElement(NavTree, {
  defaultOpen: true,
  label: "Section 1"
}, React.createElement(NavTreeItem, null, "Dashboard 1")), React.createElement(NavTree, {
  label: "Section 2"
}, React.createElement(NavTreeItem, null, "Dashboard 2"))), React.createElement(NavTree, {
  label: "The Illest Board"
})), React.createElement(Divider, {
  my: "medium"
}), React.createElement(NavTree, {
  icon: React.createElement(Folder, null),
  label: "Folders"
}), React.createElement(NavTree, {
  icon: React.createElement(Widgets, null),
  label: "Blocks"
}), React.createElement(NavTree, {
  icon: React.createElement(Extension, null),
  label: "Applications"
})));
//# sourceMappingURL=LeftNav.js.map