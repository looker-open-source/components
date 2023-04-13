/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { FlexProps } from '@looker/components'
import { Box, Flex, Tooltip } from '@looker/components'
import React from 'react'
import styled, { css } from 'styled-components'
import { SectionLabelDetail } from './Section'

interface FieldProps extends Omit<FlexProps, 'onClick' | 'disabled'> {
  label: string
  displayLabel: React.ReactNode
  detail?: string
  payload?: any
  isSecondary?: boolean
  disabled?: string
  onClick: (label: string, payload?: any) => void
}

const InternalField = ({
  payload,
  label,
  onClick,
  isSecondary,
  detail,
  disabled,
  displayLabel,
  ...props
}: FieldProps) => {
  const handleClick = () => !disabled && onClick(label, payload)
  return (
    <Flex onClick={handleClick} ml="small" role="button" {...props}>
      {disabled ? (
        <Tooltip content={disabled} placement="right">
          <Box display="block" fontSize="small">
            {displayLabel}
          </Box>
        </Tooltip>
      ) : (
        <Flex fontSize="small" alignItems="center" width="100%">
          {displayLabel}
          {detail && (
            <SectionLabelDetail ml="auto" fontSize="xsmall">
              {detail}
            </SectionLabelDetail>
          )}
        </Flex>
      )}
    </Flex>
  )
}

export const Field = styled(InternalField)`
  border-left: 1px solid
    ${({ isSecondary, theme: { colors } }) =>
      isSecondary ? colors.warn : colors.inform};
  color: ${({ disabled, theme: { colors } }) =>
    disabled ? colors.text1 : colors.text3};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: 30px;
  white-space: pre-wrap;

  &:hover {
    background: ${({ isSecondary, theme: { colors } }) =>
      isSecondary ? colors.warnAccent : colors.informAccent};
    text-shadow: 0.45px 0 0 currentColor;
  }

  /* highlighting for search results */
  ${({ disabled }) =>
    !disabled &&
    css`
      b {
        color: ${({ theme }) => theme.colors.text5};
        text-decoration: underline;
        font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      }
    `}
`
