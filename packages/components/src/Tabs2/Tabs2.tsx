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

import React, {
  Children,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { Tab, TabList, TabPanels } from '../Tabs'

type Tab2Props = {
  children: ReactNode
  disabled?: boolean
  id?: string
  label: string
}

export const Tab2: FC<Tab2Props> = ({ children }) => <>{children}</>

// export const TabList2: FC = ({ children, ...props }) => {
//   const { t } = useTranslation('TabList2')
//   return (
//     <div aria-label={t('Tabs')} role="tablist" {...props}>
//       {children}
//     </div>
//   )
// }

type Tabs2Props = {
  children: ReactElement<Tab2Props> | ReactElement<Tab2Props>[]

  /* Which tab to show on load */
  defaultTabId?: string

  /* Callback called when tabId changes */
  onTabChange?: (tabId: string) => void

  /* Controlled: which tab to show now */
  tabId?: string
}

type Tabs2TabStack = Required<Tab2Props>[]

export const Tabs2 = ({
  children,
  onTabChange,
  defaultTabId,
  ...props
}: Tabs2Props) => {
  const [tabs, setTabs] = useState<Tabs2TabStack>([])
  const [stateTabId, setCurrentTabId] = useState(defaultTabId)
  const tabId = props.tabId || stateTabId

  useEffect(() => {
    const draftTabs: Tabs2TabStack = Children.map(
      children,
      (child: JSX.Element, index) => ({
        children: child,
        disabled: child.props.disabled,
        id: child.props.id || String(index),
        label: child.props.label,
      })
    )

    setTabs(draftTabs)

    if (
      !defaultTabId &&
      draftTabs.length > 0 &&
      !draftTabs.find((tab) => tab.id === defaultTabId)
    ) {
      setCurrentTabId(draftTabs[0].id)
    }
  }, [children, defaultTabId, setTabs, setCurrentTabId])

  const handleTabChange = (draftId: string) =>
    onTabChange ? onTabChange(draftId) : setCurrentTabId(draftId)

  const labels = tabs.map(({ disabled, label, id }, index) => (
    <Tab
      disabled={disabled}
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
      <TabList>{labels}</TabList>
      {/* NOTE: `as any as JSX.Element` should be removed by extracting `TabPanels2` from `TabPanels` */}
      {currentTab && (
        <TabPanels>{currentTab.children as any as JSX.Element}</TabPanels>
      )}
    </>
  )
}
