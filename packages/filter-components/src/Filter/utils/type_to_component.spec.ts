/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { typeToComponent, componentsMap } from './type_to_component';
import { Category } from '@looker/sdk';
import type { ILookmlModelExploreField } from '@looker/sdk';

describe('typeToComponent', () => {
  it('returns type tier for numeric parameter filters with allowed_values', () => {
    expect(
      typeToComponent('number', {
        category: Category.parameter,
        type: 'number',
        has_allowed_values: true,
      } as ILookmlModelExploreField)
    ).toBe(componentsMap.tier);
  });

  it('returns type numeric for numeric parameter filters that allow any input', () => {
    expect(
      typeToComponent('number', {
        category: Category.parameter,
        type: 'number',
        has_allowed_values: false,
      } as ILookmlModelExploreField)
    ).toBe(componentsMap.number);
  });
});
