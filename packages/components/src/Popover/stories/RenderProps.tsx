/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Paragraph } from '@looker/components'
import React from 'react'
import { Popover, PopoverContent } from '..'

export default function RenderProps() {
  const popoverContent = (
    <PopoverContent>
      <Paragraph width={300} p="u10">
        👋 Hello, I am a popover!
      </Paragraph>
    </PopoverContent>
  )
  return (
    <Popover content={popoverContent}>
      {props => <button {...props}>Test</button>}
    </Popover>
  )
}
