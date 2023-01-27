/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Button } from '../..'

export default function IconBefore() {
  return <Button iconBefore={<MaterialIcons.AddCircle />}>Button Text</Button>
}
