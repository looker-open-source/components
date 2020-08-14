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
import React, { FC } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

export interface DividerVerticalProps
  extends CompatibleHTMLProps<HTMLHRElement> {
  orientation?: 'vertical' | 'horizontal'
}

export interface DividerProps
  extends CompatibleHTMLProps<HTMLHRElement>,
    DividerVerticalProps,
    PositionProps,
    SpaceProps {
  appearance?: 'default' | 'light' | 'dark' | 'onDark'
  customColor?: string
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

export const Divider: FC<DividerProps> = ({ orientation }) => {
  return orientation === 'vertical' ? (
    <VerticalDivider />
  ) : (
    <HorizontalDivider />
  )
}

const HorizontalDivider = styled.hr.attrs((props: DividerProps) => ({
  bg: props.customColor,
}))<DividerProps>`
  ${reset}
  ${position}
  ${space}

  border: none;
  height: ${(props) => props.size};
  width: 100%;
  ${(props) => (props.customColor ? color : appearanceVariant)}
`

const VerticalDivider = styled.div<DividerProps>`
  border-left: 1px solid
    ${(props) => (props.customColor ? color : appearanceVariant)};
  height: 100%;
  width: ${(props) => props.size};
`

Divider.defaultProps = {
  appearance: 'default',
  orientation: 'horizontal',
  size: '1px',
}
