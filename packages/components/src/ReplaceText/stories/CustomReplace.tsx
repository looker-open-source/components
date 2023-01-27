/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ReplaceText } from '../ReplaceText'

export default function CustomReplace() {
  return (
    <ReplaceText match="che" replace={props => <em {...props} />}>
      Cheddar cheese
    </ReplaceText>
  )
}
