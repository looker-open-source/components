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

import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Box, Link, Paragraph } from 'looker-lens'

export type StatusLabels = 'experimental' | 'deprecated' | 'stable'

export interface StatusProps {
  status: StatusLabels
}

const statusEmoji = (status: StatusLabels) => {
  switch (status) {
    case 'experimental':
      return '⚠️'
    case 'deprecated':
      return '🚫'
    case 'stable':
      return '✅'
  }
}

const Status: FC<StatusProps> = props => {
  const { status } = props
  return (
    <Link href="/principles/support-levels">
      <StatusFlag fontSize="small" {...props}>
        <Box
          as="span"
          textAlign="center"
          display="inline-block"
          width="1.5rem"
          mr="xsmall"
        >
          {statusEmoji(status)}
        </Box>
        {status}
      </StatusFlag>
    </Link>
  )
}

const statusBackground = (props: StatusProps) => {
  switch (props.status) {
    case 'experimental':
      return css`
        background-color: ${props => props.theme.colors.palette.yellow000};
      `
    case 'deprecated':
      return css`
        background-color: ${props => props.theme.colors.palette.red000};
      `
    case 'stable':
    default:
      return css``
  }
}

const StatusFlag = styled(Paragraph).attrs({ py: 'xsmall' })<StatusProps>`
  ${statusBackground}
  text-transform: capitalize;
  color: ${props => props.theme.colors.palette.charcoal500};

  &:hover {
    color: ${props => props.theme.colors.palette.charcoal600};
    text-decoration: none;

    ${Box} {
      transform: scale(1.2);
    }
  }
`

export default Status
