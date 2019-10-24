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
