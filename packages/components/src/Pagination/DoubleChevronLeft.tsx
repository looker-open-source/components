/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { StyledIcon, StyledIconProps } from '@styled-icons/styled-icon'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const DoubleChevronLeft: StyledIcon = React.forwardRef<
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
      <path d="M18.4102 7.41L13.8302 12L18.4102 16.59L17.0002 18L11.0002 12L17.0002 6L18.4102 7.41Z" />

      <path d="M13.4102 7.41L8.83016 12L13.4102 16.59L12.0002 18L6.00016 12L12.0002 6L13.4102 7.41Z" />
    </StyledIconBase>
  )
})

DoubleChevronLeft.displayName = 'DoubleChevronLeft'

export const DoubleChevronLeftDimensions = { height: 24, width: 24 }
