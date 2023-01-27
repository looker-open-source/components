/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ReactNode } from 'react'
import { Span } from '../Text/Span'
import { useTooltip } from '../Tooltip'
import { isOverflowing } from '../utils'

export type UseTruncateTooltipProps = {
  children: ReactNode
  description?: string
  element?: HTMLElement | null
}

export const useTruncateTooltip = ({
  children,
  description,
  element,
}: UseTruncateTooltipProps) => {
  return useTooltip({
    // only render tooltip if text actually overflows (or if there's a description)
    canOpen: (triggerElement: HTMLElement) =>
      description !== undefined || isOverflowing(element || triggerElement),
    content: (
      <>
        {children}
        {description && (
          <>
            <br />
            <Span color="text2">{description}</Span>
          </>
        )}
      </>
    ),
    invert: false,
    placement: 'top-start',
    textAlign: 'left',
    width: 'auto',
  })
}
