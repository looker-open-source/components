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

import '@testing-library/jest-dom/extend-expect'
import {
  act,
  fireEvent,
  waitForElementToBeRemoved,
  screen,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  describe('MenuItem nestedMenu', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })
    afterEach(() => {
      jest.runOnlyPendingTimers()
      jest.useRealTimers()
    })

    test('toggle on hover', () => {
      renderWithTheme(
        <Menu
          content={
            <MenuItem nestedMenu={<MenuItem>Swiss</MenuItem>}>Gouda</MenuItem>
          }
        >
          <Button>Cheese</Button>
        </Menu>
      )

      const button = screen.getByText('Cheese')
      userEvent.click(button)

      const parent = screen.getByText('Gouda')
      userEvent.hover(parent)
      act(() => {
        jest.advanceTimersByTime(100)
      })
      const child = screen.getByText('Swiss')
      expect(child).toBeVisible()

      // Hovering in the direction of the nestedMenu (ie right & down)
      // triggers a delay to give the user time to get to the nestedMenu
      fireEvent.mouseMove(parent, { screenX: 8, screenY: 3 })
      fireEvent.mouseLeave(parent, { screenX: 9, screenY: 7 })
      act(() => {
        jest.advanceTimersByTime(100)
      })
      userEvent.hover(child)
      expect(screen.getByText('Swiss')).toBeVisible()

      userEvent.unhover(child)
      // Nested menu remains open when hovered out
      expect(screen.getByText('Swiss')).toBeVisible()

      userEvent.hover(parent)
      // If not hovering out in the direction of the nestedMenu
      // it closes immediately
      fireEvent.mouseMove(parent, { screenX: 8, screenY: 3 })
      fireEvent.mouseLeave(parent, { screenX: 8, screenY: 6 })
      expect(screen.queryByText('Swiss')).not.toBeInTheDocument()

      fireEvent.click(document)
    })

    test('toggle on arrow keys', async () => {
      renderWithTheme(
        <Menu
          content={
            <MenuItem nestedMenu={<MenuItem>Swiss</MenuItem>}>Gouda</MenuItem>
          }
        >
          <Button>Cheese</Button>
        </Menu>
      )

      const button = screen.getByText('Cheese')
      userEvent.click(button)

      const parent = screen.getByText('Gouda')
      fireEvent.keyDown(parent, { key: 'ArrowRight' })

      const child = screen.getByText('Swiss')
      expect(child).toBeVisible()
      fireEvent.keyDown(child, { key: 'ArrowLeft' })

      expect(screen.queryByText('Swiss')).not.toBeInTheDocument()

      fireEvent.keyDown(parent, { key: 'ArrowRight' })
      const child2 = screen.getByText('Swiss')
      expect(child2).toBeVisible()

      // Escape key closes the child & parent menus
      fireEvent.keyDown(child2, { key: 'Escape' })
      expect(screen.queryByText('Swiss')).not.toBeInTheDocument()
      expect(screen.queryByText('Gouda')).not.toBeInTheDocument()

      await waitFor(() => expect(button).toHaveFocus())
    })

    test('toggle on click', () => {
      const onClick = jest.fn()
      renderWithTheme(
        <Menu
          isOpen
          content={
            <>
              <MenuItem nestedMenu={<MenuItem>Camembert</MenuItem>}>
                French
              </MenuItem>
              <MenuItem
                onClick={onClick}
                nestedMenu={<MenuItem>Gouda</MenuItem>}
              >
                Dutch
              </MenuItem>
            </>
          }
        >
          <Button>Cheese</Button>
        </Menu>
      )

      // If the parent MenuItem doesn't have an onClick,
      // click opens the nestedMenu and doesn't close the parent Menu
      fireEvent.click(screen.getByText('French'))
      expect(screen.getByText('Camembert')).toBeVisible()

      // If the the nestedMenu was already opened via hover, click closes both Menus
      // (userEvent.click fires 'mouseenter' first)
      userEvent.click(screen.getByText('French'))
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()

      // If the parent MenuItem has an onClick, click doesn't open the nestedMenu
      // and the parent Menu is closed after
      userEvent.click(screen.getByText('Cheese'))
      fireEvent.click(screen.getByText('Dutch'))
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })
})
