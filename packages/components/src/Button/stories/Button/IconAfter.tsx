/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Button } from '../..'

export default function IconAfter() {
  return <Button iconAfter={<MaterialIcons.Delete />}>Button Text</Button>
}
