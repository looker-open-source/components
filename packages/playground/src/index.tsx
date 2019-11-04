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
import { Button, GlobalStyle, IconButton } from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  // const [value, setValue] = React.useState('')
  // function handleChange(e: React.FormEvent<HTMLInputElement>) {
  //   setValue(e.currentTarget.value)
  // }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <br />
        <br />
        <Button>default</Button>
        <br />
        <br />
        <IconButton label="Add File" icon="Plus" mr="small" /> <br />
        <br />
        <Button iconAfter="Trash" color="danger">
          trash
        </Button>
        <br />
        <br />
        <IconButton label="Test" icon="Favorite" outline />
        <br />
        <br />
        <IconButton
          label="Delete Look"
          icon="Trash"
          size="medium"
          color="danger"
          mr="small"
          outline
        />
        <IconButton
          label="Delete Look"
          icon="Trash"
          size="small"
          color="danger"
          mr="small"
        />
        <IconButton
          label="Delete Look"
          icon="Trash"
          size="xsmall"
          color="danger"
          mr="small"
        />
        <IconButton
          label="Delete Look"
          icon="Trash"
          size="xxsmall"
          color="danger"
          mr="small"
        />
        <br />
        <br />
        <IconButton label="Favorite" icon="Favorite" />
        <IconButton label="Trash" icon="Trash" />
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
