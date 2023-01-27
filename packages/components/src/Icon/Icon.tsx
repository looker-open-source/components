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

import type {
  CompatibleHTMLProps,
  SizeXXSmall,
  SizeXSmall,
  SizeSmall,
  SizeMedium,
  SizeLarge,
} from '@looker/design-tokens'
import { color, omitStyledProps } from '@looker/design-tokens'
import type { StyledIconProps } from '@styled-icons/styled-icon'
import type { ReactElement, Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { SimpleLayoutProps } from '../Layout/utils/simple'
import { simpleLayoutCSS } from '../Layout/utils/simple'

export type IconSize =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export type IconType = ReactElement<StyledIconProps>

export interface IconProps
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'onClick'>,
    SimpleLayoutProps {
  color?: string
  /**
   * Specify the JSX.Element (often SVG) to place.
   */
  icon: IconType
  /**
   * Explicitly specify a title for the SVG rendered by the icon.
   * NOTE: If title is not specified `aria-hidden="true"` will be applied to hide the SVG from
   * screen-readers
   * I18n recommended: content that is user visible should be treated for i18n
   */
  title?: string
}

const IconLayout = forwardRef(
  ({ title, icon, ...props }: IconProps, ref: Ref<HTMLDivElement>) => (
    <div
      aria-hidden={title === undefined && true}
      title={title}
      ref={ref}
      aria-label={title}
      role="img"
      {...omitStyledProps(props)}
    >
      {icon}
    </div>
  )
)

export const Icon = styled(IconLayout).attrs<IconProps>(
  ({ size = 'medium' }) => ({
    size,
  })
)<IconProps>`
  ${simpleLayoutCSS}
  ${color}
    flex-shrink: 0;
  justify-content: center;

  svg {
    height: 100%;
    /**
    * @TODO vertical-align is a compatibility fix and should probably be removed once
    * icon refactor is complete and accepted
    **/
    vertical-align: initial;
    width: 100%;
  }
`
