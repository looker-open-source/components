/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
import React from 'react'

import { renderWithTheme } from '@looker/components-test-utils'
import { Button } from '../Button'
import { Menu, MenuDisclosure, MenuItem, MenuList } from './'

const menu = (
  <Menu>
    <MenuDisclosure tooltip="Select your favorite kind">
      <Button>Cheese</Button>
    </MenuDisclosure>
    <MenuList>
      <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
      <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
    </MenuList>
  </Menu>
)

// Note to self: use "yarn jest Menu.test" to run Menu.test.tsx
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

  test('Menu Button has the tooltip', () => {
    const { getByText, queryByText } = renderWithTheme(menu)

    const button = getByText('Cheese')

    expect(queryByText('Select your favorite kind')).not.toBeInTheDocument()

    button.focus()

    expect(queryByText('Select your favorite kind')).toBeInTheDocument()
  })

  test('Disabled Menu does not open when clicked and has disabled prop', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Menu disabled={true}>
        <MenuDisclosure tooltip="Select your favorite kind">
          <Button>Cheese</Button>
        </MenuDisclosure>
        <MenuList>
          <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
          <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
        </MenuList>
      </Menu>
    )

    const button = getByText('Cheese')

    expect(button).toHaveAttribute('disabled')

    expect(queryByText('Swiss')).not.toBeInTheDocument()

    fireEvent.click(button)

    expect(queryByText('Swiss')).not.toBeInTheDocument()
  })

  test('Starting with Menu open', () => {
    const { getByText } = renderWithTheme(
      <Menu isOpen={true}>
        <MenuDisclosure tooltip="Select your favorite kind">
          <Button>Cheese</Button>
        </MenuDisclosure>
        <MenuList>
          <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
          <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
        </MenuList>
      </Menu>
    )

    expect(getByText('Swiss')).toBeInTheDocument()
  })
})
