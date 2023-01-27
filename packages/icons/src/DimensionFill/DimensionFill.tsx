/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */


/**
 * NOTE: This is an auto-generated file changes within may be overwritten
 * Run `npm run build --workspace @looker/icons` to update
 */

import React from 'react'
import type { StyledIcon, StyledIconProps } from '@styled-icons/styled-icon'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const DimensionFill: StyledIcon = React.forwardRef<
  SVGSVGElement,
  StyledIconProps
>((props, ref) => {
  const attrs: React.SVGProps<SVGSVGElement> = {
      "fill": "currentColor",
  "xmlns": "http://www.w3.org/2000/svg",
  }

  return (
    <StyledIconBase
      iconAttrs={attrs}
      iconVerticalAlign="middle"
      iconViewBox="0 0 24 24"
      {...props}
      ref={ref}
    >
      <rect x={8} y={4} width={14} height={3} />

      <path fillRule="evenodd" clipRule="evenodd" d="M2 9H17V15H2V9ZM4 11V13H15V11H4Z" />

      <rect x={8} y={17} width={14} height={3} />

    </StyledIconBase>
  )
})

DimensionFill.displayName = 'DimensionFill'

export const DimensionFillDimensions = {height: 24, width: 24}
