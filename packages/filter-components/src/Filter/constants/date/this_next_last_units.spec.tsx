/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { ComponentsProvider } from '@looker/components'
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
  const wrapper = ({ children }: { children: React.ReactElement }) => (
    <ComponentsProvider>{children}</ComponentsProvider>
  )

  Object.keys(hooksToTest).forEach((key: string) => {
    it(`${key} matches expected values`, () => {
      const {
        result: { current },
      } = renderHook<undefined, Option[]>(hooksToTest[key], {
        wrapper,
      })
      expect(current).toMatchSnapshot()
      current.forEach(testSingular)
    })
  })

  it('this and next component options should not contain day, hour, minute, second', () => {
    const notContains = ['day', 'hour', 'minute', 'second']

    const {
      result: { current: thisNextUnits },
    } = renderHook<undefined, Option[]>(useThisNextUnits, { wrapper })
    const {
      result: { current: fiscalThisNextUnits },
    } = renderHook<undefined, Option[]>(useFiscalThisNextUnits, { wrapper })

    expect(thisNextUnits).not.toContain(notContains)
    expect(fiscalThisNextUnits).not.toContain(notContains)
  })
})
