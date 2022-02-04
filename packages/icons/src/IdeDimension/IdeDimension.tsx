/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

export const IdeDimension: StyledIcon = React.forwardRef<
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
      <path d="M19 7H5C3.9 7 3 7.9 3 9V15C3 16.1 3.9 17 5 17H19C20.1 17 21 16.1 21 15V9C21 7.9 20.1 7 19 7ZM19 15H5V9H19V15Z" />

    </StyledIconBase>
  )
})

IdeDimension.displayName = 'IdeDimension'

export const IdeDimensionDimensions = {height: 24, width: 24}
