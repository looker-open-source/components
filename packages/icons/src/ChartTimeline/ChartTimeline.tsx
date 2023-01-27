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

export const ChartTimeline: StyledIcon = React.forwardRef<
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
      <path d="M19 13H5V11H19V13ZM21 17H7V15H21V17ZM17 7V9H3V7H17Z" />

    </StyledIconBase>
  )
})

ChartTimeline.displayName = 'ChartTimeline'

export const ChartTimelineDimensions = {height: 24, width: 24}
