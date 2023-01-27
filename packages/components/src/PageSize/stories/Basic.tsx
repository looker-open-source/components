/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { PageSize } from '..'

export default function Basic() {
  return (
    <PageSize
      total={100}
      value={100}
      onChange={(value: number) => alert(`You chose ${value} per page`)}
    />
  )
}
