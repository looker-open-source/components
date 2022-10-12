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
import type { I18nState } from '../../utils'

const resources = {
  Debug: {
    Config: '구성',
    Dimensions: '치수',
    Error: '오류',
    Measures: '측정치',
    Result: '결과',
    error: '오류',
    ok: '확인',
  },
  ErrorBoundary: {
    'Something went wrong': '문제가 발생했습니다.',
  },
  translation: {
    false: '거짓',
    null: 'null',
    true: '참',
    undefined: '정의되지 않음',
  },
  useNormalizedPivotLabels: {
    'Row Total': '행 총계',
  },
}

export const koKR: I18nState = {
  locale: 'ko-KR',
  resources: { 'ko-KR': resources },
}
