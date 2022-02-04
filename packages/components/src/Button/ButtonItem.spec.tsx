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
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '@looker/components-test-utils'
import { ButtonItem } from './ButtonItem'

describe('ButtonItem', () => {
  test('focusVisible & handlers', () => {
    const onBlur = jest.fn()
    const onClick = jest.fn()
    const onKeyUp = jest.fn()

    renderWithTheme(
      <ButtonItem onBlur={onBlur} onClick={onClick} onKeyUp={onKeyUp}>
        A ButtonItem
      </ButtonItem>
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(button).not.toHaveStyleRule('box-shadow')

    fireEvent.keyUp(button, {
      charCode: 9,
      code: 9,
      key: 'Tab',
    })
    expect(button).toHaveStyleRule('box-shadow: 0 0 0.5px 1px #9785F2')

    fireEvent.blur(button)
    // eslint-disable-next-line jest-dom/prefer-to-have-style
    expect(button).not.toHaveStyleRule('box-shadow')

    expect(onKeyUp).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onBlur).toHaveBeenCalledTimes(1)
  })
})
