/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Info } from '@styled-icons/material/Info'
import { Icon, Tooltip } from '@looker/components'

interface FieldInfoProps {
  content: string
}

export const FieldInfo = ({ content }: FieldInfoProps) => {
  return (
    <Tooltip content={content}>
      <Icon icon={<Info />} size="xxsmall" color="ui4" />
    </Tooltip>
  )
}
