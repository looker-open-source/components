/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Button } from '@looker/components'
import React from 'react'
import { Popover, PopoverContent } from '..'

export default function Basic() {
  return (
    <Popover content={<PopoverContent>Some content</PopoverContent>}>
      <Button>Open</Button>
    </Popover>
  )
}
