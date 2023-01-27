/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ArrowDropDown } from '@styled-icons/material'
import { ButtonOutline } from '../../Button'
import { Box } from '../../Layout'
import { Paragraph } from '../../Text'
import { Popover } from '../Popover'
import { PopoverContent } from '../Layout/PopoverContent'

export const ContentOverflow = ({
  children,
}: React.PropsWithChildren<unknown>) => (
  <Box position="absolute" top="40%" left="40%">
    <Popover
      pin
      placement="bottom"
      content={
        <PopoverContent width="18rem">
          <Paragraph>Stuff above spacer</Paragraph>
          <Box height="60vh" bg="ui1">
            Spacer
          </Box>
          <Paragraph>Content below spacer</Paragraph>
        </PopoverContent>
      }
    >
      <ButtonOutline iconAfter={<ArrowDropDown />} m="xxlarge">
        {children}
      </ButtonOutline>
    </Popover>
  </Box>
)
