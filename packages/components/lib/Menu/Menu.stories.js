import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["open"];
import { AddAlert, Chat, Create, Dashboard, DeleteOutline, Download, Favorite, MoreVert, AttachFile, PersonOutline, PieChart, Refresh, TableChart, TextSnippet, Undo, VerifiedUser } from '@styled-icons/material';
import { AccountCircle, Create as CreateOutline, CreateNewFolder, Explore as ExploreOutline, Home } from '@styled-icons/material-outlined';
import React, { forwardRef, Fragment, useMemo, useRef, useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button, IconButton } from '../Button';
import { Card } from '../Card';
import { Dialog, DialogLayout } from '../Dialog';
import { Divider } from '../Divider';
import { FieldToggleSwitch } from '../Form';
import { Icon } from '../Icon';
import { Flex, Space, SpaceVertical } from '../Layout';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../Tabs';
import { Heading, Text, Paragraph } from '../Text';
import { Tooltip } from '../Tooltip';
import { useToggle } from '../utils';
import { Menu } from './Menu';
import { MenuDivider } from './MenuDivider';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { MenuHeading } from './MenuHeading';
export default {
  argTypes,
  component: Menu,
  title: 'Menu'
};
const menuItems = React.createElement(React.Fragment, null, React.createElement(MenuItem, {
  detail: "detail",
  description: "this is the description",
  icon: React.createElement(Home, null)
}, "Looker"), React.createElement(MenuItem, {
  description: "this is the description",
  icon: React.createElement(VerifiedUser, null)
}, "Validate"), React.createElement(MenuItem, {
  detail: "detail",
  icon: React.createElement(PieChart, null)
}, "Pizza"), React.createElement(MenuDivider, null), React.createElement(MenuItem, null, "Gouda"), React.createElement(MenuItem, {
  "aria-current": true,
  selected: true
}, "Swiss"), React.createElement(MenuItem, null, "Cheddar"), React.createElement(MenuDivider, null), React.createElement(MenuHeading, null, "Create"), React.createElement(MenuItem, null, "Gouda"), React.createElement(MenuItem, null, " Swiss"), React.createElement(MenuItem, null, "Cheddar"), React.createElement(MenuDivider, null), React.createElement(MenuItem, null, "Gouda"), React.createElement(MenuItem, null, " Swiss"), React.createElement(MenuItem, null, "Cheddar"));
export const Basic = () => React.createElement(Menu, {
  content: menuItems,
  iconGutter: true
}, React.createElement(Button, null, "Basic Menu"));
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const Controlled = () => {
  const [isOpen, setOpen] = useState(false);
  return React.createElement(Menu, {
    content: menuItems,
    isOpen: isOpen,
    setOpen: setOpen,
    iconGutter: true
  }, React.createElement(Button, null, "Controlled Menu"));
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
export const IconSpace = () => React.createElement("div", null, React.createElement(Menu, {
  content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
    icon: React.createElement(PersonOutline, null)
  }, "Hello"), React.createElement(MenuItem, null, "World")),
  iconGutter: true
}, React.createElement(Button, null, "Icon Space Preserved")), React.createElement(Divider, null), React.createElement(MenuList, {
  iconGutter: true
}, React.createElement(MenuHeading, null, "MenuList with 3 Items"), React.createElement(MenuItem, {
  description: "this is a description",
  icon: React.createElement(Home, null)
}, "Looker"), React.createElement(MenuItem, {
  icon: React.createElement(VerifiedUser, null)
}, "Validate"), React.createElement(MenuItem, null, "Pizza!")), React.createElement(Divider, null), React.createElement(MenuList, {
  iconGutter: true
}, React.createElement(MenuItem, {
  icon: React.createElement(Home, null)
}, "Looker"), React.createElement(MenuItem, {
  icon: React.createElement(VerifiedUser, null)
}, "Validate"), React.createElement(MenuHeading, null, "MenuList with 1 Item"), React.createElement(MenuItem, null, "Pizza!")), React.createElement(Divider, null), React.createElement(MenuList, {
  iconGutter: true
}, React.createElement(MenuHeading, null, "Icon, Artwork, and Detail"), React.createElement(MenuItem, {
  icon: React.createElement(PieChart, null)
}, "Icon"), React.createElement(MenuItem, {
  icon: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
    fill: "#7FFFD4"
  }))
}, "Artwork"), React.createElement(MenuItem, {
  icon: React.createElement(AccountCircle, null),
  detail: React.createElement(React.Fragment, null, React.createElement(Text, {
    fontSize: "small",
    mr: "xsmall",
    color: "text2"
  }, "Online"), React.createElement(Icon, {
    icon: React.createElement(Chat, null),
    verticalAlign: "middle",
    color: "positive",
    size: 16
  }))
}, "Chat"), React.createElement(MenuItem, {
  icon: React.createElement(AccountCircle, null),
  detail: React.createElement(React.Fragment, null, React.createElement(Text, {
    fontSize: "small",
    mr: "xsmall",
    color: "text2"
  }, "Offline"), React.createElement(Icon, {
    icon: React.createElement(Chat, null),
    verticalAlign: "middle",
    size: 16
  }))
}, "Chat")));
IconSpace.parameters = {
  storyshots: {
    disable: true
  }
};
const MenuIcons = forwardRef((_ref, ref) => {
  let {
    open
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(React.Fragment, null, React.createElement(IconButton, {
    icon: React.createElement(AddAlert, null),
    label: "Add Alert",
    onClick: open
  }), React.createElement(IconButton, _extends({
    icon: React.createElement(MoreVert, null),
    label: "More Options",
    ref: ref
  }, props)));
});
MenuIcons.displayName = 'MenuIcons';
export const Hover = () => {
  const hoverRef = useRef(null);
  const [dialogIsOpen, setOpen] = useState(false);

  const open = () => setOpen(true);

  const close = () => setOpen(false);

  return React.createElement(Card, {
    ref: hoverRef,
    p: "u5",
    raised: true,
    height: "auto",
    tabIndex: 0
  }, React.createElement(Space, {
    between: true
  }, React.createElement(Paragraph, null, "Hovering in this card will show the button that triggers the menu."), React.createElement("div", null, React.createElement(Menu, {
    content: menuItems,
    hoverDisclosureRef: hoverRef,
    iconGutter: true
  }, React.createElement(MenuIcons, {
    open: open
  })))), React.createElement(Dialog, {
    isOpen: dialogIsOpen,
    onClose: close
  }, React.createElement(DialogLayout, null, "Alert icon should be hidden now.")));
};
Hover.parameters = {
  storyshots: {
    disable: true
  }
};
export const RealisticMenus = () => {
  return React.createElement(Space, {
    gap: "u10"
  }, React.createElement(Menu, {
    iconGutter: true,
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      description: "some description",
      icon: React.createElement(Refresh, null),
      detail: "\u2318\u21E7\u21B5"
    }, "Clear cache & refresh"), React.createElement(MenuDivider, null), React.createElement(MenuHeading, null, "Options"), React.createElement(MenuItem, {
      icon: React.createElement(Create, null),
      detail: "\u2318\u21E7E"
    }, "Edit dashboard"), React.createElement(MenuItem, {
      description: "some description"
    }, "Get LookMl"), React.createElement(MenuItem, {
      icon: React.createElement(Undo, null),
      detail: "A longer detail"
    }, "Revert to original dashboard"), React.createElement(MenuDivider, null), React.createElement(MenuItem, {
      icon: React.createElement(Download, null),
      detail: "\u2325\u21E7D"
    }, "Edit dashboard"), React.createElement(MenuDivider, null), React.createElement(MenuItem, {
      icon: React.createElement(DeleteOutline, null)
    }, "Move to Trash"))
  }, React.createElement(IconButton, {
    label: "Dashboard actions",
    size: "medium",
    icon: React.createElement(MoreVert, null)
  })), React.createElement(Menu, {
    iconGutter: true,
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      icon: React.createElement(Undo, null),
      detail: "\u2318\u21E7\u21B5"
    }, "Clear cache & refresh"), React.createElement(MenuDivider, null), React.createElement(MenuHeading, null, "Options"), React.createElement(MenuItem, {
      icon: React.createElement(CreateOutline, null),
      detail: "\u2318\u21E7E"
    }, "Edit dashboard"), React.createElement(MenuItem, null, "Get LookMl"), React.createElement(MenuItem, {
      icon: React.createElement(Undo, null)
    }, "Revert to original dashboard"), React.createElement(MenuDivider, null), React.createElement(MenuItem, {
      description: "some description",
      icon: React.createElement(Download, null),
      detail: "\u2325\u21E7D"
    }, "Edit dashboard"), React.createElement(MenuDivider, null), React.createElement(MenuItem, {
      icon: React.createElement(DeleteOutline, null)
    }, "Move to Trash"))
  }, React.createElement(IconButton, {
    label: "Dashboard actions",
    size: "medium",
    icon: React.createElement(MoreVert, null)
  })), React.createElement(Menu, {
    iconGutter: true,
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      icon: React.createElement(CreateOutline, null)
    }, "Rename"), React.createElement(MenuItem, {
      description: "some description",
      icon: React.createElement(DeleteOutline, null)
    }, "Delete"), React.createElement(MenuDivider, null), React.createElement(MenuItem, {
      icon: React.createElement(CreateNewFolder, null)
    }, "Folder"), React.createElement(MenuItem, {
      icon: React.createElement(ExploreOutline, null)
    }, "Model"), React.createElement(MenuItem, {
      icon: React.createElement(TableChart, null)
    }, "New Item"), React.createElement(MenuItem, {
      icon: React.createElement(TableChart, null)
    }, "View"), React.createElement(MenuItem, {
      icon: React.createElement(Dashboard, null)
    }, "Dashboard"), React.createElement(MenuItem, {
      icon: React.createElement(TextSnippet, null)
    }, "Document"), React.createElement(MenuItem, {
      icon: React.createElement(AttachFile, null)
    }, "Generic LookML file"))
  }, React.createElement(IconButton, {
    label: "IDE actions",
    size: "medium",
    icon: React.createElement(MoreVert, null)
  })), React.createElement(Menu, {
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, null, "Rename"), React.createElement(MenuItem, null, "Delete"), React.createElement(MenuDivider, null), React.createElement(MenuHeading, null, "Create"), React.createElement(MenuItem, null, "Folder"), React.createElement(MenuItem, null, "Model"), React.createElement(MenuItem, null, "New Item"), React.createElement(MenuItem, null, "View"), React.createElement(MenuItem, null, "Dashboard"), React.createElement(MenuItem, null, "Document"), React.createElement(MenuItem, null, "Generic LookML file"))
  }, React.createElement(IconButton, {
    label: "Menu No Icons",
    size: "medium",
    icon: React.createElement(MoreVert, null)
  })));
};
RealisticMenus.parameters = {
  storyshots: {
    disable: true
  }
};

const getRandomInteger = limit => Math.floor(Math.random() * limit);

const array95 = Array.from(Array(95), (_, i) => String(i + 1));
const array3000 = Array.from(Array(3000), (_, i) => {
  const rand = getRandomInteger(15);
  const description = rand % 3 === 0 ? 'Description' : undefined;
  return {
    description,
    label: String(i + 1)
  };
});
const preamble = `We the People of the United States, in Order to form a more perfect Union,
establish Justice, insure domestic Tranquility, provide for the common
defense, promote the general Welfare, and secure the Blessings of Liberty
to ourselves and our Posterity, do ordain and establish this Constitution
for the United States of America.`;

const getString = (lengthLimit = 30) => {
  const startLimit = preamble.length - 50;
  const length = getRandomInteger(lengthLimit);
  const startIndex = getRandomInteger(startLimit);
  return preamble.substr(startIndex, length);
};

const getItems = labelLength => {
  const num = getRandomInteger(8);
  const itemsLength = Math.pow(num, 2);
  return Array.from(Array(itemsLength), (_, i) => {
    return {
      label: `${i}: ${getString(labelLength)}`
    };
  });
};

const getGroups = labelLength => Array.from(Array(100), (_, i) => ({
  items: getItems(labelLength),
  label: `${i}: ${getString()}`
}));

export const LongMenus = () => {
  const {
    value,
    toggle
  } = useToggle(true);
  const {
    value: longLabels,
    toggle: toggleLongLabels
  } = useToggle();
  const groups = useMemo(() => {
    return getGroups(longLabels ? 120 : 30);
  }, [longLabels]);
  return React.createElement(SpaceVertical, {
    align: "start",
    p: "u8"
  }, React.createElement(Space, null, React.createElement(Menu, {
    content: array95.map((item, i) => React.createElement(MenuItem, {
      key: i
    }, item))
  }, React.createElement(Button, null, "No windowing (95)")), React.createElement(Menu, {
    content: groups.slice(0, 5).map(({
      label,
      items
    }, index) => React.createElement(Fragment, {
      key: `${label}-${index}`
    }, React.createElement(MenuDivider, null), React.createElement(MenuHeading, null, label), items.map((item, index2) => React.createElement(MenuItem, {
      key: `${item.label}-${index2}`
    }, item.label))))
  }, React.createElement(Button, null, "No windowing (groups)"))), React.createElement(Space, {
    align: "start"
  }, React.createElement(Menu, {
    width: 300,
    windowing: !value ? false : undefined,
    content: array3000.map((item, i) => React.createElement(MenuItem, {
      key: i
    }, item.label))
  }, React.createElement(Button, null, "Windowing (3k)")), React.createElement(Menu, {
    width: 300,
    windowing: !value ? false : undefined,
    content: array3000.map((item, i) => React.createElement(MenuItem, {
      key: i,
      description: item.description
    }, item.label))
  }, React.createElement(Button, null, "Windowing (description)")), React.createElement(Menu, {
    width: 300,
    windowing: !value ? false : undefined,
    content: groups.map(({
      label,
      items
    }, index) => [React.createElement(MenuDivider, {
      key: `${label}-${index}-divider`
    }), React.createElement(MenuHeading, {
      key: `${label}-${index}-heading`
    }, label), ...items.map((item, index2) => React.createElement(MenuItem, {
      key: `${item.label}-${index2}`
    }, item.label))])
  }, React.createElement(Button, null, "Windowing (groups)")), React.createElement(FieldToggleSwitch, {
    on: value,
    label: "Enable windowing",
    onChange: toggle
  }), React.createElement(FieldToggleSwitch, {
    on: longLabels,
    onChange: toggleLongLabels,
    label: "Use longer labels",
    description: "The scrolling will become jittery"
  })));
};
LongMenus.parameters = {
  storyshots: {
    disable: true
  }
};
export const WithDialog = () => {
  const {
    value,
    setOn,
    setOff
  } = useToggle();

  const handleClick = e => {
    e.preventDefault();
    setOn();
  };

  return React.createElement(React.Fragment, null, React.createElement(Menu, {
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      onClick: setOn
    }, "Open Dialog"), React.createElement(MenuItem, {
      onClick: handleClick
    }, "Open Dialog, keep Menu open"))
  }, React.createElement(Button, null, "Menu with Dialog")), React.createElement(Dialog, {
    isOpen: value,
    onClose: setOff
  }, React.createElement(DialogLayout, {
    footer: React.createElement(Button, {
      onClick: setOff
    }, "Close"),
    header: "A Dialog"
  }, "Dialog must be placed outside of Menu")));
};
WithDialog.parameters = {
  storyshots: {
    disable: true
  }
};
export const WithTooltip = () => {
  const {
    value,
    toggle
  } = useToggle();
  return React.createElement(Space, null, React.createElement(Menu, {
    iconGutter: true,
    content: menuItems,
    disabled: value
  }, React.createElement(Tooltip, {
    content: "Open the menu",
    placement: "right"
  }, React.createElement(Button, {
    disabled: value
  }, "Menu with Tooltip"))), React.createElement(FieldToggleSwitch, {
    on: value,
    onChange: toggle,
    label: "Disabled"
  }));
};
WithTooltip.parameters = {
  storyshots: {
    disable: true
  }
};
export const ArrowKeyNavigation = () => React.createElement(SpaceVertical, {
  align: "start"
}, React.createElement(Button, null, "Above"), React.createElement(Heading, null, "Menu"), React.createElement(MenuList, null, React.createElement(MenuItem, null, "1"), React.createElement(MenuItem, null, "2"), React.createElement(MenuItem, null, "3")), React.createElement(Heading, null, "Tabs"), React.createElement(Tabs, null, React.createElement(TabList, null, React.createElement(Tab, null, "1"), React.createElement(Tab, null, "2"), React.createElement(Tab, null, "3")), React.createElement(TabPanels, null, React.createElement(TabPanel, null, "One"), React.createElement(TabPanel, null, "Two"), React.createElement(TabPanel, null, "Three"))), React.createElement(Button, null, "Below"));
ArrowKeyNavigation.parameters = {
  storyshots: {
    disable: true
  }
};
export const NestedMenu = () => {
  const getOnClick = text => e => {
    alert(`You clicked ${text}`);

    if (text === 'preventDefault') {
      e.preventDefault();
    }
  };

  const nestedMenu = React.createElement(React.Fragment, null, React.createElement(MenuItem, {
    nestedMenu: React.createElement(MenuItem, {
      onClick: getOnClick('Another Level')
    }, "Another Level"),
    onClick: getOnClick('Sub Item')
  }, "Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('Another Sub Item')
  }, "Another Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('Third Sub Item')
  }, "Third Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('4th Sub Item')
  }, "4th Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('Fifth Sub Item')
  }, "Fifth Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('preventDefault')
  }, "preventDefault"));
  const content = React.createElement(React.Fragment, null, React.createElement(MenuItem, {
    icon: React.createElement(Create, null),
    onClick: getOnClick('Edit')
  }, "Edit"), React.createElement(MenuItem, {
    icon: React.createElement(Download, null),
    onClick: getOnClick('Download')
  }, "Download"), React.createElement(MenuDivider, null), React.createElement(MenuHeading, null, "Sub Menus"), React.createElement(MenuItem, {
    nestedMenu: nestedMenu
  }, "Sub Menu"), React.createElement(MenuItem, {
    onClick: getOnClick('Sub Menu'),
    nestedMenu: nestedMenu
  }, "Sub Menu - with onClick"), React.createElement(MenuItem, {
    icon: React.createElement(Favorite, null),
    onClick: getOnClick('Favorite')
  }, "Favorite"), React.createElement(MenuItem, {
    nestedMenu: nestedMenu
  }, "Sub Menu 3"));
  return React.createElement(Flex, {
    height: "100vh",
    flexDirection: "column",
    justifyContent: "space-between"
  }, React.createElement(Space, {
    between: true
  }, React.createElement(Menu, {
    iconGutter: true,
    content: content
  }, React.createElement(Button, null, "Nested Menu")), React.createElement(Menu, {
    iconGutter: true,
    content: content
  }, React.createElement(Button, null, "Right-aligned"))), React.createElement(Space, {
    between: true
  }, React.createElement(Menu, {
    iconGutter: true,
    content: content
  }, React.createElement(Button, null, "Bottom-left-aligned")), React.createElement(Menu, {
    iconGutter: true,
    content: content
  }, React.createElement(Button, null, "Bottom-right-aligned"))));
};
NestedMenu.parameters = {
  storyshots: {
    disable: true
  }
};
export const NestedMenuAndFocusableDetails = () => {
  const getOnClick = text => e => {
    alert(`You clicked ${text}`);

    if (text === 'preventDefault') {
      e.preventDefault();
    }
  };

  const nestedMenu = React.createElement(React.Fragment, null, React.createElement(MenuItem, {
    onClick: getOnClick('Sub Item')
  }, "Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('Another Sub Item')
  }, "Another Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('Third Sub Item')
  }, "Third Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('4th Sub Item')
  }, "4th Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('Fifth Sub Item')
  }, "Fifth Sub Item"), React.createElement(MenuItem, {
    onClick: getOnClick('preventDefault')
  }, "preventDefault"));
  const content = React.createElement(React.Fragment, null, React.createElement(MenuItem, {
    itemRole: "none",
    icon: React.createElement(Download, null),
    detail: React.createElement(IconButton, {
      label: "Favorite",
      icon: React.createElement(MoreVert, null)
    })
  }, "Download"), React.createElement(MenuItem, {
    nestedMenu: nestedMenu
  }, "Sub Menu"), React.createElement(MenuItem, {
    onClick: getOnClick('Sub Menu'),
    nestedMenu: nestedMenu
  }, "Sub Menu - with onClick"));
  return React.createElement(Menu, {
    content: content
  }, React.createElement(Button, null, "Nested Menu"));
};
NestedMenuAndFocusableDetails.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Menu.stories.js.map