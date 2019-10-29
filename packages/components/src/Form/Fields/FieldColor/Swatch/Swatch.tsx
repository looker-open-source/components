/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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

import React, { forwardRef, Ref } from 'react'
import { Box, BoxProps } from '../../../../Layout'
import { CustomizableInputTextAttributes } from '../../../'

export interface SwatchProps extends BoxProps {
  /**
   * The background color to display on the swatch.
   */
  color?: string
  /**
   * Swatch height.
   */
  height?: string
  /**
   * Swatch width.
   */
  width?: string
}

export const Swatch = forwardRef(
  (props: SwatchProps, ref: Ref<HTMLDivElement>) => {
    const {
      color = 'white',
      width = '28px',
      height = '28px',
      ...boxProps
    } = props
    return (
      <Box
        ref={ref}
        border="1px solid"
        borderColor="palette.charcoal300"
        borderRadius={CustomizableInputTextAttributes.borderRadius}
        bg={color}
        width={width}
        height={height}
        {...boxProps}
      />
    )
  }
)

Swatch.displayName = 'Swatch'
