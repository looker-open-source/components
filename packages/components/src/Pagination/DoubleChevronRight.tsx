/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { StyledIcon, StyledIconProps } from '@styled-icons/styled-icon'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const DoubleChevronRight: StyledIcon = React.forwardRef<
  SVGSVGElement,
  StyledIconProps
>((props, ref) => {
  const attrs: React.SVGProps<SVGSVGElement> = {
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
  }

  return (
    <StyledIconBase
      iconAttrs={attrs}
      iconVerticalAlign="middle"
      iconViewBox="0 0 24 24"
      {...props}
      ref={ref}
    >
      <path d="M6 16.59L10.58 12L6 7.41L7.41 6L13.41 12L7.41 18L6 16.59Z" />

      <path d="M11 16.59L15.58 12L11 7.41L12.41 6L18.41 12L12.41 18L11 16.59Z" />
    </StyledIconBase>
  )
})

DoubleChevronRight.displayName = 'DoubleChevronRight'

export const DoubleChevronRightDimensions = { height: 24, width: 24 }
