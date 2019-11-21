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

import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import {
  Box,
  Button,
  GlobalStyle,
  Popover,
  DialogManager,
  Divider,
} from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'
import {
  LongText,
  ModalInner,
  PopoverInner,
  PopoverReactSelect,
} from './Examples'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Box padding="xlarge">
          <DialogManager content={<ModalInner />}>
            {onClick => <Button onClick={onClick}>Open Modal</Button>}
          </DialogManager>
          <Divider my="large" />
          <Popover pin placement="bottom-start" content={<PopoverInner />}>
            {(onClick, ref, className) => (
              <Button onClick={onClick} ref={ref} className={className}>
                Open Nested Popover
              </Button>
            )}
          </Popover>
          <Divider my="large" />
          <Popover
            pin
            placement="bottom-start"
            content={<PopoverReactSelect />}
          >
            {(onClick, ref, className) => (
              <Button onClick={onClick} ref={ref} className={className}>
                Open React Select Popover
              </Button>
            )}
          </Popover>
          <Divider my="large" />
          <LongText />
        </Box>
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
