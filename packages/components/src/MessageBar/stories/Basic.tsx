/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { MessageBar } from '../..'
import type { MessageBarProps } from '../MessageBar'

export default function Basic(props: MessageBarProps) {
  const { children = 'Hey! This is a message to you.', ...rest } = props

  return <MessageBar {...rest}>{children}</MessageBar>
}
