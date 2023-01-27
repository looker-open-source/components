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
import React, { useState } from 'react'
import { act, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StateChanges } from './stories/index.stories'
import { Tab2, Tabs2 } from './'

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

const Basic = (args: any) => (
  <Tabs2 ripple={false} {...args}>
    <Tab2 id="cats" label="Cats">
      Here's awesome story about cats
    </Tab2>
    <Tab2 id="dogs" label="Dogs">
      Cats are way better than dogs. Go to other tab
    </Tab2>
    <Tab2 label="Fish">Are kinda smelly</Tab2>
    <Tab2 disabled label="Human">
      Humans tab is disabled
    </Tab2>
  </Tabs2>
)

describe('Tabs2', () => {
  test('basic', () => {
    renderWithTheme(<Basic />)
    expect(screen.getAllByRole('tab')).toHaveLength(4)
    expect(
      screen.getByText("Here's awesome story about cats")
    ).toBeInTheDocument()
  })

  test('clicking on tab opens correct panel', () => {
    renderWithTheme(<Basic />)

    expect(
      screen.getByText("Here's awesome story about cats")
    ).toBeInTheDocument()
    expect(screen.queryByText('Are kinda smelly')).not.toBeInTheDocument()
    fireEvent.click(screen.getByText('Fish'))
    expect(
      screen.queryByText("Here's awesome story about cats")
    ).not.toBeInTheDocument()
    expect(screen.getByText('Are kinda smelly')).toBeInTheDocument()
  })

  test('defaultTabId', () => {
    renderWithTheme(<Basic defaultTabId="dogs" />)

    expect(
      screen.getByText('Cats are way better than dogs. Go to other tab')
    ).toBeInTheDocument()
  })

  test('disabled', () => {
    renderWithTheme(<Basic />)
    expect(
      screen.getByText("Here's awesome story about cats")
    ).toBeInTheDocument()
    expect(screen.queryByText('Humans tab is disabled')).not.toBeInTheDocument()
    fireEvent.click(screen.getByText('Human'))
    expect(
      screen.getByText("Here's awesome story about cats")
    ).toBeInTheDocument()
    expect(screen.queryByText('Humans tab is disabled')).not.toBeInTheDocument()
  })

  test('no defaultTabId should display first tab that is not disabled', () => {
    renderWithTheme(<Basic />)

    expect(
      screen.getByText("Here's awesome story about cats")
    ).toBeInTheDocument()
    expect(screen.queryByText('not available')).not.toBeInTheDocument()
  })

  test('no defaultTabId should not revert to first tab after state change', () => {
    renderWithTheme(<StateChanges />)
    fireEvent.click(screen.getByText('Tab 2'))
    const textfield = screen.getByRole('textbox')
    userEvent.type(textfield, 'test')
    expect(textfield).toBeInTheDocument()
  })

  test('Distributed', () => {
    renderWithTheme(<Basic distributed={true} />)
    expect(screen.getByText('Cats').closest('div')).toHaveStyleRule(
      'grid-auto-columns: 1fr'
    )
  })

  const Controlled = () => {
    const [currentTabId, setTabId] = useState('cats')
    return (
      <>
        <p>The current selected tab is: {currentTabId}</p>
        <button onClick={() => setTabId('cats')}>Switch to Cats</button>
        <button onClick={() => setTabId('dogs')}>Switch to Dogs</button>
        <Tabs2 tabId={currentTabId} onTabChange={setTabId}>
          <Tab2 id="cats" label="Cats">
            Here's awesome story about cats
          </Tab2>
          <Tab2 id="dogs" label="Dogs">
            Cats are way better than dogs. Go to other tab
          </Tab2>
        </Tabs2>
      </>
    )
  }

  test('controlled', () => {
    renderWithTheme(<Controlled />)

    expect(
      screen.getByText("Here's awesome story about cats")
    ).toBeInTheDocument()

    fireEvent.click(screen.getByText('Switch to Dogs'))

    expect(
      screen.getByText('Cats are way better than dogs. Go to other tab')
    ).toBeInTheDocument()
  })

  test('validates controlled vs uncontrolled prop combinations', () => {
    renderWithTheme(
      // @ts-expect-error: onTabChange required when tabId is set
      <Tabs2 tabId="3">
        <Tab2 id="tab" label="Tab">
          A single Tab
        </Tab2>
      </Tabs2>
    )

    renderWithTheme(
      // @ts-expect-error: tabId required when onTabChange is set
      <Tabs2 onTabChange="3">
        <Tab2 id="tab" label="Tab">
          A single Tab
        </Tab2>
      </Tabs2>
    )

    renderWithTheme(
      // @ts-expect-error: you can't set both tabId and defaultTabId simultaneously
      <Tabs2 tabId="3" defaultTabId="5">
        <Tab2 id="tab" label="Tab">
          A single Tab
        </Tab2>
      </Tabs2>
    )
  })
  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(<Basic />)

      const tabs = screen.getByText('Cats').closest('button')
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
