import * as React from 'react'

import { styled } from '../../style'

import { Box, BoxProps } from '../Box'
import { Heading, HeadingProps } from '../Heading'
import { MenuItemProps } from './MenuItem'

export type MenuGroupChild = React.ReactElement<MenuItemProps>

export interface MenuGroupProps extends BoxProps<HTMLDivElement> {
  children: MenuGroupChild | MenuGroupChild[]

  label?: string
  labelProps?: HeadingProps
  labelStyles?: React.CSSProperties

  canActivate?: boolean
}

const Internal: React.SFC<MenuGroupProps> = ({
  children,
  label,
  labelProps,
  labelStyles,
  canActivate,
  ...props
}) => {
  const overlay = canActivate ? { canActivate } : {}
  const childrenWithProps = React.Children.toArray(children).map(child =>
    React.cloneElement(child as MenuGroupChild, overlay)
  )

  const labelComponent = label && (
    <Heading
      bg="white" // Needed for sticky position effect
      fontSize="xsmall"
      is="h2"
      pb="none"
      pt="xsmall"
      px="medium"
      m="none"
      mb="xxsmall"
      transform="upper"
      position="sticky"
      top="0"
      weight="semiBold"
      {...labelProps}
      style={labelStyles}
    >
      {label}
    </Heading>
  )

  return (
    <Box {...props}>
      {labelComponent}
      {childrenWithProps}
    </Box>
  )
}

export const MenuGroup = styled(Internal)``
