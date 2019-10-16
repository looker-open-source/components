import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'
import {
  assertSnapshotShallow,
  mountWithTheme,
} from '@looker/components-test-utils'
import { theme } from '@looker/design-tokens'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { fireEvent, render } from '@testing-library/react'
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
  const tabs = shallow(
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
  expect(tabs.find('Tab')).toHaveLength(3)
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

test('clicking on tab opens correct panel', () => {
  const { getByText, queryByText } = render(<ChangingPanel />)

  expect(queryByText('this is tab1 content')).toBeInTheDocument()
  expect(queryByText('this is tab2 content')).not.toBeInTheDocument()
  fireEvent.click(getByText('tab2'))
  expect(queryByText('this is tab1 content')).not.toBeInTheDocument()
  expect(queryByText('this is tab2 content')).toBeInTheDocument()
})

const DisableTab = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

test('clicking on disable tab does not change panel', () => {
  const { getByText, queryByText } = render(<DisableTab />)

  expect(queryByText('this is tab1 content')).toBeInTheDocument()
  expect(queryByText('this is the disable tab-panel')).not.toBeInTheDocument()
  fireEvent.click(getByText('tab3'))
  expect(queryByText('this is tab1 content')).toBeInTheDocument()
  expect(queryByText('this is the disable tab-panel')).not.toBeInTheDocument()
})

const TabHooks = () => {
  const tab = useTabs()
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TabList {...tab}>
          <Tab>Tab Hook 1</Tab>
          <Tab>Tab Hook 2</Tab>
        </TabList>
        <TabPanels {...tab}>
          <TabPanel>1 this is the panel of tab hook 1</TabPanel>
          <TabPanel>2 this is the panel of tab hook 2</TabPanel>
        </TabPanels>
      </div>
    </ThemeProvider>
  )
}

test('hooks working', () => {
  const { getByText, queryByText } = render(<TabHooks />)

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
