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

import { reset, CompatibleHTMLProps } from '@looker/design-tokens'
import React, {
  forwardRef,
  KeyboardEvent,
  ReactNode,
  Ref,
  SyntheticEvent,
  useState,
} from 'react'
import styled from 'styled-components'
import { IconButton } from '../Button/IconButton'
import { Text, TextProps } from '../Text'
import { TruncateProps, truncate } from '../Text/truncate'

export interface ChipProps
  extends CompatibleHTMLProps<HTMLSpanElement>,
    TruncateProps {
  children: ReactNode
  disabled?: boolean
  focusVisible?: boolean
  onDelete?: (e?: SyntheticEvent) => void
}

const ChipStyle = styled.span<ChipProps>`
  ${reset}

  align-items: center;
  background: ${({ theme }) => theme.colors.keySubtle};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.keyInteractive};
  display: flex;
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

const ChipJSX = forwardRef((props: ChipProps, ref: Ref<HTMLSpanElement>) => {
  const {
    children,
    disabled,
    onBlur,
    onDelete,
    onKeyUp,
    onKeyDown,
    truncate = true,
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

  const handleOnKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    setFocusVisible(false)
    if (event.key === 'Backspace') {
      onDelete && onDelete(event)
    }
    onKeyDown && onKeyDown(event)
    setFocusVisible(false)
  }

  const handleDelete = (e: SyntheticEvent) => {
    if (!disabled) {
      onDelete && onDelete(e)
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
      <ChipLabel truncate={truncate}>{children}</ChipLabel>
      {onDelete && !disabled && (
        <IconButton
          disabled={disabled}
          icon="Close"
          label="Delete"
          ml="xsmall"
          onClick={handleDelete}
          size="xxsmall"
          tabIndex={restProps.tabIndex}
        />
      )}
    </ChipStyle>
  )
})

ChipJSX.displayName = 'ChipJSX'

export const Chip = styled(ChipJSX)``
