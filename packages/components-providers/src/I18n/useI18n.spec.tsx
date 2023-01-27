/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { render } from '@testing-library/react'
import i18next from 'i18next'
import React from 'react'
import type { ReactNode } from 'react'
import type { UseI18nProps } from './useI18n'
import { useI18n } from './useI18n'

const i18nMockResources = {
  en: {
    AComponent: {
      Something: 'Something',
      'Something else': 'Something else',
    },
    BComponent: {
      Hello: 'Hello',
      World: 'World',
    },
  },
}
type TestComponentProps = UseI18nProps & {
  children?: ReactNode
}

const TestComponent = ({ children, ...props }: TestComponentProps) => {
  useI18n(props)
  return <>{children}</>
}

describe('useI18n', () => {
  test('initializes i18next', () => {
    const spy = jest.spyOn(i18next, 'init')
    render(<TestComponent />)

    expect(i18next.init).toHaveBeenCalledTimes(1)
    spy.mockRestore()
    i18next.isInitialized = false
  })

  test('updates with new props', () => {
    const spy = jest.spyOn(i18next, 'addResourceBundle')
    i18next.isInitialized = true
    render(<TestComponent resources={i18nMockResources} />)
    expect(spy).toHaveBeenCalledTimes(Object.keys(i18nMockResources.en).length)
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
