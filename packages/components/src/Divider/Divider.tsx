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
  border,
  BorderProps,
  CompatibleHTMLProps,
  color,
  position,
  PositionProps,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { variant } from 'styled-system'

export interface DividerProps
  extends CompatibleHTMLProps<HTMLHRElement>,
    PositionProps,
    BorderProps,
    SpaceProps {
  size?: string | number
  customColor?: string
  appearance?: 'default' | 'light' | 'dark' | 'onDark'
}

const appearanceVariant = variant({
  prop: 'appearance',
  variants: {
    dark: {
      bg: 'palette.charcoal400',
    },
    default: {
      bg: 'palette.charcoal300',
    },
    light: {
      bg: 'palette.charcoal200',
    },
    onDark: {
      bg: 'palette.charcoal500',
    },
  },
})

export const Divider = styled.hr.attrs((props: DividerProps) => ({
  bg: props.customColor,
}))<DividerProps>`
  ${reset}
  border: none;

  ${position}
  ${border}
  ${space}

  height: ${props => props.size};
  ${props => (props.customColor ? color : appearanceVariant)}
`

Divider.defaultProps = { appearance: 'default', size: '1px' }
