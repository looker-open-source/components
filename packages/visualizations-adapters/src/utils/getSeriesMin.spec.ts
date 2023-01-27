/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { getSeriesMin } from './getSeriesMin'

describe('getSeriesMin', () => {
  it('gets minimum value from data array', () => {
    const data = [
      { series1: 0, series2: 10 },
      { series1: 3, series2: 7 },
    ]
    expect(getSeriesMin('series1', data)).toEqual(0)
    expect(getSeriesMin('series2', data)).toEqual(7)
  })
  it('it ignores missing or non-numeric values', () => {
    const data = [
      { series1: -50, series2: -20 },
      { series1: -3, series2: -7 },
      { series1: null, series2: 'negative seven hundred' },
    ]
    expect(getSeriesMin('series1', data)).toEqual(-50)
    expect(getSeriesMin('series2', data)).toEqual(-20)
  })
  it('returns zero when all data points are non-numeric', () => {
    const data = [
      { series1: 'today', series2: 'gold' },
      { series1: 'thirty five', series2: 'doogie houser' },
      { series1: null, series2: 'negative seven hundred' },
    ]
    expect(getSeriesMin('series1', data)).toEqual(0)
    expect(getSeriesMin('series2', data)).toEqual(0)
  })
})
