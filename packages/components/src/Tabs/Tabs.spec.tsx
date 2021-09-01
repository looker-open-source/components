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

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tab } from './Tab'
import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import { TabPanels } from './TabPanels'
import { Tabs, useTabs } from './Tabs'

test('shows the correct number of navigation tabs', () => {
  renderWithTheme(
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
  expect(screen.getAllByRole('tab')).toHaveLength(3)
})

test('starts with Tab at index 0 opened', () => {
  renderWithTheme(
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

  expect(screen.getByText('this is tab1 content')).toBeInTheDocument()
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
  renderWithTheme(<ChangingPanel />)

  expect(screen.queryByText('this is tab1 content')).toBeInTheDocument()
  expect(screen.queryByText('this is tab2 content')).not.toBeInTheDocument()
  fireEvent.click(screen.getByText('tab2'))
  expect(screen.queryByText('this is tab1 content')).not.toBeInTheDocument()
  expect(screen.queryByText('this is tab2 content')).toBeInTheDocument()
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
  renderWithTheme(<DisableTab />)

  expect(screen.queryByText('this is tab1 content')).toBeInTheDocument()
  expect(
    screen.queryByText('this is the disable tab-panel')
  ).not.toBeInTheDocument()
  fireEvent.click(screen.getByText('tab3'))
  expect(screen.queryByText('this is tab1 content')).toBeInTheDocument()
  expect(
    screen.queryByText('this is the disable tab-panel')
  ).not.toBeInTheDocument()
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
  renderWithTheme(<TabHooks />)

  expect(
    screen.queryByText('1 this is the panel of tab hook 1')
  ).toBeInTheDocument()
  expect(
    screen.queryByText('2 this is the panel of tab hook 2')
  ).not.toBeInTheDocument()
  fireEvent.click(screen.getByText('Tab Hook 2'))
  expect(
    screen.queryByText('1 this is the panel of tab hook 1')
  ).not.toBeInTheDocument()
  expect(
    screen.queryByText('2 this is the panel of tab hook 2')
  ).toBeInTheDocument()
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
    renderWithTheme(<TabTest />)
    fireEvent.click(screen.getByText('tab1'))
    // eslint-disable-next-line jest-dom/prefer-to-have-style
    expect(screen.getByText('tab1').style.boxShadow).toEqual('')
  })

  test('Tab Focus: renders focus ring for keyboard navigation', () => {
    renderWithTheme(<TabTest />)
    fireEvent.keyUp(screen.getByText('tab2'), {
      charCode: 9,
      code: 9,
      key: 'Tab',
    })
    expect(screen.getByText('tab2')).toHaveStyle(
      'box-shadow: 0 0 0 0.15rem rgba(151,133,242,0.25);'
    )
  })

  test('Tab Focus: By default, TabPanel is not tabbable', () => {
    renderWithTheme(
      <Tabs>
        <TabList>
          <Tab>tab1</Tab>
          <Tab>tab2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <button>Some button</button>
          </TabPanel>
          <TabPanel>this is tab2 content</TabPanel>
        </TabPanels>
      </Tabs>
    )
    userEvent.tab()
    expect(screen.getByText('tab1')).toHaveFocus()

    userEvent.tab()
    expect(screen.getByText('Some button')).toHaveFocus()
  })

  test('Tab Focus: TabPanel can use "isTabStop" prop to become tabbable element', () => {
    renderWithTheme(
      <Tabs>
        <TabList>
          <Tab>tab1</Tab>
          <Tab>tab2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel isTabStop>
            <button>Some button</button>
          </TabPanel>
          <TabPanel>this is tab2 content</TabPanel>
        </TabPanels>
      </Tabs>
    )
    userEvent.tab()
    expect(screen.getByText('tab1')).toHaveFocus()

    const button = screen.getByText('Some button')
    userEvent.tab()
    expect(button.closest('div'))

    userEvent.tab()
    expect(button).toHaveFocus()
  })

  test('Tab keyboard navigation', () => {
    renderWithTheme(<TabTest />)
    const tab1 = screen.getByText('tab1')
    tab1.focus()
    expect(tab1).toHaveFocus()
    fireEvent.keyDown(tab1, { code: 39, key: 'ArrowRight' })
    expect(screen.getByText('tab2')).toHaveFocus()
  })

  test('Tab has type attribute', () => {
    renderWithTheme(<TabTest />)
    fireEvent.click(screen.getByText('tab1'))
    expect(screen.getByText('tab1')).toHaveAttribute('type', 'button')
  })
})
