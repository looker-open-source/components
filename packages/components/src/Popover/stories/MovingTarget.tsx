/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect } from 'react'
import { PopoverContent } from '../Layout/PopoverContent'
import { usePopover } from '../usePopover'
import { Paragraph, Box, Heading, useToggle } from '../..'

// Can't have usePopover at the top level of a story because it ends up at the same level
// as ComponentsProvider and can't access FocusTrapContext or ScrollLockContext
const MovingTargetInner = () => {
  const { value, toggle } = useToggle()
  const { popover, popperInstanceRef, open, ref, isOpen } = usePopover({
    content: (
      <PopoverContent p="u5" width="360px">
        <Paragraph>
          The anchor is moving around so the Popover position must be updated
          via popperInstanceRef.current.update.
        </Paragraph>
      </PopoverContent>
    ),
    placement: 'right-end',
  })

  useEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.update()
    }
  }, [popperInstanceRef, value])

  useEffect(() => {
    const int = setInterval(() => {
      toggle()
    }, 6000)
    return () => {
      clearInterval(int)
    }
  }, [toggle])
  return (
    <Box mt="large">
      <Heading>Moving Target</Heading>
      {popover}
      <Box
        mt={value ? 'xxxlarge' : 'medium'}
        border
        width={150}
        p="u3"
        cursor="pointer"
        height={value ? 80 : undefined}
        onClick={open}
        ref={ref}
        className={isOpen ? 'active' : ''}
      >
        Open Popover
      </Box>
    </Box>
  )
}

export default function MovingTarget() {
  return <MovingTargetInner />
}
