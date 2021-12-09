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
import i18next from 'i18next'
import es from 'date-fns/locale/es'
import { getDateLocale, i18nInit } from './i18n'

describe('i18nInit', () => {
  let spy: jest.SpyInstance
  beforeEach(() => {
    i18next.isInitialized = false
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
    i18nInit({
      dateLocale: es,
      locale: 'es-ES',
      resources: { 'es-ES': custom },
    })
    expect(i18next.init).toHaveBeenCalledTimes(1)
    expect(spy.mock.calls[0][0].lng).toEqual('es-ES')
    expect(spy.mock.calls[0][0].resources['es-ES']).toMatchObject(custom)
    expect(getDateLocale()).toBe(es)
  })
})
