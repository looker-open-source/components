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

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { act, fireEvent, screen } from '@testing-library/react'
import { Tab } from './Tab'
import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import { TabPanels } from './TabPanels'
import { Tabs, useTabs } from './Tabs'

beforeEach(() => {
  jest.useFakeTimers()
})
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})
const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

const TabsComponent = () => (
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

describe('Tabs', () => {
  test('shows the correct number of navigation tabs', () => {
    renderWithTheme(<TabsComponent />)
    expect(screen.getAllByRole('tab')).toHaveLength(3)
  })

  test('starts with Tab at index 0 opened', () => {
    renderWithTheme(<TabsComponent />)

    expect(screen.getByText('this is tab1 content')).toBeInTheDocument()
  })

  test('clicking on tab opens correct panel', () => {
    renderWithTheme(<TabsComponent />)

    expect(screen.getByText('this is tab1 content')).toBeInTheDocument()
    expect(screen.queryByText('this is tab2 content')).not.toBeInTheDocument()
    fireEvent.click(screen.getByText('tab2'))
    expect(screen.queryByText('this is tab1 content')).not.toBeInTheDocument()
    expect(screen.getByText('this is tab2 content')).toBeInTheDocument()
  })

  test('clicking on disable tab does not change panel', () => {
    renderWithTheme(<TabsComponent />)

    expect(screen.getByText('this is tab1 content')).toBeInTheDocument()
    expect(
      screen.queryByText('this is the disable tab-panel')
    ).not.toBeInTheDocument()
    fireEvent.click(screen.getByText('tab3'))
    expect(screen.getByText('this is tab1 content')).toBeInTheDocument()
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
      screen.getByText('1 this is the panel of tab hook 1')
    ).toBeInTheDocument()
    expect(
      screen.queryByText('2 this is the panel of tab hook 2')
    ).not.toBeInTheDocument()
    fireEvent.click(screen.getByText('Tab Hook 2'))
    expect(
      screen.queryByText('1 this is the panel of tab hook 1')
    ).not.toBeInTheDocument()
    expect(
      screen.getByText('2 this is the panel of tab hook 2')
    ).toBeInTheDocument()
  })

  test('Tab keyboard navigation', () => {
    renderWithTheme(<TabsComponent />)
    const tab1 = screen.getByText('tab1').closest('button')
    tab1 && tab1.focus()
    expect(tab1).toHaveFocus()
    tab1 && fireEvent.keyDown(tab1, { code: 39, key: 'ArrowRight' })
    expect(screen.getByText('tab2').closest('button')).toHaveFocus()
  })

  test('Tab has type attribute', () => {
    renderWithTheme(<TabsComponent />)
    const tab1 = screen.getByText('tab1').closest('button')
    tab1 && fireEvent.click(tab1)
    expect(tab1).toHaveAttribute('type', 'button')
  })

  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(<TabsComponent />)

      const tabs = screen.getByText('tab1').closest('button')
      expect(tabs).not.toHaveClass('bg-on fg-in')
      expect(tabs).toHaveStyle({
        '--ripple-color': '#6C43E0',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0',
      })

      tabs && fireEvent.focus(tabs)
      expect(tabs).toHaveClass('bg-on')

      tabs && fireEvent.mouseDown(tabs)
      expect(tabs).toHaveClass('bg-on fg-in')

      // foreground is locked for a minimum time to animate the ripple
      tabs && fireEvent.mouseUp(tabs)
      runTimers()
      expect(tabs).toHaveClass('bg-on fg-out')
      runTimers()
      expect(tabs).toHaveClass('bg-on')

      tabs && fireEvent.blur(tabs)
      expect(tabs).not.toHaveClass('bg-on fg-in')
    })
  })
})
