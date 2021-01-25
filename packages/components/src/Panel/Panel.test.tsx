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
import { MenuGroup, MenuItem, MenuList } from '../Menu'
import { Panel, Panels, usePanel } from './'

describe('Panel', () => {
  const UsePanelHook = () => {
    const [isOpen, setOpen] = useState(false)
    const open = () => setOpen(true)

    const { panel } = usePanel({
      content: 'Panel content',
      direction: 'left',
      isOpen,
      setOpen,
      title: 'Panel Hook',
    })

    return (
      <>
        {panel}
        <MenuList>
          <MenuGroup>
            <MenuItem onClick={open} icon="Check">
              Option A
            </MenuItem>
            <MenuItem icon="Check">Option B</MenuItem>
          </MenuGroup>
        </MenuList>
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
        <li>Option A</li>
        <Panel title="More Options" content={'Panel content'}>
          <li>Option B</li>
        </Panel>
      </ul>
    </Panels>
  )

  test('uncontrolled Panel displays content prop', () => {
    const { getByText } = renderWithTheme(<UncontrolledPanel />)

    const liElement = getByText('Option B')
    expect(liElement).toBeInTheDocument()

    fireEvent.click(liElement)

    // Find content
    expect(getByText('Panel content')).toBeInTheDocument()
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

  test('usePanel hook render', async () => {
    const { debug, getByText } = renderWithTheme(<UsePanelHook />)

    // const panelHook = getByText('Option B')
    expect(getByText('Option A')).toBeInTheDocument()
    expect(getByText('Option B')).toBeInTheDocument()

    fireEvent.click(getByText('Option B'))

    debug()

    // // Open Drawer
    // const link = screen.getByText('Open Drawer')
    // fireEvent.click(link)
    // runTimers()
    // expect(
    //   screen.queryByText('The Constitution of the United States')
    // ).toBeInTheDocument()

    // // Close the Drawer
    // const doneButton = screen.getByText('Done Reading')
    // fireEvent.click(doneButton)
    // await waitForElementToBeRemoved(() =>
    //   screen.getByText('The Constitution of the United States')
    // )
  })
})
