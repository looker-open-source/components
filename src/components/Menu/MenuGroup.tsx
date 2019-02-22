import * as React from 'react'
import { palette, styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'
import { Heading, HeadingProps } from '../Heading'
import { MenuContext, MenuContextProps } from './MenuContext'

export interface MenuGroupProps
  extends BoxPropsWithout<HTMLDivElement, 'label'>,
    MenuContextProps {
  label?: React.ReactNode
  labelProps?: HeadingProps
  labelStyles?: React.CSSProperties
}

const Internal: React.SFC<MenuGroupProps> = ({
  children,
  label,
  labelProps,
  labelStyles,
  ...props
}) => {
  const groupCanActivate = props.canActivate
  delete props.canActivate // Prevent canActivate from being applied to Heading component

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
    <MenuContext.Consumer>
      {({ canActivate }) => (
        <MenuContext.Provider
          value={{
            canActivate:
              groupCanActivate !== undefined ? groupCanActivate : canActivate,
          }}
        >
          <Box {...props}>
            {labelComponent}
            {children}
          </Box>
        </MenuContext.Provider>
      )}
    </MenuContext.Consumer>
  )
}

export const MenuGroup = styled(Internal)``
