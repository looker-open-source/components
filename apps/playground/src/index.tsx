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

import { Tab, TabPanels, ComponentsProvider } from '@looker/components'
import React, {
  Children,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { render } from 'react-dom'

type Tab2Props = {
  id?: string
  label: string
  children: ReactNode
}
const Tab2 = ({ children }: Tab2Props) => <>{children}</>

type Tabs2Props = {
  children: ReactElement<Tab2Props> | ReactElement<Tab2Props>[]

  /* Which tab to show on load */
  defaultTabId?: string
  /* Controlled: which tab to show now */
  tabId?: string
  /* Callback called when tabId changes */
  onTabChange?: (tabId: string) => void
}

const TabList2: FC = ({ children, ...props }) => (
  <div aria-label="Tabs" role="tablist" {...props}>
    {children}
  </div>
)

type Tabs2TabStack = Required<Tab2Props>[]

const Tabs2 = ({
  children,
  onTabChange,
  defaultTabId,
  ...props
}: Tabs2Props) => {
  const [tabs, setTabs] = useState<Tabs2TabStack>([])
  const [stateTabId, setCurrentTabId] = useState(defaultTabId || '')
  const tabId = props.tabId || stateTabId

  useEffect(() => {
    const draftTabs: Tabs2TabStack = Children.map(
      children,
      (child: JSX.Element, index) => ({
        children: child,
        id: child.props.id || String(index),
        label: child.props.label,
      })
    )

    setTabs(draftTabs)

    if (
      defaultTabId &&
      draftTabs.length > 0 &&
      !draftTabs.find((tab) => tab.id === defaultTabId)
    ) {
      setCurrentTabId(draftTabs[0].id)
    }
  }, [children, defaultTabId, setTabs, setCurrentTabId])

  const handleTabChange = (draftId: string) =>
    onTabChange ? onTabChange(draftId) : setCurrentTabId(draftId)

  const labels = tabs.map(({ label, id }, index) => (
    <Tab
      key={index}
      selected={id === tabId}
      onClick={() => handleTabChange(id)}
    >
      {label}
    </Tab>
  ))

  const currentTab = tabs.find((tab) => tab.id === tabId)

  return (
    <>
      <TabList2>{labels}</TabList2>
      {/* NOTE: `as any as JSX.Element` on line 115 should be removed by extracting `TabPanels2` from `TabPanels` */}
      {currentTab && (
        <TabPanels>{currentTab.children as any as JSX.Element}</TabPanels>
      )}
    </>
  )
}

const App = () => (
  <ComponentsProvider>
    <Tabs2 defaultTabId="dogs">
      <Tab2 id="cats" label="Cats">
        Here's awesome story about cats
      </Tab2>
      <Tab2 id="dogs" label="Dogs">
        Cats are way better than dogs. Go to other tab
      </Tab2>
      <Tab2 label="Fish">Are kinda smelly</Tab2>
    </Tabs2>
  </ComponentsProvider>
)

const rootElement = document.getElementById('container')
render(<App />, rootElement)
