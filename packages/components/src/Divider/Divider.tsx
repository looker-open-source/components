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
  CompatibleHTMLProps,
  color,
  position,
  PositionProps,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { variant } from 'styled-system'

export interface DividerProps
  extends CompatibleHTMLProps<HTMLHRElement>,
    PositionProps,
    SpaceProps {
  appearance?: 'default' | 'light' | 'dark' | 'onDark'
  customColor?: string
  orientation?: 'vertical'
  size?: string | number
}

const appearanceVariant = variant({
  prop: 'appearance',
  variants: {
    dark: {
      bg: 'ui4',
    },
    default: {
      bg: 'ui3',
    },
    light: {
      bg: 'ui2',
    },
    onDark: {
      bg: 'text2',
    },
  },
})

export const DividerBase = styled.hr.attrs((props: DividerProps) => ({
  appearance: props.appearance || 'default',
  bg: props.customColor,
  size: props.size || '1px',
}))<DividerProps>`
  ${reset}
  ${position}
  ${space}

  border: none;

  ${({ customColor }) => (customColor ? color : appearanceVariant)}
`

export const Divider = styled(DividerBase)`
  height: ${({ size }) => size};
  width: 100%;
`

export const DividerVertical = styled(DividerBase)`
  display: inline-block;
  height: ${({ height }) => height};
  margin-left: ${({ theme }) => theme.space.xsmall};
  margin-right: ${({ theme }) => theme.space.xsmall};
  width: ${({ size }) => size};
`
