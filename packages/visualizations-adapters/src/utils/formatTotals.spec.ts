/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { formatTotals } from './formatTotals'
import {
  mockTotals,
  mockRawTotals,
  mockNestedRawTotals,
  mockNestedTotals,
} from '../fixtures'

it('tranforms raw totals to desired format for one level deep object', () => {
  expect(formatTotals(mockRawTotals)).toEqual(mockTotals)
})

it('tranforms raw totals to desired format for nested object', () => {
  expect(formatTotals(mockNestedRawTotals)).toEqual(mockNestedTotals)
})
