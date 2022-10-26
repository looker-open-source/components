import React, { useState } from 'react';
import { FieldText } from '../Form';
import { Box2 } from '../Layout';
import { Tab2, Tabs2 } from './';
export default {
  component: Tabs2,
  title: 'Tabs2'
};

const Template = args => React.createElement(Box2, {
  height: "8rem"
}, React.createElement(Tabs2, args, React.createElement(Tab2, {
  id: "cats",
  label: "Cats"
}, "Here's awesome story about cats"), React.createElement(Tab2, {
  id: "dogs",
  label: "Dogs"
}, "Cats are way better than dogs. Go to other tab"), React.createElement(Tab2, {
  label: "Fish"
}, "Are kinda smelly")));

export const Basic = Template.bind({});
export const Distributed = Template.bind({});
Distributed.args = {
  distributed: true
};
export const DistributedScrolling = () => {
  const tabs = new Array(20).fill('Tab2');
  return React.createElement(Box2, {
    height: "8rem"
  }, React.createElement(Tabs2, {
    distributed: true
  }, tabs.map((value, index) => React.createElement(Tab2, {
    label: `Hello World ${index}`,
    key: index
  }, "This is ", value, " ", index))));
};
export const DefaultTab = Template.bind({});
DefaultTab.args = {
  defaultTabId: 'dogs'
};
export const Controlled = () => {
  const [currentTabId, setTabId] = useState('cats');
  return React.createElement(React.Fragment, null, React.createElement("p", null, "The current selected tab is: ", currentTabId), React.createElement("button", {
    onClick: () => setTabId('cats')
  }, "Switch to Cats"), React.createElement("button", {
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
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
export const Scrolling = () => {
  const tabs = new Array(20).fill('Tab2');
  return React.createElement(Tabs2, null, tabs.map((value, index) => React.createElement(Tab2, {
    label: `Hello World ${index}`,
    key: index
  }, "This is ", value, " ", index)));
};
Scrolling.parameters = {
  storyshots: {
    disable: true
  }
};
export const Disabled = () => {
  return React.createElement(Box2, {
    height: "8rem"
  }, React.createElement(Tabs2, null, React.createElement(Tab2, {
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
  }, "Humans tab is disabled")));
};
export const StateChanges = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.currentTarget.value);
  };

  return React.createElement(Tabs2, null, React.createElement(Tab2, {
    label: "Tab 1"
  }, "Go to Tab 2 and try entering text in the field"), React.createElement(Tab2, {
    label: "Tab 2"
  }, React.createElement(FieldText, {
    value: value,
    onChange: handleChange
  })));
};
StateChanges.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Tabs2.stories.js.map