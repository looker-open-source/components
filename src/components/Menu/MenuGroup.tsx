import * as React from 'react'
import { palette, styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'
import { Heading, HeadingProps } from '../Heading'

export interface MenuGroupProps
  extends BoxPropsWithout<HTMLDivElement, 'label'> {
  label?: React.ReactNode
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
    React.cloneElement(child as JSX.Element, overlay)
  )

  const labelComponent = label && (
    <Heading
      bg="white"
      fontSize="xsmall"
      is="h2"
      px="medium"
      py="small"
      transform="upper"
      position="sticky"
      top="0"
      fontWeight="semiBold"
      boxShadow={`0 4px 8px -2px ${palette.charcoal200}`}
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
