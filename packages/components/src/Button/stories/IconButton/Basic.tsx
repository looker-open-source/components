/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { IconButton } from '../..'

export default function Basic() {
  return <IconButton icon={<MaterialIcons.Add />} label="Add" />
}
