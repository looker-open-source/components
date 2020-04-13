/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import {
  assertSnapshotShallow,
  mountWithTheme,
  renderWithTheme,
  shallowWithTheme,
} from '@looker/components-test-utils'
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { Tab } from './Tab'
import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import { TabPanels } from './TabPanels'
import { Tabs, useTabs } from './Tabs'

test('Tabs snapshot works as expected', () => {
  assertSnapshotShallow(
    <Tabs>
      <TabList>
        <Tab>tab1</Tab>
        <Tab>tab2</Tab>
        <Tab disabled>tab3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>this is tab1 content</TabPanel>
        <TabPanel>this is tab2 content</TabPanel>
        <TabPanel>this is tab3 content</TabPanel>
      </TabPanels>
    </Tabs>
  )
})

test('shows the correct number of navigation tabs', () => {
  const tabs = shallowWithTheme(
    <Tabs>
      <TabList>
        <Tab>tab1</Tab>
        <Tab>tab2</Tab>
        <Tab disabled>tab3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>this is tab1 content</TabPanel>
        <TabPanel>this is tab2 content</TabPanel>
        <TabPanel>this is tab3 content</TabPanel>
      </TabPanels>
    </Tabs>
  )
  expect(tabs.find(Tab)).toHaveLength(3)
})

test('starts with Tab at index 0 opened', () => {
  const tabs = mountWithTheme(
    <Tabs>
      <TabList>
        <Tab>tab1</Tab>
        <Tab>tab2</Tab>
        <Tab disabled>tab3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>this is tab1 content</TabPanel>
        <TabPanel>this is tab2 content</TabPanel>
        <TabPanel>this is tab3 content</TabPanel>
      </TabPanels>
    </Tabs>
  )

  const EachTabPanel: any = tabs
    .find(TabPanels)
    .find(TabPanel)
    .map((panel: any) => panel.props())

  expect(EachTabPanel[0].children).toEqual('this is tab1 content')
  expect(EachTabPanel[0].selected).toEqual(true)
  expect(EachTabPanel[1].selected).toEqual(false)
  expect(EachTabPanel[2].selected).toEqual(false)
})

const ChangingPanel = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>tab1</Tab>
        <Tab>tab2</Tab>
        <Tab disabled>tab3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>this is tab1 content</TabPanel>
        <TabPanel>this is tab2 content</TabPanel>
        <TabPanel>this is tab3 content</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

test('clicking on tab opens correct panel', () => {
  const { getByText, queryByText } = renderWithTheme(<ChangingPanel />)

  expect(queryByText('this is tab1 content')).toBeInTheDocument()
  expect(queryByText('this is tab2 content')).not.toBeInTheDocument()
  fireEvent.click(getByText('tab2'))
  expect(queryByText('this is tab1 content')).not.toBeInTheDocument()
  expect(queryByText('this is tab2 content')).toBeInTheDocument()
})

const DisableTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>tab1</Tab>
        <Tab>tab2</Tab>
        <Tab disabled>tab3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>this is tab1 content</TabPanel>
        <TabPanel>this is tab2 content</TabPanel>
        <TabPanel>this is the disable tab-panel</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

test('clicking on disable tab does not change panel', () => {
  const { getByText, queryByText } = renderWithTheme(<DisableTab />)

  expect(queryByText('this is tab1 content')).toBeInTheDocument()
  expect(queryByText('this is the disable tab-panel')).not.toBeInTheDocument()
  fireEvent.click(getByText('tab3'))
  expect(queryByText('this is tab1 content')).toBeInTheDocument()
  expect(queryByText('this is the disable tab-panel')).not.toBeInTheDocument()
})

const TabHooks = () => {
  const tab = useTabs()
  return (
    <>
      <TabList {...tab}>
        <Tab>Tab Hook 1</Tab>
        <Tab>Tab Hook 2</Tab>
      </TabList>
      <TabPanels {...tab}>
        <TabPanel>1 this is the panel of tab hook 1</TabPanel>
        <TabPanel>2 this is the panel of tab hook 2</TabPanel>
      </TabPanels>
    </>
  )
}

test('hooks working', () => {
  const { getByText, queryByText } = renderWithTheme(<TabHooks />)

  expect(queryByText('1 this is the panel of tab hook 1')).toBeInTheDocument()
  expect(
    queryByText('2 this is the panel of tab hook 2')
  ).not.toBeInTheDocument()
  fireEvent.click(getByText('Tab Hook 2'))
  expect(
    queryByText('1 this is the panel of tab hook 1')
  ).not.toBeInTheDocument()
  expect(queryByText('2 this is the panel of tab hook 2')).toBeInTheDocument()
})

describe('focus behavior', () => {
  const TabTest = () => (
    <Tabs>
      <TabList>
        <Tab>tab1</Tab>
        <Tab>tab2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>this is tab1 content</TabPanel>
        <TabPanel>this is tab2 content</TabPanel>
      </TabPanels>
    </Tabs>
  )

  test('Tab Focus: does not render focus ring after click', () => {
    const { getByText } = renderWithTheme(<TabTest />)

    fireEvent.click(getByText('tab1'))
    expect(getByText('tab1')).toMatchSnapshot()
  })

  test('Tab Focus: renders focus ring for keyboard navigation', () => {
    const { getByText } = renderWithTheme(<TabTest />)

    fireEvent.keyUp(getByText('tab2'), { charCode: 9, code: 9, key: 'Tab' })
    expect(getByText('tab2')).toMatchSnapshot()
  })
})
