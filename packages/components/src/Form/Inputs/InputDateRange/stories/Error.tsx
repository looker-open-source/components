/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputDateRange } from '../InputDateRange'

const noop = () => undefined

export default function Error() {
  return <InputDateRange value={{}} onChange={noop} validationType="error" />
}
