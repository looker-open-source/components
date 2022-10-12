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
import { ptPT as visAdapterLocales } from '@looker/visualizations-adapters'
import { ptPT as visTableLocales } from '@looker/visualizations-table'
import { ptPT as visVisxLocales } from '@looker/visualizations-visx'

const resources = {
  Query: {
    'No children passed to Query component':
      'Nenhum filho passou para a componente de consulta',
    'Query component received both dashboard and query props':
      'A componente de consulta recebeu tanto as propriedades do dashboard como da consulta',
  },
  QueryError: {
    Error: 'Erro',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Os indicadores do tipo "data" não são atualmente suportados',
    'No chart found for type "{{type}}"':
      'Não foram encontrados gráficos para o tipo “{{type}}”',
  },
}

export const ptPT: I18nState = {
  locale: 'pt-PT',
  resources: {
    'pt-PT': merge(
      {},
      resources,
      visAdapterLocales.resources['pt-PT'],
      visTableLocales.resources['pt-PT'],
      visVisxLocales.resources['pt-PT']
    ),
  },
}
