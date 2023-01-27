/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ReactNode } from 'react'
import { ArrowDropDown } from '@styled-icons/material'
import { ButtonOutline } from '../../Button'
import { Box } from '../../Layout'
import { Popover } from '../Popover'
import { PopoverContent } from '../Layout/PopoverContent'

type EdgeOverflowProps = {
  top?: number
  left?: number
  bottom?: number
  right?: number
  children?: ReactNode
}

export const EdgeOverflow = ({
  children,
  top,
  left,
  bottom,
  right,
}: EdgeOverflowProps) => (
  <Box position="absolute" top={top} left={left} bottom={bottom} right={right}>
    <Popover
      content={
        <PopoverContent width="18rem" height="5rem">
          There's stuff here... it hits the edge{' '}
        </PopoverContent>
      }
    >
      <ButtonOutline iconAfter={<ArrowDropDown />} m="xxlarge">
        {children}
      </ButtonOutline>
    </Popover>
  </Box>
)
