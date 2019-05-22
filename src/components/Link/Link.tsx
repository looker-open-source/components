import * as React from 'react'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export interface LinkProps extends BoxProps<HTMLAnchorElement> {}

const InternalLink: React.FC<LinkProps> = ({ ref, ...props }) => {
  return (
    <Box
      is="a"
      color="semanticColors.primary.linkColor"
      innerRef={ref as React.RefObject<HTMLElement>}
      style={{ textDecoration: 'none' }}
      hoverStyle={{ textDecoration: 'underline ' }}
      {...props}
    />
  )
}

const LinkFactory = React.forwardRef((props: LinkProps, ref) => (
  <InternalLink innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const Link = styled<LinkProps>(LinkFactory)``
