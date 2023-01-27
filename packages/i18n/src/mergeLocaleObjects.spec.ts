/*

 MIT License

 Copyright (c) 2023 Google LLC

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

import dateLocale from 'date-fns/locale/es'
import { mergeLocaleObjects } from './mergeLocaleObjects'

const locale1 = {
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace1: {
        TestKey: 'Test Value',
      },
    },
  },
}
const locale2 = {
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace2: {
        TestKey2: 'Test Value 2',
      },
    },
  },
}

const localeWithDate = {
  dateLocale,
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace4: {
        TestKey3: 'Test Value 3',
      },
    },
  },
}

test('it merges locales with no dateLocale', () => {
  const result = mergeLocaleObjects([locale1, locale2], 'es-ES', {
    NameSpace3: { TestKeyCurrent: 'Test Value Current' },
  })
  expect(result).toMatchInlineSnapshot(`
    Object {
      "locale": "es-ES",
      "resources": Object {
        "es-ES": Object {
          "NameSpace1": Object {
            "TestKey": "Test Value",
          },
          "NameSpace2": Object {
            "TestKey2": "Test Value 2",
          },
          "NameSpace3": Object {
            "TestKeyCurrent": "Test Value Current",
          },
        },
      },
    }
  `)
})

test('it merges locales with possible dateLocale', () => {
  const result = mergeLocaleObjects([localeWithDate, locale1], 'es-ES', {
    NameSpace3: { TestKeyCurrent: 'Test Value Current' },
  })
  expect(result).toMatchObject({
    dateLocale,
    locale: 'es-ES',
    resources: {
      'es-ES': {
        NameSpace1: {
          TestKey: 'Test Value',
        },
        NameSpace3: {
          TestKeyCurrent: 'Test Value Current',
        },
        NameSpace4: {
          TestKey3: 'Test Value 3',
        },
      },
    },
  })
})

test('it uses the current dateLocale', () => {
  const result = mergeLocaleObjects(
    [locale1, locale2],
    'es-ES',
    {
      NameSpace3: { TestKeyCurrent: 'Test Value Current' },
    },
    dateLocale
  )
  expect(result).toMatchObject({
    dateLocale,
    locale: 'es-ES',
    resources: {
      'es-ES': {
        NameSpace1: {
          TestKey: 'Test Value',
        },
        NameSpace2: {
          TestKey2: 'Test Value 2',
        },
        NameSpace3: {
          TestKeyCurrent: 'Test Value Current',
        },
      },
    },
  })
})

test('it uses the current everything if locales array is empty', () => {
  const result = mergeLocaleObjects([], 'es-ES', {
    NameSpace3: { TestKeyCurrent: 'Test Value Current' },
  })
  expect(result).toMatchInlineSnapshot(`
    Object {
      "locale": "es-ES",
      "resources": Object {
        "es-ES": Object {
          "NameSpace3": Object {
            "TestKeyCurrent": "Test Value Current",
          },
        },
      },
    }
  `)
})
