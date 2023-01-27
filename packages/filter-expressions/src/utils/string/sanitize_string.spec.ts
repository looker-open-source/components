/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { UserAttributeWithValue, FilterModel } from '../../types'
import { parseFilterExpression } from '../parse_filter_expression'
import { sanitizeString } from './sanitize_string'

describe('Sanitize String tests', () => {
  it('works when switching to startsWith', () => {
    const expression = 'foo'
    const ast = parseFilterExpression('string', expression)
    const item = sanitizeString({ ...ast, type: 'startsWith' } as FilterModel)
    expect(item.value).toMatchObject(['foo'])
    expect(item.type).toBe('startsWith')
  })

  it('works when switching to match', () => {
    const expression = 'foo'
    const ast = parseFilterExpression('string', expression)
    const item = sanitizeString({ ...ast, type: 'match' } as FilterModel)
    expect(item.value).toMatchObject(['foo'])
    expect(item.type).toBe('match')
  })

  it('replaces the userAttribute value when switching to match', () => {
    const userAttributeWithValue: UserAttributeWithValue = {
      name: 'id',
      label: 'id',
      value: 'ua',
      rank: 0,
      value_is_hidden: false,
      source: '',
      hidden_value_domain_whitelist: '',
      user_attribute_id: '1',
      user_can_edit: false,
      user_id: '1',
      can: {},
    }
    const expression = `{{ _user_attributes['id'] }}`
    const ast = parseFilterExpression('string', expression, [
      userAttributeWithValue,
    ])
    expect(ast).toMatchSnapshot()
    const item = sanitizeString({ ...ast, type: 'match' } as FilterModel, [
      userAttributeWithValue,
    ])
    expect(item.value).toMatchObject(['ua'])
    expect(item.type).toBe('match')
  })
})
