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

import React from 'react'
import ReactDOM from 'react-dom'
import { MenuGroup, MenuList, MenuItem, GlobalStyle } from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MenuList>
          <MenuGroup label="Links">
            <MenuItem icon="LogoRings" current>
              Looker
            </MenuItem>
            <MenuItem icon="Validate">Validate</MenuItem>
            <MenuItem icon="ChartPie">Pizza!</MenuItem>
          </MenuGroup>
          <MenuGroup label="Cheeses">
            <MenuItem icon="FavoriteOutline">Cheddar</MenuItem>
            <MenuItem icon="FavoriteOutline">Mozerella</MenuItem>
            <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
          </MenuGroup>
          <MenuGroup label="Meats">
            <MenuItem icon="FavoriteOutline">Sausage</MenuItem>
            <MenuItem icon="FavoriteOutline">Pepperoni</MenuItem>
            <MenuItem icon="FavoriteOutline">Salami</MenuItem>
          </MenuGroup>
          <MenuGroup label="Vegetables">
            <MenuItem icon="FavoriteOutline">Onion</MenuItem>
            <MenuItem icon="FavoriteOutline">Mushroom</MenuItem>
            <MenuItem icon="FavoriteOutline">Peppers</MenuItem>
          </MenuGroup>
        </MenuList>
      </>
    </ThemeProvider>
  )
}
/**
 * This is the binding site for the playground. If you want to edit the
 * primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
