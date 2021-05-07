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
import { ResourceLanguage } from 'i18next'
import React from 'react'
import { render } from 'react-dom'
import { ComponentsProvider } from '@looker/components'
import { FieldDate } from '@looker/components-date'
import { I18nTest } from './I18nTest'

export interface LocaleResourceModule {
  default: ResourceLanguage
}

const getLocaleResource = async (locale: string) => {
  return import(`./locales/${locale}.ts`)
    .catch((error) => {
      throw error
    })
    .then((module: LocaleResourceModule) => ({
      ...module.default,
      '@looker/components-date': { Date: 'Datesies' },
    }))
}

const App = () => {
  return (
    <ComponentsProvider
      loadGoogleFonts
      i18n={{
        getLocaleResource,
        locale: 'es',
      }}
    >
      <I18nTest />
      <FieldDate />
    </ComponentsProvider>
  )
}
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
