import * as React from 'react'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export interface LinkProps extends BoxProps<HTMLAnchorElement> {}

const InternalLink: React.FC<LinkProps> = ({ ref, ...props }) => {
  return (
    <Box
      is="a"
      color="semanticColors.primary.linkColor"
      innerRef={ref}
      style={{ textDecoration: 'none' }}
      hoverStyle={{ textDecoration: 'underline ' }}
      {...props}
    />
  )
}

const LinkFactory = React.forwardRef((props: LinkProps, ref) => (
  <InternalLink innerRef={ref} {...props} />
))

export const Link = styled<LinkProps>(LinkFactory)``
