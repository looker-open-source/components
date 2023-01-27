/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InlineInputText } from '../InlineInputText'

export default function ReadOnly() {
  return <InlineInputText readOnly value="You can't change me." />
}
