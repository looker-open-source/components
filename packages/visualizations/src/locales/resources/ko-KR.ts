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
import { koKR as visAdapterLocales } from '@looker/visualizations-adapters'
import { koKR as visTableLocales } from '@looker/visualizations-table'
import { koKR as visVisxLocales } from '@looker/visualizations-visx'

const resources = {
  Query: {
    'No children passed to Query component':
      '쿼리 구성 요소에 전달된 하위 항목 없음',
    'Query component received both dashboard and query props':
      '쿼리 구성 요소에 대시보드와 쿼리 속성이 둘 다 수신됨',
  },
  QueryError: {
    Error: '오류',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      "현재 '날짜' 유형의 Measure는 지원되지 않음",
    'No chart found for type "{{type}}"':
      '유형 "{{type}}"의 차트를 찾을 수 없음',
  },
}

export const koKR: I18nState = {
  locale: 'ko-KR',
  resources: {
    'ko-KR': merge(
      {},
      resources,
      visAdapterLocales.resources['ko-KR'],
      visTableLocales.resources['ko-KR'],
      visVisxLocales.resources['ko-KR']
    ),
  },
}
