/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { DateTimeFormatProps } from '../DateTimeFormat'
import { DateTimeFormat } from '../DateTimeFormat'

export const DateFormat = (props: DateTimeFormatProps) => (
  <DateTimeFormat {...props} time={false} />
)
