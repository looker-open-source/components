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
import { fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import React, { useRef } from 'react'

import { renderWithTheme } from '@looker/components-test-utils'
import { Button } from '../Button'
import { Tooltip } from '../Tooltip'
import { Menu, MenuItem } from './'

const menu = (
  <Menu
    content={
      <>
        <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
        <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
      </>
    }
  >
    <Tooltip content="Select your favorite kind">
      <Button>Cheese</Button>
    </Tooltip>
  </Menu>
)

describe('<Menu />', () => {
  test('Menu Opens and Closes', () => {
    const { getByText, queryByText } = renderWithTheme(menu)

    const button = getByText('Cheese')

    expect(queryByText('Swiss')).not.toBeInTheDocument()

    fireEvent.click(button)

    expect(queryByText('Swiss')).toBeInTheDocument()

    fireEvent.click(document)

    expect(queryByText('Swiss')).not.toBeInTheDocument()
  })

  test('Menu Button has the tooltip', async () => {
    const { getByText, queryByText } = renderWithTheme(menu)

    const button = getByText('Cheese')

    expect(queryByText('Select your favorite kind')).not.toBeInTheDocument()

    fireEvent.mouseOver(button)

    expect(queryByText('Select your favorite kind')).toBeInTheDocument()

    fireEvent.mouseOut(button)

    await waitForElementToBeRemoved(() =>
      queryByText('Select your favorite kind')
    )
  })

  test('closes on MenuItem click', () => {
    const Closable = () => {
      function handleClick(e: React.MouseEvent<HTMLLIElement>) {
        e.preventDefault()
      }
      return (
        <Menu
          content={
            <>
              <MenuItem icon="FavoriteOutline" onClick={handleClick}>
                Gouda
              </MenuItem>
              <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
            </>
          }
        >
          <Button>Cheese</Button>
        </Menu>
      )
    }
    const { getByText } = renderWithTheme(<Closable />)

    const button = getByText('Cheese')
    fireEvent.click(button)

    const defaultPreventedItem = getByText('Gouda')
    const item = getByText('Swiss')

    fireEvent.click(defaultPreventedItem)

    expect(defaultPreventedItem).toBeInTheDocument()
    expect(item).toBeInTheDocument()

    fireEvent.click(item)

    expect(defaultPreventedItem).not.toBeInTheDocument()
    expect(item).not.toBeInTheDocument()

    fireEvent.click(document)
  })

  test('Disabled Menu does not open when clicked', () => {
    // Using div here to more clearly test disabled prop on Menu
    const { getByText, queryByText } = renderWithTheme(
      <Menu
        disabled={true}
        content={
          <>
            <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
            <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
          </>
        }
      >
        <div>Cheese</div>
      </Menu>
    )

    const trigger = getByText('Cheese')

    expect(queryByText('Swiss')).not.toBeInTheDocument()

    fireEvent.click(trigger)

    expect(queryByText('Swiss')).not.toBeInTheDocument()

    fireEvent.click(document)
  })

  test('Starting with Menu open', () => {
    const { getByText } = renderWithTheme(
      <Menu
        isOpen={true}
        content={
          <>
            <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
            <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
          </>
        }
      >
        <Button>Cheese</Button>
      </Menu>
    )

    expect(getByText('Swiss')).toBeInTheDocument()

    fireEvent.click(document)
  })

  test('Trigger is shown/hidden on hover of hoverDisclosureRef', () => {
    const Component = () => {
      const hoverRef = useRef<HTMLDivElement>(null)
      return (
        <div ref={hoverRef}>
          <Menu
            hoverDisclosureRef={hoverRef}
            content={
              <>
                <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
                <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
              </>
            }
          >
            <Button>Cheese</Button>
          </Menu>
          Some text in the div
        </div>
      )
    }
    const { getByText, queryByText } = renderWithTheme(<Component />)

    const trigger = queryByText('Cheese')
    const div = getByText('Some text in the div')

    expect(trigger).not.toBeInTheDocument()

    fireEvent(
      div,
      new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      })
    )
    const triggerNew = getByText('Cheese')
    expect(queryByText('Gouda')).not.toBeInTheDocument()
    fireEvent.click(triggerNew) // open Menu
    expect(queryByText('Gouda')).toBeInTheDocument()

    fireEvent.click(document)
  })
})
