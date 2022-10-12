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
import { ruRU as visAdapterLocales } from '@looker/visualizations-adapters'
import { ruRU as visTableLocales } from '@looker/visualizations-table'
import { ruRU as visVisxLocales } from '@looker/visualizations-visx'

const resources = {
  Query: {
    'No children passed to Query component':
      'Нет дочерних элементов, переданных в компонент запросов Query',
    'Query component received both dashboard and query props':
      'Компонент запросов Query получил свойства панелей мониторинга и запросов',
  },
  QueryError: {
    Error: 'Ошибка',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Поля measure типа date в настоящее время не доступны',
    'No chart found for type "{{type}}"':
      'График для типа «{{type}}» не обнаружен',
  },
}

export const ruRU: I18nState = {
  locale: 'ru-RU',
  resources: {
    'ru-RU': merge(
      {},
      resources,
      visAdapterLocales.resources['ru-RU'],
      visTableLocales.resources['ru-RU'],
      visVisxLocales.resources['ru-RU']
    ),
  },
}
