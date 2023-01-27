/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FieldFilter } from '../Form/Inputs/InputFilters'

export const filters: FieldFilter[] = [
  {
    field: 'name',
    label: 'Name',
    options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella'],
  },
  {
    field: 'color',
    label: 'Color',
    multiple: true,
    options: ['blue', 'orange', 'yellow', 'white'],
  },
  {
    field: 'origin',
    label: 'Origin',
    multiple: true,
    options: ['France', 'England', 'Italy', 'Netherlands', 'United States'],
  },
]
