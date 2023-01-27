/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Select } from '..'

export default function Groups() {
  return (
    <Select
      maxWidth={400}
      options={[
        {
          label: 'CHEESES',
          options: [
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ],
        },
        {
          label: 'FRUITS',
          options: [
            { label: 'Grapes', value: 'grape' },
            { label: 'Apples', value: 'apple' },
            { label: 'Strawberries', value: 'strawberries' },
          ],
        },
        {
          options: [
            { label: 'Pizza', value: 'pizza' },
            { label: 'Hamburgers', value: 'hamburgers' },
          ],
        },
      ]}
    />
  )
}
