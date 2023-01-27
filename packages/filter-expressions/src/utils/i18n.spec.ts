/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import i18next from 'i18next'
import { i18nInit } from './i18n'

describe('i18nInit', () => {
  let spy: jest.SpyInstance
  beforeEach(() => {
    spy = jest.spyOn(i18next, 'init')
  })
  afterEach(() => {
    spy.mockRestore()
  })

  it('initializes i18next', () => {
    i18nInit()
    expect(i18next.init).toHaveBeenCalledTimes(1)
    expect(spy.mock.calls[0][0].lng).toEqual('en')
  })

  it('initializes i18next with specific locale and resources', () => {
    const custom = { test: 'prueba' }
    i18nInit({ locale: 'es-ES', resources: { 'es-ES': custom } })
    expect(i18next.init).toHaveBeenCalledTimes(1)
    expect(spy.mock.calls[0][0].lng).toEqual('es-ES')
    expect(spy.mock.calls[0][0].resources['es-ES']).toMatchObject(custom)
  })
})
