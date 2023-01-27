/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterExpressionType } from '../types'
import { parseFilterExpression } from '../utils'

const grammars: FilterExpressionType[] = [
  'date',
  'number',
  'string',
  'location',
]

const userAttributeExpression = "{{ _user_attributes['id'] }}"

const ast = {
  type: 'user_attribute',
  attributeName: 'id',
  is: true,
}
describe('User Attribute grammar can parse expressions', () => {
  it.each(grammars)('%s', (grammar) =>
    expect(
      parseFilterExpression(grammar, userAttributeExpression)
    ).toMatchObject(ast)
  )
})
