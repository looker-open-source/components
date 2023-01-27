
import React from 'react';
import { Tabs2, Tab2 } from '../..';
export default function Disabled() {
  return React.createElement(Tabs2, null, React.createElement(Tab2, {
    id: "cats",
    label: "Cats"
  }, "Here's awesome story about cats"), React.createElement(Tab2, {
    id: "dogs",
    label: "Dogs"
  }, "Cats are way better than dogs. Go to other tab"), React.createElement(Tab2, {
    label: "Fish"
  }, "Are kinda smelly"), React.createElement(Tab2, {
    disabled: true,
    id: "human",
    label: "Human"
  }, "Humans tab is disabled"));
}
//# sourceMappingURL=Disabled.js.map