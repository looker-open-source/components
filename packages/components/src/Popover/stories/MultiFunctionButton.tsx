/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Button, CopyToClipboard } from '@looker/components'
import React from 'react'
import { Popover, PopoverContent } from '..'

export default function MultiFunctionButton() {
  return (
    <Popover
      content={
        <PopoverContent>
          <CopyToClipboard success="Copied" content="Copy content">
            <Button>Copy</Button>
          </CopyToClipboard>
        </PopoverContent>
      }
    >
      <Button>Open Popover</Button>
    </Popover>
  )
}
