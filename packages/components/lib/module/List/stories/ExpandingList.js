

import React, { useState } from 'react';
import { List } from '../';
import { ListItem, Space } from '../../';
export default function ExpandingList() {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  return React.createElement(Space, {
    align: "start"
  }, React.createElement(List, null, React.createElement(ListItem, null, "Cheddar"), React.createElement(ListItem, null, "Gouda"), showMore ? React.createElement(React.Fragment, null, React.createElement(ListItem, null, "Swiss"), React.createElement(ListItem, null, "American"), React.createElement(ListItem, {
    onClick: () => setShowMore(false),
    description: "Keyboard nav should still work"
  }, "Show Less")) : React.createElement(ListItem, {
    onClick: () => setShowMore(true),
    description: "To test keyboard nav"
  }, "Show More")), React.createElement(List, null, showMore2 ? React.createElement(React.Fragment, null, React.createElement(ListItem, {
    key: "0"
  }, "Cheddar"), React.createElement(ListItem, {
    key: "1"
  }, "Swiss"), React.createElement(ListItem, {
    key: "2"
  }, "Gouda"), React.createElement(ListItem, {
    key: "3"
  }, "American"), React.createElement(ListItem, {
    key: "4",
    onClick: () => setShowMore2(false),
    description: "Replaces all items"
  }, "Show less")) : React.createElement(React.Fragment, null, React.createElement(ListItem, {
    key: "5"
  }, "Cheddar"), React.createElement(ListItem, {
    key: "6"
  }, "Gouda"), React.createElement(ListItem, {
    key: "7",
    onClick: () => setShowMore2(true),
    description: "Replaces all items"
  }, "Show more"))));
}
//# sourceMappingURL=ExpandingList.js.map