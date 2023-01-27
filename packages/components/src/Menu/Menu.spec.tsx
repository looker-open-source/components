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
import {
  fireEvent,
  waitForElementToBeRemoved,
  screen,
  waitFor,
} from '@testing-library/react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import React, { useRef } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Favorite } from '@styled-icons/material-outlined'
import { Tooltip } from '../Tooltip'
import { Menu, MenuItem } from './'

const menu = (
  <Menu
    content={
      <>
        <MenuItem icon={<Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<Favorite />}>Swiss</MenuItem>
      </>
    }
  >
    <Tooltip content="Select your favorite kind">
      <button>Cheese</button>
    </Tooltip>
  </Menu>
)

describe('<Menu />', () => {
  test('Menu Opens and Closes', () => {
    renderWithTheme(menu)

    const button = screen.getByText('Cheese')

    expect(screen.queryByText('Swiss')).not.toBeInTheDocument()

    fireEvent.click(button)

    expect(screen.getByText('Swiss')).toBeInTheDocument()

    fireEvent.click(document)

    expect(screen.queryByText('Swiss')).not.toBeInTheDocument()
  })

  test('Menu Button has the tooltip', async () => {
    renderWithTheme(menu)

    const button = screen.getByText('Cheese')

    expect(
      screen.queryByText('Select your favorite kind')
    ).not.toBeInTheDocument()

    fireEvent.mouseOver(button)

    expect(screen.getByText('Select your favorite kind')).toBeInTheDocument()

    fireEvent.mouseOut(button)

    await waitForElementToBeRemoved(() =>
      screen.queryByText('Select your favorite kind')
    )
  })

  test('closes on MenuItem click', () => {
    const Closable = () => {
      function handleClick(e: ReactMouseEvent<HTMLLIElement>) {
        e.preventDefault()
      }
      return (
        <Menu
          content={
            <>
              <MenuItem icon={<Favorite />} onClick={handleClick}>
                Gouda
              </MenuItem>
              <MenuItem icon={<Favorite />}>Swiss</MenuItem>
            </>
          }
        >
          <button>Cheese</button>
        </Menu>
      )
    }
    renderWithTheme(<Closable />)

    const button = screen.getByText('Cheese')
    fireEvent.click(button)

    const defaultPreventedItem = screen.getByText('Gouda')
    const item = screen.getByText('Swiss')

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
    renderWithTheme(
      <Menu
        disabled={true}
        content={
          <>
            <MenuItem icon={<Favorite />}>Gouda</MenuItem>
            <MenuItem icon={<Favorite />}>Swiss</MenuItem>
          </>
        }
      >
        <div>Cheese</div>
      </Menu>
    )

    const trigger = screen.getByText('Cheese')

    expect(screen.queryByText('Swiss')).not.toBeInTheDocument()

    fireEvent.click(trigger)

    expect(screen.queryByText('Swiss')).not.toBeInTheDocument()

    fireEvent.click(document)
  })

  test('Starting with Menu open', () => {
    renderWithTheme(
      <Menu
        isOpen={true}
        content={
          <>
            <MenuItem icon={<Favorite />}>Gouda</MenuItem>
            <MenuItem icon={<Favorite />}>Swiss</MenuItem>
          </>
        }
      >
        <button>Cheese</button>
      </Menu>
    )

    expect(screen.getByText('Swiss')).toBeInTheDocument()

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
                <MenuItem icon={<Favorite />}>Gouda</MenuItem>
                <MenuItem icon={<Favorite />}>Swiss</MenuItem>
              </>
            }
          >
            <button>Cheese</button>
          </Menu>
          Some text in the div
        </div>
      )
    }
    renderWithTheme(<Component />)

    const trigger = screen.queryByText('Cheese')
    const div = screen.getByText('Some text in the div')

    expect(trigger).not.toBeInTheDocument()

    fireEvent(
      div,
      new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      })
    )
    const triggerNew = screen.getByText('Cheese')
    expect(screen.queryByText('Gouda')).not.toBeInTheDocument()
    fireEvent.click(triggerNew) // open Menu
    expect(screen.getByText('Gouda')).toBeInTheDocument()

    fireEvent.click(document)
  })

  describe('MenuItem nestedMenu', () => {
    test('toggle on hover', async () => {
      renderWithTheme(
        <Menu
          content={
            <MenuItem nestedMenu={<MenuItem>Swiss</MenuItem>}>Gouda</MenuItem>
          }
        >
          <button>Cheese</button>
        </Menu>
      )

      const button = screen.getByText('Cheese')
      fireEvent.click(button)

      const parent = screen.getByText('Gouda')
      fireEvent.mouseEnter(parent)
      await screen.findByText('Swiss')
      const child = screen.getByText('Swiss')
      expect(child).toBeVisible()

      // Hovering in the direction of the nestedMenu (ie right & down)
      // triggers a delay to give the user time to get to the nestedMenu
      fireEvent.mouseMove(parent, { screenX: 8, screenY: 3 })
      fireEvent.mouseLeave(parent, { screenX: 9, screenY: 7 })
      fireEvent.mouseEnter(child)
      await screen.findByText('Swiss')
      expect(screen.getByText('Swiss')).toBeVisible()

      fireEvent.mouseLeave(child)
      // Nested menu remains open when hovered out
      expect(screen.getByText('Swiss')).toBeVisible()

      fireEvent.mouseEnter(parent)
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
          <button>Cheese</button>
        </Menu>
      )

      const button = screen.getByText('Cheese')
      button.focus()
      fireEvent.click(button)

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
      const spy = jest.spyOn(document, 'elementsFromPoint').mockReturnValue([])
      fireEvent.keyDown(child2, { key: 'Escape' })
      expect(screen.queryByText('Swiss')).not.toBeInTheDocument()
      expect(screen.queryByText('Gouda')).not.toBeInTheDocument()

      await waitFor(() => {
        expect(button).toHaveFocus()
      })
      spy.mockRestore()
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
          <button>Cheese</button>
        </Menu>
      )

      // If the parent MenuItem doesn't have an onClick,
      // click opens the nestedMenu and doesn't close the parent Menu
      fireEvent.click(screen.getByText('French'))
      expect(screen.getByText('Camembert')).toBeVisible()

      // If the the nestedMenu was already opened via hover, click does nothing
      // (fireEvent.click fires 'mouseenter' first)
      fireEvent.click(screen.getByText('French'))
      expect(screen.getByText('Camembert')).toBeVisible()

      // If the parent MenuItem has an onClick, click doesn't open the nestedMenu
      // and the parent Menu is closed after
      fireEvent.click(screen.getByText('Cheese'))
      fireEvent.click(screen.getByText('Dutch'))
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })

    test('clicking an item in the nested menu closes the parent menu', () => {
      const onClick = jest.fn()
      renderWithTheme(
        <Menu
          content={
            <MenuItem
              nestedMenu={<MenuItem onClick={onClick}>Camembert</MenuItem>}
            >
              French
            </MenuItem>
          }
        >
          <button>Cheese</button>
        </Menu>
      )

      // Open menu and nested menu
      fireEvent.click(screen.getByText('Cheese'))
      fireEvent.keyDown(screen.getByText('French'), { key: 'ArrowRight' })

      // Click an item in the nested menu
      fireEvent.click(screen.getByText('Camembert'))

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })

    test('item with preventDefault', () => {
      const onClickMock = jest.fn()
      const handleClick = (e: ReactMouseEvent<HTMLLIElement>) => {
        onClickMock()
        e.preventDefault()
      }
      renderWithTheme(
        <Menu
          content={
            <MenuItem
              nestedMenu={<MenuItem onClick={handleClick}>Camembert</MenuItem>}
            >
              French
            </MenuItem>
          }
        >
          <button>Cheese</button>
        </Menu>
      )

      // Open menu and nested menu
      fireEvent.click(screen.getByText('Cheese'))
      const parent = screen.getByText('French')
      fireEvent.keyDown(parent, { key: 'ArrowRight' })

      // Click an item in the nested menu
      const child = screen.getByText('Camembert')
      fireEvent.click(screen.getByText('Camembert'))

      expect(onClickMock).toHaveBeenCalledTimes(1)
      expect(child).toBeVisible()
      expect(parent).toBeVisible()

      fireEvent.click(document)
    })

    test('3 levels deep', () => {
      const onClickMock = jest.fn()
      renderWithTheme(
        <Menu
          content={
            <MenuItem
              nestedMenu={
                <MenuItem
                  nestedMenu={
                    <MenuItem onClick={onClickMock}>Camembert</MenuItem>
                  }
                >
                  Stinky
                </MenuItem>
              }
            >
              French
            </MenuItem>
          }
        >
          <button>Cheese</button>
        </Menu>
      )

      // Open three levels of nesting
      fireEvent.click(screen.getByText('Cheese'))
      const first = screen.getByText('French')
      fireEvent.click(first)
      const second = screen.getByText('Stinky')
      fireEvent.click(second)
      const third = screen.getByText('Camembert')
      fireEvent.click(third)

      // All levels close
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })
})
