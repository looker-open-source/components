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
  reset,
  layout,
  LayoutProps,
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
import { Text, TextProps } from '../Text'
import { TruncateProps, truncate } from '../Text/truncate'

export interface ChipProps
  extends CompatibleHTMLProps<HTMLSpanElement>,
    LayoutProps,
    SpaceProps,
    TruncateProps,
    TypographyProps {
  children: ReactNode
  disabled?: boolean
  focusVisible?: boolean
  onDelete?: () => void
}

const ChipStyle = styled.span<ChipProps>`
  ${reset}

  ${color}
  ${layout}
  ${space}
  ${typography}
  ${IconButton}{
    background-color: transparent;
    flex-shrink: 0;
  }

  align-items: center;
  background-color: ${({ theme }) => theme.colors.keySubtle};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.keyInteractive};
  display: flex;
  justify-items: center;
  & + & {
    margin-left: ${({ theme }) => theme.space.xxsmall};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.keyAccent};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.keyFocus};
    outline: none;
  }

  ${({ focusVisible, theme }) =>
    focusVisible &&
    `box-shadow: 0 0 0 0.15rem ${rgba(theme.colors.keyFocus, 0.25)};`};

  ${({ disabled, theme }) =>
    disabled &&
    `color: ${theme.colors.neutral};
      background-color: ${theme.colors.neutralAccent};

      &:hover {
        background-color: ${theme.colors.neutralAccent};
      }
    `}
`

const ChipLabel = styled(Text)<TextProps & TruncateProps>`
  ${truncate}
`

const ChipJSX = forwardRef((props: ChipProps, ref: Ref<HTMLSpanElement>) => {
  const {
    children,
    disabled,
    fontSize,
    onBlur,
    onDelete,
    onKeyUp,
    onKeyDown,
    truncate,
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
      <ChipLabel fontSize={fontSize} truncate={truncate}>
        {children}
      </ChipLabel>
      {onDelete && !disabled && (
        <IconButton
          disabled={disabled}
          icon="Close"
          label="Delete"
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
  fontSize: 'xsmall',
  fontWeight: 'semiBold',
  height: 28,
  maxWidth: 320,
  mb: 'xxsmall',
  minWidth: 44,
  px: 'xsmall',
  py: 'xxsmall',
  truncate: true,
}
