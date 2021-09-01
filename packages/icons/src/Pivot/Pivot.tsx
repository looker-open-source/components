/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */


/**
 * NOTE: This is an auto-generated file changes within may be overwritten
 * Run `yarn workspace @looker/icons build` to update
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
