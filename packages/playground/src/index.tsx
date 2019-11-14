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

import React, { useState, useEffect } from 'react'
import 'core-js' // polyfills for IE
import ReactDOM from 'react-dom'
import {
  Button,
  GlobalStyle,
  MenuDisclosure,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuSearch,
  Menu,
} from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const defaultCheeses = ['Gouda', 'Swiss', 'Cheddar', 'Goat', 'Parmesan']

const App: React.FC = () => {
  const menuRef = React.useRef(null)

  const [keywordSearch, setKeywordSearch] = useState('')
  const [searchResults, setSearchResults] = useState(defaultCheeses)

  // setting 'keywordSearch' to be equal to the value added to inputSearch
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setKeywordSearch(event.currentTarget.value)
  }

  // reset the search results, after clear the search, to the first result before search
  const handleClear = () => setKeywordSearch('')

  // return search based on what is on the 'keywordSearch' AKA inputSearch value
  useEffect(() => {
    const results = defaultCheeses.filter(cheese =>
      cheese.toLowerCase().includes(keywordSearch.toLowerCase())
    )
    setSearchResults(results)
  }, [keywordSearch])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Menu>
          <MenuDisclosure tooltip="Select your favorite kind">
            <Button m="medium">cheese</Button>
          </MenuDisclosure>

          <MenuList ref={menuRef}>
            <MenuSearch
              placeholder="start your search..."
              value={keywordSearch}
              onChange={handleChange}
              menuRef={menuRef}
              onClear={handleClear}
            />
            <MenuGroup label="cheeses">
              {searchResults.map(cheese => (
                <MenuItem itemRole="link" href={`#${cheese}`} key={cheese}>
                  {cheese.toUpperCase()}
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
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
