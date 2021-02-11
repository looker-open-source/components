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

import 'jest-styled-components'
import React, { FC } from 'react'
import noop from 'lodash/noop'
import {
  createWithTheme,
  mountWithTheme,
  assertSnapshot,
} from '@looker/components-test-utils'

import { Box } from './Box'

describe('Box', () => {
  describe('as=', () => {
    test('allows Box to render as any HTML tag', () => {
      const boxAsButton = mountWithTheme(<Box as="button" />)
      expect(boxAsButton.find('button').exists()).toBeTruthy()
    })

    test('any prop can be passed to Box', () => {
      const BoxAsInput: FC<{ type?: string }> = (props) => (
        <Box as="input" {...props} />
      )
      const boxAsCheckbox = mountWithTheme(<BoxAsInput type="checkbox" />)
      expect(boxAsCheckbox.find('input[type="checkbox"]').exists()).toBeTruthy()
    })
  })

  describe('core HTML attributes', () => {
    test('Box allows autoFocus', () => {
      assertSnapshot(<Box autoFocus>Autofocus?</Box>)
    })

    test('Box allows for HTML events', () => {
      assertSnapshot(<Box onMouseEnter={noop}>Autofocus?</Box>)
    })

    test('Box allows for ARIA attributes', () => {
      assertSnapshot(<Box aria-disabled>aria-disabled</Box>)
    })
  })

  describe('user select', () => {
    test('Box cannot be selected', () => {
      const tree = createWithTheme(<Box userSelect="none" />).toJSON()
      expect(tree).toHaveStyleRule('user-select', 'none')
    })
  })
})
