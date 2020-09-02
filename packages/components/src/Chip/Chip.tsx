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

import { reset } from '@looker/design-tokens'
import React, {
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  Ref,
  SyntheticEvent,
} from 'react'
import styled from 'styled-components'
import {
  useClickable,
  GenericClickProps,
  FocusVisibleProps,
  useWrapEvent,
} from '../utils'
import { IconButton } from '../Button/IconButton'
import { Text, TextProps } from '../Text'
import { TruncateProps, truncate } from '../Text/truncate'

export interface ChipProps
  extends GenericClickProps<HTMLSpanElement>,
    TruncateProps {
  children: ReactNode
  onDelete?: (e?: SyntheticEvent) => void
}

const ChipStyle = styled.span<FocusVisibleProps>`
  ${reset}

  align-items: center;
  background: ${({ theme }) => theme.colors.keySubtle};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.keyInteractive};
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  height: 28px;
  max-width: 320px;
  min-width: 44px;
  padding: ${({ theme: { space } }) => `${space.xxsmall} ${space.xsmall}`};

  &:hover,
  &:active,
  &:focus,
  &[aria-selected='true'] {
    background: ${(props) => props.theme.colors.keyAccent};
  }

  &.focus,
  &:focus {
    outline: none;
  }

  ${({ focusVisible, theme: { colors } }) =>
    focusVisible && `box-shadow: 0 0 0 1px ${colors.key};`}

  &:active {
    border-color: ${({ theme }) => theme.colors.key};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.neutralAccent};
    color: ${({ theme }) => theme.colors.neutral};

    &:hover {
      background: ${({ theme }) => theme.colors.neutralAccent};
    }
  }
`

const ChipLabel = styled(Text)<TextProps & TruncateProps>`
  font-size: inherit;
  ${truncate}
`

const ChipJSX = forwardRef(
  (
    {
      children,
      disabled,
      onBlur,
      onClick,
      onDelete,
      onKeyUp,
      onKeyDown,
      truncate = true,
      ...props
    }: ChipProps,
    ref: Ref<HTMLSpanElement>
  ) => {
    const clickableProps = useClickable({ disabled, onBlur, onClick, onKeyUp })

    const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
      if (event.key === 'Backspace') {
        onDelete && onDelete(event)
      }
    }

    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onDelete && onDelete(e)
      }
      e.stopPropagation()
    }

    return (
      <ChipStyle
        {...clickableProps}
        onKeyDown={useWrapEvent(handleKeyDown, onKeyDown)}
        ref={ref}
        {...props}
      >
        <ChipLabel truncate={truncate}>{children}</ChipLabel>
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
  }
)

ChipJSX.displayName = 'ChipJSX'

export const Chip = styled(ChipJSX)``
