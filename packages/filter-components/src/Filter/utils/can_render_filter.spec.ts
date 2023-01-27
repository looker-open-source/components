/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterExpressionType } from '@looker/filter-expressions'
import { canRenderFilter } from './can_render_filter'

const renderFilterTests: TestItem[] = [
  {
    // slider can render a number
    expression: '25',
    expressionType: 'number',
    config: { type: 'slider', display: 'inline' },
    result: true,
  },
  {
    // slider can't render multiple numbers
    expression: '20,30,40',
    expressionType: 'number',
    config: { type: 'slider', display: 'inline' },
    result: false,
  },
  {
    // range slider can render a range
    expression: '[25,75]',
    expressionType: 'number',
    config: { type: 'range_slider', display: 'inline' },
    result: true,
  },
  {
    // range slider can't render a non-range
    expression: '25',
    expressionType: 'number',
    config: { type: 'range_slider', display: 'inline' },
    result: false,
  },
]

interface TestItem {
  expression: string
  expressionType: FilterExpressionType
  config: { type: string; display: string }
  result: boolean
}

const testFilterConfig = (testItem: TestItem) => {
  test(`${testItem.expression} ${testItem.config.type} ${testItem.result}`, () => {
    const { result, expression, expressionType, config } = testItem
    expect(canRenderFilter({ expression, expressionType, config })).toBe(result)
  })
}

describe('Test that filter can be rendered', () => {
  renderFilterTests.forEach(testFilterConfig)
})
