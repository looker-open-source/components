/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Paragraph, Box, Heading, Button } from '@looker/components'
import React from 'react'
import { Popover, PopoverContent } from '..'

export default function Placement() {
  const popoverContent = (
    <PopoverContent>
      <Paragraph width={300} p="u10">
        👋 Hello, I am a popover!
      </Paragraph>
    </PopoverContent>
  )

  return (
    <Box mt="large">
      <Heading>Placement</Heading>
      <Box my="medium">
        <Popover content={popoverContent}>
          <Button>Default</Button>
        </Popover>

        <Popover content={popoverContent}>
          <Button>Default</Button>
        </Popover>
      </Box>
    </Box>
  )
}
