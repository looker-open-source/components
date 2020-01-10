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

import {
  color,
  reset,
  space,
  SpaceProps,
  typography,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import React, { ReactNode, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { IconButton } from '../Button'

export interface ChipProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLSpanElement> {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}

const ChipLabel = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const ChipStyle = styled.span.attrs({ fontWeight: 'semiBold' })`
  ${reset}

  ${color}
  ${space}
  ${typography}
  ${IconButton}{
    background-color: transparent;
    flex-shrink: 0;
    &:disabled {
      color: ${props => props.theme.colors.palette.charcoal400};
      background-color: ${props => props.theme.colors.palette.charcoal100};
    }
  }

  align-items: center;
  background-color: ${props => props.theme.colors.palette.purple000};
  border-radius: 4px;
  color: ${props => props.theme.colors.palette.purple500};
  display: flex;
  font-size: ${props => props.theme.fontSizes.xsmall};
  justify-items: center;
  margin-bottom: ${props => props.theme.space.xxsmall};
  max-width: 320px;
  min-width: 44px;
  & + & {
    margin-left: ${props => props.theme.space.xxsmall};
  }

  &:focus {
    background-color: ${props => props.theme.colors.palette.purple200};
  }

  &:hover {
    background-color: ${props => props.theme.colors.palette.purple100};
  }

  &:disabled {
    color: ${props => props.theme.colors.palette.charcoal400};
    background-color: ${props => props.theme.colors.palette.charcoal100};
  }
`

const ChipJSX = forwardRef((props: ChipProps, ref: Ref<HTMLSpanElement>) => {
  const { children, disabled = false, ...restProps } = props

  return (
    <ChipStyle disabled={disabled} {...restProps} ref={ref}>
      <ChipLabel>{children}</ChipLabel>
      <IconButton
        ml="xsmall"
        icon="Close"
        size="xxsmall"
        color="primary"
        label="Close"
      />
    </ChipStyle>
  )
})

ChipJSX.displayName = 'ChipJSX'

export const Chip = styled(ChipJSX)``

Chip.defaultProps = {
  px: 'xsmall',
  py: 'xxsmall',
}
