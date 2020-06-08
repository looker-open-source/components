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
import { ComponentsProvider, ButtonOutline, Tooltip } from '@looker/components'

const App = () => {
  return (
    <ComponentsProvider>
      <Tooltip
        width="20rem"
        placement="right"
        textAlign="left"
        content={
          <>
            This is a tooltip with quite a bit of text. It's probably not ideal
            to have this much text in a Tooltip. Perhaps you should link to
            another document
          </>
        }
      >
        <ButtonOutline>Tooltip with lots of text</ButtonOutline>
      </Tooltip>
      <Tooltip
        width="20rem"
        placement="right"
        textAlign="left"
        content={
          <>
            This is a tooltip with quite a bit of text. It's probably not ideal
            to have this much text in a Tooltip. Perhaps you should link to
            another document
          </>
        }
      >
        <ButtonOutline className="hover">
          Tooltip with lots of text
        </ButtonOutline>
      </Tooltip>
    </ComponentsProvider>
  )
}

/*
  This is the binding site for the playground. If you want to edit the
  primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
