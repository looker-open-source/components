/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { stringFilterTypeToFilter } from './string_filter_type_to_filter'

describe('string filter options', () => {
  it('should use multi input filter if allowMultipleValues is true', () => {
    expect(
      (stringFilterTypeToFilter('match', false, true) as React.ComponentType)
        .displayName
    ).toBe('MultiStringInput')
  })
  it('should use single input filter if allowMultipleValues is false', () => {
    expect(
      (stringFilterTypeToFilter('match', false, false) as React.ComponentType)
        .displayName
    ).toBe('StringInput')
  })

  it('should use single input filter for parameter filters even if allowMultipleValues is true', () => {
    expect(
      (stringFilterTypeToFilter('match', true, true) as React.ComponentType)
        .displayName
    ).toBe('StringInput')
  })
})
