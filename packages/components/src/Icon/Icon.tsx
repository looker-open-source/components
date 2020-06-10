/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import {
  color,
  CompatibleHTMLProps,
  omitStyledProps,
  SizeXXSmall,
  SizeXSmall,
  SizeSmall,
  SizeMedium,
  SizeLarge,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
/* eslint import/namespace: ['error', { allowComputed: true }] */
import { Glyphs, IconNames } from '@looker/icons'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'

export type IconSize =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface IconProps
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'onClick'>,
    SimpleLayoutProps {
  color?: string
  name: IconNames
}

export type { IconNames }

const IconFactory = forwardRef(
  ({ className, name, ...props }: IconProps, ref: Ref<HTMLDivElement>) => {
    const Glyph = Glyphs[name]

    return (
      <div className={className} ref={ref} {...omitStyledProps(props)}>
        <Glyph width="100%" height="100%" fill="currentColor" />
      </div>
    )
  }
)

IconFactory.displayName = 'IconFactory'

export const Icon = styled(IconFactory).attrs(({ size, height, width }) => ({
  size: !height && !width ? size || 'medium' : undefined,
}))`
  ${simpleLayoutCSS}
  ${color}

  align-items: center;
  display: inline-flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

// Icon.defaultProps = { size: 'medium' }
