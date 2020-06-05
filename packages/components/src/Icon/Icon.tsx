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
} from '@looker/design-tokens'
import React, { forwardRef, Fragment, Ref, ReactNode } from 'react'
import styled from 'styled-components'
/* eslint import/namespace: ['error', { allowComputed: true }] */
import { Glyphs, IconNames } from '@looker/icons'
import omit from 'lodash/omit'
import { variant } from 'styled-system'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'

export type IconSize =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface IconProps
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'onClick'>,
    Omit<SimpleLayoutProps, 'size' | 'height' | 'width'> {
  artwork?: ReactNode
  color?: string
  name?: IconNames
  size?: IconSize | number | string
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const size = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      height: '12px',
      width: '12px',
    },
    xsmall: {
      height: '16px',
      width: '16px',
    },
    small: {
      height: '18px',
      width: '18px',
    },
    medium: {
      height: '24px',
      width: '24px',
    },
    large: {
      height: '32px',
      width: '32px',
    },
  },
})
/* eslint-enable sort-keys-fix/sort-keys-fix */

export type { IconNames }

const IconFactory = forwardRef(
  (
    { artwork = undefined, name, ...props }: IconProps,
    ref: Ref<HTMLDivElement>
  ) => {
    if ((artwork && name) || (!artwork && !name)) {
      // eslint-disable-next-line no-console
      console.warn(
        'Please pass ether name or artwork as Icon prop. If both are passed the default will be artwork.'
      )
    }
    const Glyph = name ? Glyphs[name] : Fragment
    const value = artwork || (
      <Glyph width="100%" height="100%" fill="currentColor" />
    )
    return (
      <div ref={ref} {...omit(props, 'color', 'name', 'size')}>
        {value}
      </div>
    )
  }
)

IconFactory.displayName = 'IconFactory'

export const Icon = styled(IconFactory)`
  ${simpleLayoutCSS}
  ${color}
  ${size}

  align-items: center;
  display: inline-flex;
`

Icon.defaultProps = { size: 'medium' }
