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

import '@testing-library/jest-dom/extend-expect'
import { act, fireEvent, screen } from '@testing-library/react'
import 'jest-styled-components'
import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import Nested from './stories/Nested'
import AnimationCallbacks from './stories/AnimationCallbacks'
import { Panel, Panels, usePanel } from './'

const globalConsole = global.console

const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

beforeEach(() => {
  jest.useFakeTimers()
  global.console = {
    ...globalConsole,
    error: jest.fn(),
    warn: jest.fn(),
  }
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
  jest.resetAllMocks()
  global.console = globalConsole
})

describe('Panel', () => {
  const UsePanelHook = () => {
    const [isOpen, setOpen] = useState(false)
    const open = () => setOpen(true)
    const canClose = () => true

    const { panel } = usePanel({
      canClose,
      content: 'Panel content',
      direction: 'left',
      isOpen,
      setOpen,
      title: 'Panel Hook',
    })

    return (
      <>
        {panel}
        <ul>
          <li onClick={open}>Option A</li>
          <li>Option B</li>
        </ul>
      </>
    )
  }

  const ControlledPanel = () => {
    const [option, setOption] = useState(false)
    const toggleOption = () => setOption(!option)

    return (
      <Panels>
        <ul>
          <li onClick={toggleOption}>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
        <Panel
          isOpen={option}
          setOpen={setOption}
          direction="left"
          title="return to main option"
          content={
            <ul>
              <li>Panel 1</li>
              <li>Panel 2</li>
              <li>Panel 3</li>
            </ul>
          }
        />
      </Panels>
    )
  }

  const UncontrolledPanel = () => (
    <Panels>
      <ul>
        <Panel
          content={'content from the right edge...'}
          direction="right"
          title="Right"
        >
          <li>Right</li>
        </Panel>
        <Panel title="Left" content={'content from the left edge...'}>
          <li>Left</li>
        </Panel>
        <Panel content="My neat dialog" title="render prop">
          {panelProps => <li {...panelProps}>render prop</li>}
        </Panel>
      </ul>
    </Panels>
  )

  test('Panel works properly when direction is equal to right', () => {
    renderWithTheme(<UncontrolledPanel />)

    const right = screen.getByText('Right')
    expect(right).toBeInTheDocument()

    fireEvent.click(right)
    expect(
      screen.getByText('content from the right edge...')
    ).toBeInTheDocument()
  })

  test('uncontrolled Panel displays content prop', () => {
    renderWithTheme(<UncontrolledPanel />)

    const left = screen.getByText('Left')
    expect(left).toBeInTheDocument()

    fireEvent.click(left)

    // Find content
    expect(
      screen.getByText('content from the left edge...')
    ).toBeInTheDocument()
  })

  test('controlled Panel displays content', () => {
    renderWithTheme(<ControlledPanel />)

    const liElement = screen.getByText('Option 1')
    expect(liElement).toBeInTheDocument()

    fireEvent.click(liElement)

    // Find content
    expect(screen.getByText('Panel 1')).toBeInTheDocument()
    expect(screen.getByText('Panel 3')).toBeInTheDocument()
  })

  test('returns to previous display if title prop is clicked', () => {
    renderWithTheme(<ControlledPanel />)

    const liElement = screen.getByText('Option 1')
    expect(liElement).toBeInTheDocument()

    fireEvent.click(liElement)

    // Find content
    expect(screen.getByText('Panel 1')).toBeInTheDocument()

    const returnToExplore = screen.getByText('return to main option')

    fireEvent.click(returnToExplore)

    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  test('usePanel hook works as expected', () => {
    renderWithTheme(<UsePanelHook />)

    expect(screen.getByText('Option A')).toBeInTheDocument()
    expect(screen.getByText('Option B')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Option A'))

    expect(screen.getByText('Panel content')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Close Panel Hook'))

    expect(screen.getByText('Option A')).toBeInTheDocument()
  })

  test('with no content fails', () => {
    renderWithTheme(<UncontrolledPanel />)
    expect(screen.getByText('render prop')).toBeInTheDocument()
    fireEvent.click(screen.getByText('render prop'))
    expect(screen.getByText('My neat dialog')).toBeInTheDocument()
  })

  test('triggers console.warn if no children are passed', () => {
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    renderWithTheme(<Panel />)
    /* eslint-disable no-console */
    expect(console.warn).toHaveBeenCalled()
  })

  test('hidden content under panel is not reachable via keyboard nav', () => {
    renderWithTheme(<Nested />)

    const listItem = screen.getByText('option A')

    fireEvent.click(listItem)
    runTimers()
    expect(listItem).not.toBeVisible()

    const nestedPanelButton = screen.getByText('Open nested panel')
    // Workaround: toBeVisible doesn't account for visibility being override-able
    // https://github.com/testing-library/jest-dom/issues/209
    // same issue with userEvent.tab
    expect(nestedPanelButton.closest('[data-panel]')).toHaveStyle(
      'visibility: visible;'
    )

    fireEvent.click(nestedPanelButton)
    runTimers()
    expect(listItem).not.toBeVisible()
    expect(nestedPanelButton).not.toBeVisible()
    const closeButton = screen.getByRole('button', {
      name: 'Close Nested',
    })
    // Workaround: toBeVisible doesn't account for visibility being override-able
    // https://github.com/testing-library/jest-dom/issues/209
    // same issue with userEvent.tab
    expect(closeButton.closest('[data-panel]')).toHaveStyle(
      'visibility: visible;'
    )
  })

  test('onAfterOpen, onAfterClose', () => {
    jest.useFakeTimers()

    renderWithTheme(<AnimationCallbacks />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const input = screen.getByRole('textbox')
    expect(input).not.toHaveFocus()

    act(() => {
      jest.runOnlyPendingTimers()
    })
    expect(input).toHaveFocus()

    const closeButton = screen.getByRole('button', {
      name: 'Close Animation Callbacks',
    })
    fireEvent.click(closeButton)
    expect(screen.queryByText('Panel closed')).not.toBeInTheDocument()

    act(() => {
      jest.runOnlyPendingTimers()
    })
    expect(screen.queryByText('Panel closed')).toBeVisible()

    jest.useRealTimers()
  })
})
