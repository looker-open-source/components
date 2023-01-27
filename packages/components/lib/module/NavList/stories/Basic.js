

import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { NavList, ListItem } from '../..';
export default function Basic(props) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return React.createElement(NavList, props, React.createElement(ListItem, {
    description: "Description",
    detail: "Interesting details",
    icon: React.createElement(MaterialIcons.Home, null),
    selected: true
  }, "Explore"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.Info, null),
    onClick: handleClick,
    selected: selected,
    truncate: {
      description: "It's an item"
    }
  }, "Develop"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.Info, null),
    truncate: {
      description: 'Word Document - Last update 3 days ago'
    }
  }, "This is a really long navigation list item that should get truncated at some point waaaayyyy out in the nether regions of a long line of text"));
}
//# sourceMappingURL=Basic.js.map