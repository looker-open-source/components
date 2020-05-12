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
  LayoutProps,
  layout,
  reset,
  SpaceProps,
  space,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
/* eslint import/namespace: ['error', { allowComputed: true }] */
import { Glyphs, IconNames } from '@looker/icons'
import omit from 'lodash/omit'

export interface IconProps
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'onClick'>,
    LayoutProps,
    SpaceProps {
  color?: string
  name: IconNames
}

export type { IconNames }

const IconFactory = forwardRef((props: IconProps, ref: Ref<HTMLDivElement>) => {
  const Glyph = Glyphs[props.name]

  return (
    <Styled ref={ref} {...omit(props, 'name')}>
      <Glyph width="100%" height="100%" fill="currentColor" />
    </Styled>
  )
})

IconFactory.displayName = 'IconFactory'

const Styled = styled.div<Omit<IconProps, 'name'>>`
  ${reset}
  ${color}
  ${space}
  ${layout}

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-items: center;
  display: inline-flex;
`

Styled.defaultProps = { size: '1rem' }

export const Icon = styled(IconFactory)``
