import React, { Children, useEffect, useState } from 'react';
import { Tab2 } from './Tab2';
import { TabList2 } from './TabList2';
import { TabPanels2 } from './TabPanels2';

const getTabsData = children => Children.map(children, child => ({
  children: child.props.children,
  disabled: child.props.disabled,
  id: child.props.id || child.props.label,
  label: child.props.label
}));

const getFallbackTabId = (enabledTabIds, intendedTabId) => {
  const enabledTabIdsArr = JSON.parse(enabledTabIds);
  if (enabledTabIds.length === 0) return undefined;
  if (intendedTabId && enabledTabIdsArr.includes(intendedTabId)) return intendedTabId;
  return enabledTabIdsArr[0];
};

export const Tabs2 = ({
  children,
  onTabChange,
  defaultTabId,
  distributed: _distributed = false,
  tabId: propsTabId
}) => {
  const initialTabs = getTabsData(children);
  const [tabs, setTabs] = useState(initialTabs);
  const enabledTabIds = JSON.stringify(tabs.reduce((acc, tab) => tab.disabled ? acc : [...acc, tab.id], []));
  const [currentTabId, setCurrentTabId] = useState(getFallbackTabId(enabledTabIds, defaultTabId));
  const tabId = propsTabId || currentTabId;
  useEffect(() => {
    setTabs(getTabsData(children));
  }, [children]);
  useEffect(() => {
    const fallbackTabId = getFallbackTabId(enabledTabIds, currentTabId);

    if (fallbackTabId !== currentTabId) {
      setCurrentTabId(fallbackTabId);
    }
  }, [currentTabId, enabledTabIds]);

  const handleTabChange = draftId => onTabChange ? onTabChange(draftId) : setCurrentTabId(draftId);

  const labels = tabs.map(({
    disabled,
    label,
    id
  }, index) => React.createElement(Tab2, {
    disabled: disabled,
    label: label,
    key: index,
    id: id,
    selected: id === tabId,
    onSelect: () => handleTabChange(id || label)
  }, label));
  const currentTab = tabs.find(tab => tab.id === tabId);
  return React.createElement(React.Fragment, null, React.createElement(TabList2, {
    distribute: _distributed
  }, labels), currentTab && React.createElement(TabPanels2, {
    id: currentTab.id
  }, currentTab.children));
};
//# sourceMappingURL=Tabs2.js.map