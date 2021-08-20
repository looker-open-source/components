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
import type { FC } from 'react'
import React from 'react'
import { i18nResources } from './resources'
import type { UseI18nProps } from './useI18n'
import { i18nInit, i18nInitOptions, useI18n } from './useI18n'

const TestComponent: FC<UseI18nProps> = ({ children, ...props }) => {
  useI18n(props)
  return <>{children}</>
}

describe('useI18n', () => {
  test('initializes i18next', () => {
    const spy = jest.spyOn(i18next, 'init')
    render(<TestComponent />)

    expect(i18next.init).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })

  test('updates with new props', () => {
    const spy = jest.spyOn(i18next, 'addResourceBundle')
    i18next.isInitialized = true
    render(<TestComponent />)
    expect(spy).toHaveBeenCalledTimes(Object.keys(i18nResources.en).length)
    spy.mockRestore()
  })

  test('updates with new locale', () => {
    const spy = jest.spyOn(i18next, 'changeLanguage')
    i18next.isInitialized = true
    render(<TestComponent locale="de-DE" />)
    expect(spy.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "de-DE",
        ],
      ]
    `)
    spy.mockRestore()
  })
})

describe('i18nInit', () => {
  test('calls init with default options', () => {
    const spy = jest.spyOn(i18next, 'init')
    i18nInit()
    expect(i18next.init).toHaveBeenCalledWith(i18nInitOptions)
    spy.mockRestore()
  })
})
