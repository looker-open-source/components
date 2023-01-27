/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import i18next from 'i18next'
import { i18nInit, i18nInitOptions } from './i18nInit'

describe('i18nInit', () => {
  test('calls init with correct options', () => {
    const spy = jest.spyOn(i18next, 'init')
    const resources = { 'de-DE': { foo: { bar: 'BAR' } } }
    i18nInit({ locale: 'de-DE', resources })
    expect(i18next.init).toHaveBeenCalledWith({
      ...i18nInitOptions,
      fallbackLng: ['en'],
      lng: 'de-DE',
      resources,
    })
    spy.mockRestore()
  })
})
