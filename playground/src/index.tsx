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
import React from 'react'
import { render } from 'react-dom'

import {
  ComponentsProvider,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDisclosure,
  Button,
  Menu,
  Heading,
  Confirm,
} from '@looker/components'
// import { GetMe } from './data/GetMe'

const App = () => (
  <ComponentsProvider ie11Support>
    <>
      <Heading>Missing Dialog Content</Heading>
      <Confirm
        title="Confirm Something"
        message="Is this what you want to do?"
        onConfirm={(close) => {
          alert('You did something')
          close()
        }}
      >
        {(open) => <Button onClick={open}>Do Something</Button>}
      </Confirm>
      <Heading>Menu List</Heading>
      <Menu>
        <MenuDisclosure tooltip="Select your favorite kind">
          <Button m="medium">cheese</Button>
        </MenuDisclosure>
        <MenuList>
          <MenuGroup>
            <MenuItem icon="LogoRings" detail="test">
              Clear cache and refresh
            </MenuItem>
            <MenuItem icon="Validate">Validate</MenuItem>
            <MenuItem icon="ChartPie">Pizza!</MenuItem>
          </MenuGroup>
          <MenuGroup label="Cheeses">
            <MenuItem icon="FavoriteOutline" detail="test">
              Revert to original dashboard
            </MenuItem>
            <MenuItem icon="FavoriteOutline">
              Revert to original dashboard
            </MenuItem>
            <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
          </MenuGroup>
          <MenuGroup label="Meats">
            <MenuItem icon="FavoriteOutline" detail="test">
              Sausage
            </MenuItem>
            <MenuItem icon="FavoriteOutline">Pepperoni</MenuItem>
            <MenuItem icon="FavoriteOutline">Salami</MenuItem>
          </MenuGroup>
          <MenuGroup label="Vegetables">
            <MenuItem icon="FavoriteOutline" detail="test">
              Onion
            </MenuItem>
            <MenuItem icon="FavoriteOutline">Mushroom</MenuItem>
            <MenuItem icon="FavoriteOutline">Peppers</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  </ComponentsProvider>
)

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
