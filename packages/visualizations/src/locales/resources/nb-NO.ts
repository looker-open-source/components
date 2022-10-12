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
import { nbNO as visAdapterLocales } from '@looker/visualizations-adapters'
import { nbNO as visTableLocales } from '@looker/visualizations-table'
import { nbNO as visVisxLocales } from '@looker/visualizations-visx'

const resources = {
  Query: {
    'No children passed to Query component':
      'Ingen underordnede elementer ble sendt til spørrings-komponenten',
    'Query component received both dashboard and query props':
      'Spørringskomponenten mottok både instrumentbord og spørringsrekvisitter',
  },
  QueryError: {
    Error: 'Feil',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Mål av typen dato støttes for øyeblikket ikke',
    'No chart found for type "{{type}}"':
      'Ingen diagrammer funnet for type «{{type}}»',
  },
}

export const nbNO: I18nState = {
  locale: 'nb-NO',
  resources: {
    'nb-NO': merge(
      {},
      resources,
      visAdapterLocales.resources['nb-NO'],
      visTableLocales.resources['nb-NO'],
      visVisxLocales.resources['nb-NO']
    ),
  },
}
