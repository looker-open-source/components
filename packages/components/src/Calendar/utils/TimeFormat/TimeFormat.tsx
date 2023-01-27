/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { DateTimeFormatProps } from '../../../Form/Inputs/DateTimeFormat'
import { DateTimeFormat } from '../../../Form/Inputs/DateTimeFormat'

export const TimeFormat = (props: DateTimeFormatProps) => (
  <DateTimeFormat {...props} date={false} />
)
