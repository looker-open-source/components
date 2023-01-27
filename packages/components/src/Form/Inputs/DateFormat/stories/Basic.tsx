/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { DateTimeFormatProps } from '../../DateTimeFormat'
import { DateFormat } from '../DateFormat'

export default function Basic(props: DateTimeFormatProps) {
  return <DateFormat {...props} />
}
