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

import { ReactNode } from 'react'
import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import {
  reset,
  SpaceProps,
  LayoutProps,
  BorderProps,
  space,
  TypographyProps,
  typography,
  layout,
  border,
} from '@looker/design-tokens'

export interface TabProps
  extends BorderProps,
    LayoutProps,
    SpaceProps,
    TypographyProps {
  children: ReactNode
  selected?: boolean
  disabled?: boolean
  onSelect?: () => void
}

const tabFocusRing = (color: string) => css`
  box-shadow: 0 0 0 0.15rem ${rgba(color, 0.25)};
  outline: none;
`

export const Tab = styled.button.attrs((props: TabProps) => ({
  minWidth: '3rem',
  onClick: () => {
    if (!props.disabled && props.onSelect) {
      props.onSelect()
    }
  },
}))<TabProps>`
  ${reset}
  ${space}
  ${layout}
  ${border}
  ${typography}

  background: transparent;
  border-bottom: 3px solid;
  border-bottom-color: ${props =>
    props.selected ? props.theme.colors.palette.purple400 : 'transparent'};
  border-radius: 0;
  color: ${props =>
    props.selected
      ? props.theme.colors.palette.charcoal800
      : props.theme.colors.palette.charcoal500};
  cursor: pointer;

  & + & {
    margin-left: ${props => props.theme.space.xlarge};
  }

  &:hover {
    border-bottom-color: ${props =>
      props.selected
        ? props.theme.colors.palette.purple400
        : props.theme.colors.palette.charcoal300};
  }

  &:active {
    border-bottom-color: ${props =>
      props.selected
        ? props.theme.colors.palette.purple400
        : props.theme.colors.palette.charcoal400};
  }

  &:focus {
    ${props => tabFocusRing(props.theme.colors.palette.purple300)}
  }

  &:disabled {
    color: ${props => props.theme.colors.palette.charcoal300};

    &:active,
    &:hover {
      border-bottom-color: transparent;
    }
  }
`

Tab.defaultProps = { fontWeight: 'semiBold', pb: 'small', pt: 'xsmall' }
