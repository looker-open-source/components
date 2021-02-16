/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { render } from '@testing-library/react'
import i18next from 'i18next'
import React from 'react'
import { i18nResources } from './resources'
import { useI18n, UseI18nProps } from './useI18n'

const TestComponent = (props: UseI18nProps) => {
  useI18n(props)
  return null
}

describe('useI18n', () => {
  test('initializes i18next', () => {
    render(<TestComponent />)
    expect(i18next.init).toHaveBeenCalledTimes(1)
  })

  test('updates with new props', () => {
    i18next.isInitialized = true
    render(<TestComponent />)
    expect(i18next.addResourceBundle).toHaveBeenCalledTimes(
      Object.keys(i18nResources.en).length
    )
  })
})
