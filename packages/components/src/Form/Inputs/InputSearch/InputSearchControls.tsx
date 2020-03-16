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
import { palette } from '@looker/design-tokens'
import omit from 'lodash/omit'
import React, { forwardRef, MouseEvent, Ref } from 'react'
import styled from 'styled-components'
import { Box } from '../../../Layout/Box'
import { IconButton } from '../../../Button'
import { Text } from '../../../Text'

export interface InputSearchControlsProps {
  summary?: string
  showClear: boolean
  onClear: (e: MouseEvent<HTMLButtonElement>) => void
  height?: string
  disabled?: boolean
}

export const InputSearchControlsInternal = forwardRef(
  (
    {
      onClear,
      showClear,
      summary,
      disabled,
      ...props
    }: InputSearchControlsProps,
    ref: Ref<HTMLDivElement>
  ) => {
    if (!summary && !showClear) return null

    const clear = (
      <IconButton
        size="xxsmall"
        icon="Close"
        label="Clear Field"
        onClick={onClear}
        tabIndex={-1}
        disabled={disabled}
      />
    )

    const separator = (
      <Box
        borderRight={`1px solid ${palette.charcoal200}`}
        height="1.5rem"
        style={{
          pointerEvents: 'none',
        }}
      />
    )

    return (
      <div {...omit(props, 'height')} ref={ref}>
        {summary && (
          <Text
            pr="xsmall"
            variant="subdued"
            fontSize="small"
            style={{ whiteSpace: 'nowrap' }}
          >
            {summary}
          </Text>
        )}
        {summary && showClear && separator}
        {showClear && clear}
      </div>
    )
  }
)

InputSearchControlsInternal.displayName = 'InputSearchControlsInternal'

export const InputSearchControls = styled(InputSearchControlsInternal)`
  height: ${props => props.height};
  display: flex;
  align-items: center;
  margin-left: auto;
`
