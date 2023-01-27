
import React, { useState } from 'react';
import { Tabs2, Tab2, Paragraph, Button } from '../..';
export default function Controlled() {
  const [currentTabId, setTabId] = useState('cats');
  return React.createElement(React.Fragment, null, React.createElement(Paragraph, null, "The current selected tab is: ", currentTabId), React.createElement(Button, {
    onClick: () => setTabId('cats')
  }, "Switch to Cats"), React.createElement(Button, {
    onClick: () => setTabId('dogs')
  }, "Switch to Dogs"), React.createElement(Tabs2, {
    tabId: currentTabId,
    onTabChange: setTabId
  }, React.createElement(Tab2, {
    id: "cats",
    label: "Cats"
  }, "Here's awesome story about cats"), React.createElement(Tab2, {
    id: "dogs",
    label: "Dogs"
  }, "Cats are way better than dogs. Go to other tab")));
}
//# sourceMappingURL=Controlled.js.map