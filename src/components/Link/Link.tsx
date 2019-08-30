import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'

import { Box, BoxProps } from '../Box'

export interface LinkProps extends BoxProps<HTMLAnchorElement> {}

type ComponentType = FunctionComponent<LinkProps>
type StyledComponentType = StyledComponent<ComponentType, LinkProps>

const InternalLink: ComponentType = ({ ...props }) => {
  return (
    <Box
      is="a"
      color="semanticColors.primary.linkColor"
      style={{ textDecoration: 'none' }}
      hoverStyle={{ textDecoration: 'underline ' }}
      {...props}
    />
  )
}

const LinkFactory = React.forwardRef<StyledComponentType, LinkProps>(
  (props: LinkProps, ref: Ref<StyledComponentType>) => (
    <InternalLink innerRef={ref} {...props} />
  )
)

/** @component */
export const Link = styled<ComponentType>(LinkFactory)``
