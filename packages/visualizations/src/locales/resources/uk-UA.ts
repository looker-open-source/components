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
import merge from 'lodash/merge'
import type { I18nState } from '../../utils'
import { ukUA as visAdapterLocales } from '@looker/visualizations-adapters'
import { ukUA as visTableLocales } from '@looker/visualizations-table'
import { ukUA as visVisxLocales } from '@looker/visualizations-visx'

const resources = {
  Query: {
    'No children passed to Query component':
      'Компоненту запиту не передано жодних дочірніх об’єктів',
    'Query component received both dashboard and query props':
      'Компонент запиту отримав властивості як приладної дошки, так і запиту',
  },
  QueryError: {
    Error: 'Помилка',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Міри типу «дата» наразі не підтримуються',
    'No chart found for type "{{type}}"':
      'Для типу «{{type}}» не знайдено діаграми',
  },
}

export const ukUA: I18nState = {
  locale: 'uk-UA',
  resources: {
    'uk-UA': merge(
      {},
      resources,
      visAdapterLocales.resources['uk-UA'],
      visTableLocales.resources['uk-UA'],
      visVisxLocales.resources['uk-UA']
    ),
  },
}
