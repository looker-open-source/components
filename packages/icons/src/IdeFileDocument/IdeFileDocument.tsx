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

export const IdeFileDocument: StyledIcon = React.forwardRef<
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19 5H5L5 19H19V5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z" />

      <rect x={7} y={8} width={10} height={2} rx={1} />

      <rect x={7} y={12} width={10} height={2} rx={1} />

    </StyledIconBase>
  )
})

IdeFileDocument.displayName = 'IdeFileDocument'

export const IdeFileDocumentDimensions = {height: 24, width: 24}
