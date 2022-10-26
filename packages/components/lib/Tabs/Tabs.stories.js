import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["tabCount", "tabPrefix"];
import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../Button';
import { Space } from '../Layout/Space';
import { Tab, Tabs, TabList, TabPanel, TabPanels } from './';

const Template = _ref => {
  let {
    tabCount,
    tabPrefix
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const tabs = new Array(tabCount).fill('tab');
  return React.createElement(Tabs, null, React.createElement(TabList, args, tabs.map((_k, index) => React.createElement(Tab, {
    key: index
  }, tabPrefix, " ", index))), React.createElement(TabPanels, null, tabs.map((_k, index) => React.createElement(TabPanel, {
    key: index
  }, "This is ", index))));
};

export const Basic = Template.bind({});
Basic.args = {
  tabCount: 3,
  tabPrefix: 'My Awesome Tab'
};
export const Distributed = Template.bind({});
Distributed.args = {
  distribute: true,
  tabCount: 3,
  tabPrefix: 'My Awesome Tab'
};
export const DistributedScrolling = Template.bind({});
DistributedScrolling.args = {
  distribute: true,
  tabCount: 20,
  tabPrefix: 'My Awesome Tab'
};
export const Scrolling = Template.bind({});
Scrolling.args = {
  tabCount: 20,
  tabPrefix: 'My Awesome Tab'
};
export const Controlled = () => {
  const [currentTabIndex, setTab] = useState(0);
  return React.createElement(React.Fragment, null, React.createElement(Space, null, React.createElement(Button, {
    onClick: () => setTab(0)
  }, "Go to A"), React.createElement(Button, {
    onClick: () => setTab(1)
  }, "Go to B")), React.createElement(Tabs, {
    index: currentTabIndex,
    onChange: setTab
  }, React.createElement(TabList, null, React.createElement(Tab, null, "A"), React.createElement(Tab, null, "B")), React.createElement(TabPanels, null, React.createElement(TabPanel, null, "A"), React.createElement(TabPanel, null, "B"))));
};
export default {
  argTypes,
  component: Tabs,
  title: 'Tabs'
};
//# sourceMappingURL=Tabs.stories.js.map