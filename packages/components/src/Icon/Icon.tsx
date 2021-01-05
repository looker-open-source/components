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
  SizeXXSmall,
  SizeXSmall,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  omitStyledProps,
} from '@looker/design-tokens'
import React, { forwardRef, Ref, ReactNode } from 'react'
import styled from 'styled-components'
/* eslint import/namespace: ['error', { allowComputed: true }] */
import { Glyphs, IconNames } from '@looker/icons'
import {
  sizeSimpleLayoutCSS,
  SizeSimpleLayoutProps,
} from '../Layout/utils/simple'

export type IconSize =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface IconProps
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'onClick'>,
    SizeSimpleLayoutProps {
  /**
   * Display an icon/logo that is not available on our components list. Use artwork prop with an svg instead of Icon name.
   */
  artwork?: ReactNode
  color?: string
  name?: IconNames
  /**
   * Explicitly specify a title for the SVG rendered by the icon.
   * NOTE: If title is not specified `aria-hidden="true"` will be applied to hide the SVG from
   * screen-readers
   */
  title?: string
}

export type { IconNames }

const IconLayout = forwardRef(
  (
    { artwork = undefined, label, name, title, ...props }: IconProps,
    ref: Ref<HTMLDivElement>
  ) => {
    if ((artwork && name) || (!artwork && !name)) {
      // eslint-disable-next-line no-console
      console.warn('You may only specify name OR artwork, not both.')
    }
    const Glyph = name ? Glyphs[name] : 'div'
    const value = artwork || (
      <Glyph
        aria-hidden={title === undefined && true}
        width="100%"
        height="100%"
        fill="currentColor"
        title={title}
      />
    )
    return (
      <div
        aria-label={label || undefined}
        role="img"
        ref={ref}
        {...omitStyledProps(props)}
      >
        {value}
      </div>
    )
  }
)

IconLayout.displayName = 'IconLayout'

export const Icon = styled(IconLayout)<IconProps>`
  ${sizeSimpleLayoutCSS}
  ${color}
  align-items: center;
  flex-shrink: 0;

  svg {
    height: 100%;
    width: 100%;
  }
`

Icon.defaultProps = { display: 'inline-flex', size: 'medium' }
