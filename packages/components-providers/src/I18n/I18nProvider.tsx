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

import React, { FC, useState, useEffect, useRef } from 'react'
import { I18nContext } from './I18nContext'
import { I18nOptions } from './types'
import { i18nUpdateGetResources, i18nUpdateResources } from './utils'

export const I18nProvider: FC<I18nOptions> = ({
  children,
  locale: initialLocale,
  resources,
  getLocaleResource,
}) => {
  const [locale, setLocale] = useState(initialLocale || 'en')
  const [ready, setReady] = useState(getLocaleResource === undefined)

  const firstRenderRef = useRef(true)
  if (!getLocaleResource && firstRenderRef.current) {
    i18nUpdateResources({ lng: locale, resources })
  }

  useEffect(() => {
    if (getLocaleResource) {
      setReady(false)
      i18nUpdateGetResources({ getLocaleResource, locale }).then(() => {
        setReady(true)
      })
    } else if (!firstRenderRef.current) {
      i18nUpdateResources({ lng: locale, resources })
    }
    firstRenderRef.current = false
  }, [getLocaleResource, locale, resources])

  if (!ready) return null

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}
