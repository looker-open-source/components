import * as React from 'react'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

interface LinkProps extends BoxProps<HTMLAnchorElement> {}

const LinkFactory: React.SFC<LinkProps> = props => (
  <Box is="a" color="semanticColors.primary.linkColor" {...props} />
)

export const Link = styled(LinkFactory)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
