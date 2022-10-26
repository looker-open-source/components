/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { Children, useEffect, useState } from 'react'
import { Tab2 } from './Tab2'
import { TabList2 } from './TabList2'
import { TabPanels2 } from './TabPanels2'
import type { Tabs2Props, TabStack } from './types'

// structuring the data that comes in to be in the correct shape to create each individual `Tab` and its content.
const getTabsData = <IDType extends string = string>(
  children: Tabs2Props<IDType>['children']
): TabStack<IDType> =>
  Children.map(children, child => ({
    children: child.props.children,
    disabled: child.props.disabled,
    id: (child.props.id as IDType) || child.props.label,
    label: child.props.label,
  }))

// Compare a list of tab IDs with the intended tab ID and return the latter if found
// and the first in the list otherwise
const getFallbackTabId = (enabledTabIds: string, intendedTabId?: string) => {
  const enabledTabIdsArr = JSON.parse(enabledTabIds)
  if (enabledTabIds.length === 0) return undefined
  if (intendedTabId && enabledTabIdsArr.includes(intendedTabId))
    return intendedTabId
  // select the first `Tab` that is not disabled
  return enabledTabIdsArr[0]
}

/**
 * `Tabs2` are a clickable areas (Tab2) that organizes content across different pages or areas.
 * When a Tab2 is clicked, its contents are displayed and others are hidden.
 *
 * Tabs2 is a modernized version of the `Tabs` component with a simplified
 * interface to follow conventions in other components libraries and to more closely match the controlled and uncontrolled models of our other components.
 */
export const Tabs2 = <IDType extends string = string>({
  children,
  onTabChange,
  defaultTabId,
  distributed = false,
  tabId: propsTabId,
}: Tabs2Props<IDType>) => {
  // list of all elements to be displayed as Tab and its content.
  const initialTabs = getTabsData(children)
  const [tabs, setTabs] = useState<TabStack<IDType>>(initialTabs)

  // Save a list of the non-disabled tab IDs for fallback tab selection
  // JSON.stringify for use in useEffect deps array
  const enabledTabIds = JSON.stringify(
    tabs.reduce(
      (acc: string[], tab) => (tab.disabled ? acc : [...acc, tab.id]),
      []
    )
  )

  // The identifier for connecting the `Tab` with its content
  const [currentTabId, setCurrentTabId] = useState(
    getFallbackTabId(enabledTabIds, defaultTabId)
  )
  const tabId = propsTabId || currentTabId

  useEffect(() => {
    setTabs(getTabsData(children))
  }, [children])

  useEffect(() => {
    // As the list of tabs changes, check if we need a fallback
    // or can stick with the current one
    const fallbackTabId = getFallbackTabId(enabledTabIds, currentTabId)
    if (fallbackTabId !== currentTabId) {
      setCurrentTabId(fallbackTabId)
    }
  }, [currentTabId, enabledTabIds])

  const handleTabChange = (draftId: IDType) =>
    onTabChange ? onTabChange(draftId) : setCurrentTabId(draftId)

  const labels = tabs.map(({ disabled, label, id }, index) => (
    <Tab2
      disabled={disabled}
      label={label}
      key={index}
      id={id}
      selected={id === tabId}
      onSelect={() => handleTabChange(id || label)}
    >
      {label}
    </Tab2>
  ))

  // associate the correct `Tab` to its content.
  const currentTab = tabs.find(tab => tab.id === tabId)

  return (
    <>
      <TabList2 distribute={distributed}>{labels}</TabList2>
      {currentTab && (
        <TabPanels2 id={currentTab.id}>
          {currentTab.children as JSX.Element}
        </TabPanels2>
      )}
    </>
  )
}
