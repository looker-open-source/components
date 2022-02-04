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

import { renderHook } from '@testing-library/react-hooks'
import type { Option } from '../../types/option'
import {
  useFiscalThisNextUnits,
  useFiscalLastUnits,
  useThisNextUnits,
  useLastUnits,
} from './this_next_last_units'

const testSingular = (option: Option) =>
  expect(option.label).toBe(option.singular)

describe('date unit options for ThisNextLast component', () => {
  const hooksToTest: { [key: string]: () => Option[] } = {
    useLastUnits,
    useThisNextUnits,
    useFiscalThisNextUnits,
    useFiscalLastUnits,
  }

  Object.keys(hooksToTest).forEach((key: string) => {
    it(`${key} matches expected values`, () => {
      const {
        result: { current },
      } = renderHook<undefined, Option[]>(hooksToTest[key])
      expect(current).toMatchSnapshot()
      current.forEach(testSingular)
    })
  })

  it('this and next component options should not contain day, hour, minute, second', () => {
    const notContains = ['day', 'hour', 'minute', 'second']

    const {
      result: { current: thisNextUnits },
    } = renderHook<undefined, Option[]>(useThisNextUnits)
    const {
      result: { current: fiscalThisNextUnits },
    } = renderHook<undefined, Option[]>(useFiscalThisNextUnits)

    expect(thisNextUnits).not.toContain(notContains)
    expect(fiscalThisNextUnits).not.toContain(notContains)
  })
})
