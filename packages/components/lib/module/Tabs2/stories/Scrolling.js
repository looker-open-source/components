
import React from 'react';
import { Tabs2, Tab2 } from '../..';
export default function Scrolling() {
  const tabs = new Array(20).fill('Tab2');
  return React.createElement(Tabs2, null, tabs.map((value, index) => React.createElement(Tab2, {
    label: `Hello World ${index}`,
    key: index
  }, "This is ", value, " ", index)));
}
//# sourceMappingURL=Scrolling.js.map