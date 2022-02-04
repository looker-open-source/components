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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { ModalContent } from './ModalContent'

const originalScrollHeight = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'scrollHeight'
)

const originalOffsetHeight = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'offsetHeight'
)

afterAll(() => {
  originalScrollHeight &&
    Object.defineProperty(
      HTMLElement.prototype,
      'scrollHeight',
      originalScrollHeight
    )

  originalOffsetHeight &&
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetHeight',
      originalOffsetHeight
    )
})

describe('ModalContent', () => {
  test('basic', () => {
    renderWithTheme(<ModalContent>Stuff</ModalContent>)
    const modalContent = screen.getByText('Stuff')

    expect(modalContent).toBeInTheDocument()
    expect(modalContent).toHaveStyleRule('padding-top')
    expect(modalContent).toHaveStyleRule('padding-bottom')
  })

  test('display xxxsmall padding if both hasHeader & hasFooter', () => {
    renderWithTheme(
      <ModalContent hasHeader hasFooter>
        Stuff
      </ModalContent>
    )

    expect(screen.getByText('Stuff')).toHaveStyleRule(
      'padding-bottom',
      '0.125rem'
    )
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem')
  })

  test('has no box shadow when it does not overflow', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 0,
    })

    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 500,
    })

    renderWithTheme(
      <ModalContent hasHeader hasFooter>
        Stuff
      </ModalContent>
    )

    expect(
      getComputedStyle(screen.getByText('Stuff')).getPropertyValue('box-shadow')
    ).toEqual('')
  })

  test('has a box shadow when it overflows', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 500,
    })

    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 0,
    })

    renderWithTheme(
      <ModalContent hasHeader hasFooter>
        Stuff
      </ModalContent>
    )

    expect(
      getComputedStyle(screen.getByText('Stuff')).getPropertyValue('box-shadow')
    ).toEqual('inset 0 -4px 4px -4px #DEE1E5')
  })
})
