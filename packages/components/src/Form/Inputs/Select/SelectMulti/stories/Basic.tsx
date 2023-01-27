/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { SelectMulti } from '..'
import type { SelectMultiProps } from '../'

export default function Basic(props: SelectMultiProps) {
  return (
    <SelectMulti
      options={[
        { value: 'Cheddar' },
        { value: 'Gouda' },
        { value: 'Swiss' },
        { value: 'Feta' },
        { value: 'Mascarpone' },
        { value: 'Brie' },
        { value: 'Mozzarella' },
        { value: 'Cotija' },
        { value: 'Pepperjack' },
      ]}
      placeholder="Cheeses"
      flex={1}
      {...props}
    />
  )
}
