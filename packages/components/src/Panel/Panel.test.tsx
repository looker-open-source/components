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

import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Icon } from '../Icon'
import { Panel, Panels, usePanel } from './'

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

    const title = (
      <>
        <Icon color="inform" name="ArrowBackward" m="xsmall" />
        return to main option
      </>
    )

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
          title={title}
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
          {(panelProps) => <li {...panelProps}>render prop</li>}
        </Panel>
      </ul>
    </Panels>
  )

  test('Panel works properly when direction is equal to right', () => {
    const { getByText } = renderWithTheme(<UncontrolledPanel />)

    const right = getByText('Right')
    expect(right).toBeInTheDocument()

    fireEvent.click(right)
    expect(getByText('content from the right edge...')).toBeInTheDocument()
  })

  test('uncontrolled Panel displays content prop', () => {
    const { getByText } = renderWithTheme(<UncontrolledPanel />)

    const left = getByText('Left')
    expect(left).toBeInTheDocument()

    fireEvent.click(left)

    // Find content
    expect(getByText('content from the left edge...')).toBeInTheDocument()
  })

  test('controlled Panel displays content', () => {
    const { getByText } = renderWithTheme(<ControlledPanel />)

    const liElement = getByText('Option 1')
    expect(liElement).toBeInTheDocument()

    fireEvent.click(liElement)

    // Find content
    expect(getByText('Panel 1')).toBeInTheDocument()
    expect(getByText('Panel 3')).toBeInTheDocument()
  })

  test('returns to previous display if title prop is clicked', () => {
    const { getByText } = renderWithTheme(<ControlledPanel />)

    const liElement = getByText('Option 1')
    expect(liElement).toBeInTheDocument()

    fireEvent.click(liElement)

    // Find content
    expect(getByText('Panel 1')).toBeInTheDocument()

    const returnToExplore = getByText('return to main option')

    fireEvent.click(returnToExplore)

    expect(getByText('Option 1')).toBeInTheDocument()
    expect(getByText('Option 2')).toBeInTheDocument()
  })

  test('usePanel hook works as expected', () => {
    const { getByText } = renderWithTheme(<UsePanelHook />)

    expect(getByText('Option A')).toBeInTheDocument()
    expect(getByText('Option B')).toBeInTheDocument()

    fireEvent.click(getByText('Option A'))

    expect(getByText('Panel content')).toBeInTheDocument()

    fireEvent.click(getByText('Close Panel Hook'))

    expect(getByText('Option A')).toBeInTheDocument()
  })

  test('with no content fails', () => {
    const { getByText } = renderWithTheme(<UncontrolledPanel />)
    expect(getByText('render prop')).toBeInTheDocument()
    fireEvent.click(getByText('render prop'))
    expect(getByText('My neat dialog')).toBeInTheDocument()
  })
})
