import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../Box'

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface LinkProps extends Omit<BoxProps<HTMLAnchorElement>, 'as'> {}

type ComponentType = FunctionComponent<LinkProps>
type StyledComponentType = StyledComponent<ComponentType, LinkProps>

const InternalLink: ComponentType = ({ ...props }) => {
  return (
    <Box
      as="a"
      color="semanticColors.primary.linkColor"
      style={{ textDecoration: 'none' }}
      hoverStyle={{ textDecoration: 'underline ' }}
      {...props}
    />
  )
}

const LinkFactory = React.forwardRef<StyledComponentType, LinkProps>(
  (props: LinkProps, ref: Ref<StyledComponentType>) => (
    <InternalLink ref={ref} {...props} />
  )
)

/** @component */
export const Link = styled<ComponentType>(LinkFactory)``
