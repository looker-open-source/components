/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputDate } from '..'

export default () => (
  <InputDate
    dateStringFormat="MM-dd-y"
    defaultValue={new Date('February 3, 2009')}
  />
)
