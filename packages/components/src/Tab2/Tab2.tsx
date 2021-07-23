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

import React, { Children, cloneElement, FC, ReactNode, useState } from 'react'
import { Tab, TabPanels, useID } from '@looker/components'
import { CompatibleHTMLProps } from '@looker/design-tokens'

type Tabs2Props = CompatibleHTMLProps<HTMLElement> & {
  // value?: string
  // onChange
  defaultValue?: string
}

const TabList2: FC = ({ children, ...props }) => (
  <div aria-label="Tabs" role="tablist" {...props}>
    {children}
  </div>
)

const Tabs2: FC<Tabs2Props> = ({ children, defaultValue, ...props }) => {
  const id = useID(props.id)
  const [currentTabId, setCurrentTabId] = useState(defaultValue)

  const tabList = Children.map(
    children,
    (child: JSX.Element, index: number) => {
      const tabId = child.props.id || String(index)
      return {
        label: child.props.label,
        id: tabId,
        content: cloneElement(child, { id: `${id}-${tabId}` }),
      }
    }
  )

  const labels = tabList.map(({ label, id }) => (
    <Tab selected={id === currentTabId} onClick={() => setCurrentTabId(id)}>
      {label}
    </Tab>
  ))
  const currentTab = tabList.find(({ id }) => id === currentTabId)

  return (
    <>
      <TabList2>{labels}</TabList2>
      {currentTab && <TabPanels>{currentTab.content}</TabPanels>}
    </>
  )
}

const Tab2: FC<{ id?: string; label: ReactNode }> = ({ children }) => {
  return <div>{children}</div>
}
