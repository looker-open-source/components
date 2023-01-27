
import React from 'react';
import { SpaceVertical } from '../../Layout';
import { Panel, Panels } from '..';
import { Drawer } from '../../Drawer';
import { Paragraph } from '../../Text';
import { Button } from '../../Button';
export default function WithDrawer() {
  return React.createElement(Drawer, {
    placement: "left",
    content: React.createElement(Panels, null, React.createElement(SpaceVertical, null, React.createElement(Panel, {
      defaultOpen: true,
      direction: "right",
      title: "Some title",
      content: "Tree should be hidden"
    }, React.createElement(Button, null, "Open Panel")), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text")))
  }, React.createElement(Button, null, "Open Drawer"));
}
//# sourceMappingURL=WithDrawer.js.map