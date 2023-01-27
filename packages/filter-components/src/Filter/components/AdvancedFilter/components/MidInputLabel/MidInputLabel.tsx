/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ValidationType } from '@looker/components'
import { inputHeight, Box2 } from '@looker/components'
import styled from 'styled-components'

export type MidInputLabelProps = {
  children: string
  className?: string
  validationType?: ValidationType
}

export const MidInputLabel = styled(
  ({ validationType, ...props }: MidInputLabelProps) => {
    return (
      <Box2
        alignItems="center"
        alignSelf="center"
        bg="background"
        border={validationType === 'error' ? 'critical' : 'ui3'}
        color="text1"
        display="flex"
        height={inputHeight}
        lineHeight="medium"
        px="xsmall"
        textAlign="right"
        {...props}
      />
    )
  }
)`
  border-right: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`
