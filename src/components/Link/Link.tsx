import * as React from 'react'
import { Box, BoxProps } from '../Box'

export interface LinkProps extends BoxProps<HTMLAnchorElement> {}

export const Link: React.FC<LinkProps> = ({ ref, ...props }) => {
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
