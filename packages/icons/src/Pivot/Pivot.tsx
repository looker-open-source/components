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

export const Pivot: StyledIcon = React.forwardRef<
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 3L21.3301 7.5H18V16C18 17.1046 17.1046 18 16 18H7.5V21.3301L3 17L7.5 12.6699V16H16V7.5H12.6699L17 3Z" />

    </StyledIconBase>
  )
})

Pivot.displayName = 'Pivot'

export const PivotDimensions = {height: 24, width: 24}
