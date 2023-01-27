/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { DateFormat } from '../DateFormat'

export default function Format() {
  return (
    <DateFormat timeZone="Pacific/Auckland">
      {new Date(Date.parse('05 May 2020 12:00 UTC'))}
    </DateFormat>
  )
}
