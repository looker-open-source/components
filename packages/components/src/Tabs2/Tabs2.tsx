/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

/**
 * `Tabs2` are a clickable areas (Tab2) that organizes content across different pages or areas.
 * When a Tab2 is clicked, its contents are displayed and others are hidden.
 *
 * Tabs2 is a modernized version of the `Tabs` component with a simplified
 * interface to follow conventions in other components libraries and to more closely match the controlled and uncontrolled models of our other components.
 */
export const Tabs2 = ({
  children,
  onTabChange,
  defaultTabId,
  distributed = false,
  tabId: propsTabId,
}: Tabs2Props) => {
  // list of all elements to be displayed as Tab and its content.
  const [tabs, setTabs] = useState<TabStack>([])
  // The identifier for connecting the `Tab` with its content
  const [currentTabId, setCurrentTabId] = useState(defaultTabId)
  const tabId = propsTabId || currentTabId

  useEffect(() => {
    // structuring the data that comes in to be in the correct shape to create each individual `Tab` and its content.
    const draftTabs: TabStack = Children.map(
      children,
      (child: JSX.Element) => ({
        children: child.props.children,
        disabled: child.props.disabled,
        id: child.props.id || child.props.label,
        label: child.props.label,
      })
    )

    setTabs(draftTabs)

    if (
      // check if the defaultTabId is passed and if not set to display the first Tab available.
      !defaultTabId &&
      draftTabs.length > 0 &&
      !draftTabs.find(tab => tab.id === defaultTabId)
    ) {
      // select the first `Tab` that is not disabled
      setCurrentTabId(
        draftTabs[draftTabs.findIndex(tab => !tab.disabled === true)].id
      )
    }
  }, [children, defaultTabId, setTabs, setCurrentTabId])

  const handleTabChange = (draftId: string) =>
    onTabChange ? onTabChange(draftId) : setCurrentTabId(draftId)

  const labels = tabs.map(({ disabled, label, id }, index) => (
    <Tab2
      disabled={disabled}
      label={label}
      key={index}
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
          {(currentTab.children as any) as JSX.Element}
        </TabPanels2>
      )}
    </>
  )
}
