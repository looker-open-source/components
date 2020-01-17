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
  TypographyProps,
} from '@looker/design-tokens'
import React, { ReactNode, forwardRef, Ref, useState } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { IconButton } from '../Button'

export interface ChipProps
  extends CompatibleHTMLProps<HTMLSpanElement>,
    SpaceProps,
    TypographyProps {
  children: ReactNode
  disabled?: boolean
  focusVisible?: boolean
  onDelete?: () => void
}

const ChipStyle = styled.span<ChipProps>`
  ${reset}

  ${color}
  ${space}
  ${typography}
  ${IconButton}{
    background-color: transparent;
    flex-shrink: 0;
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

  &:hover {
    background-color: ${props => props.theme.colors.palette.purple100};
  }

  &:focus {
    background-color: ${props => props.theme.colors.palette.purple200};
    outline: none;
  }

  ${props =>
    props.focusVisible &&
    `box-shadow: 0 0 0 0.15rem ${rgba(
      props.theme.colors.palette.purple300,
      0.25
    )};`};

  ${props =>
    props.disabled &&
    `color: ${props.theme.colors.palette.charcoal400};
      background-color: ${props.theme.colors.palette.charcoal100};

      &:hover {
        background-color: ${props.theme.colors.palette.charcoal100};
      }
    `}
`

const ChipLabel = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const ChipJSX = forwardRef((props: ChipProps, ref: Ref<HTMLSpanElement>) => {
  const {
    children,
    disabled,
    onBlur,
    onDelete,
    onKeyUp,
    onKeyDown,
    ...restProps
  } = props

  const [isFocusVisible, setFocusVisible] = useState(false)

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    setFocusVisible(true)
    onKeyUp && onKeyUp(event)
  }

  const handleOnBlur = (event: React.FocusEvent<HTMLSpanElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    setFocusVisible(false)
    if (event.key === 'Backspace') {
      onDelete && onDelete()
    }
    onKeyDown && onKeyDown(event)
    setFocusVisible(false)
  }

  const handleDelete = () => {
    if (!disabled) {
      onDelete && onDelete()
    }
    setFocusVisible(false)
  }

  return (
    <ChipStyle
      disabled={disabled}
      focusVisible={isFocusVisible}
      onBlur={handleOnBlur}
      onKeyDown={handleOnKeyDown}
      onKeyUp={handleOnKeyUp}
      ref={ref}
      tabIndex={disabled ? undefined : 0}
      {...restProps}
    >
      <ChipLabel>{children}</ChipLabel>
      {onDelete && !disabled && (
        <IconButton
          color="primary"
          disabled={disabled}
          icon="Close"
          label="Close"
          ml="xsmall"
          onClick={handleDelete}
          size="xxsmall"
        />
      )}
    </ChipStyle>
  )
})

ChipJSX.displayName = 'ChipJSX'

export const Chip = styled(ChipJSX)``

Chip.defaultProps = {
  fontWeight: 'semiBold',
  px: 'xsmall',
  py: 'xxsmall',
}
