
import React from 'react';
import { List } from '../../List';
import { ListItem } from '../../ListItem';
import { Panels, usePanel } from '..';
const HookInner = () => {
  const {
    panel,
    setOpen
  } = usePanel({
    content: 'Panel content',
    title: 'Panel Hook'
  });
  return React.createElement(React.Fragment, null, React.createElement(ListItem, {
    onClick: () => setOpen(true)
  }, "Option A"), panel);
};
export default function Hook() {
  return React.createElement(Panels, null, React.createElement(List, null, React.createElement(HookInner, null), React.createElement(ListItem, null, "Option B")));
}
//# sourceMappingURL=Hook.js.map