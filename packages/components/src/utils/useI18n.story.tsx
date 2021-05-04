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

import React from 'react'
import { Button } from '../Button'
import { Chip } from '../Chip'
import { Space } from '../Layout'
import { useI18n } from './useI18n'

export default {
  component: useI18n,
  title: 'useI18n',
}

const locales = ['es', 'en']
const resources = {
  en: {
    'Hello World': 'Hello World!',
  },
  es: {
    'Hello World': '¡Hola Mundo!',
  },
}

const LocalizedComponent = () => {
  const { locale, setLocale, t } = useI18n('TestComponent', resources)
  const otherLocale = locales[Math.abs(locales.indexOf(locale) - 1)]
  const handleClick = () => {
    setLocale(otherLocale)
  }
  return (
    <Space>
      <Chip onDelete={() => alert('Deleted!')}>{t('Hello World')}</Chip>
      <Button onClick={handleClick}>Switch to {otherLocale}</Button>
    </Space>
  )
}

export const UpdateLocale = () => <LocalizedComponent />
