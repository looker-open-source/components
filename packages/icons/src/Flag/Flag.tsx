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

export const Flag: StyledIcon = React.forwardRef<
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 8.5L21 3H3V14H21L17 8.5ZM17.0725 12L14.527 8.5L17.0725 5H5V12H17.0725Z" />

      <path fillRule="evenodd" clipRule="evenodd" d="M3 20L3 14H5L5 20H3Z" />

    </StyledIconBase>
  )
})

Flag.displayName = 'Flag'

export const FlagDimensions = {height: 24, width: 24}
