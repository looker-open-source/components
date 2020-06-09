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
import { ComponentsProvider, Flex, Icon } from '@looker/components'
const App = () => {
  return (
    <ComponentsProvider>
      <Flex alignItems="center" justifyContent="space-evenly">
        <Icon
          artwork={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                fill="#1C2125"
              />
            </svg>
          }
          name="GearOutline"
          size="large"
        />
        <Icon name="GearOutline" size="xxsmall" />
        <Icon
          artwork={
            <svg width="100" height="100">
              <rect
                width="100"
                height="100"
                fill="rgb(0,0,255)"
                strokeWidth="3"
                stroke="rgb(0,0,0)"
              />
            </svg>
          }
        />
        <Icon
          artwork={
            <svg>
              <polygon
                points="100,10 40,198 190,78 10,78 160,198"
                fill="lime"
                stroke="purple"
                strokeWidth="5"
                fillRule="nonzero"
              />
            </svg>
          }
        />
      </Flex>
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
