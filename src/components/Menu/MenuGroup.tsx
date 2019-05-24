import * as React from 'react'
import { palette, styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'
import { Heading, HeadingProps } from '../Heading'
import { List } from '../List'
import { MenuContext, MenuContextProps } from './MenuContext'
import { MenuItemCustomizationProps } from './MenuItem'

export interface MenuGroupProps
  extends BoxPropsWithout<HTMLDivElement, 'label'>,
    MenuContextProps {
  label?: React.ReactNode
  labelProps?: HeadingProps
  labelStyles?: React.CSSProperties
  canActivate?: boolean
  customizationProps?: MenuItemCustomizationProps
}

const InternalMenuGroup: React.FC<MenuGroupProps> = ({
  children,
  label,
  labelProps,
  labelStyles,
  ...props
}) => {
  const groupCanActivate = props.canActivate
  const suppliedCustomizations = props.customizationProps
  delete props.canActivate // Prevent canActivate from being applied to Heading component
  delete props.customizationProps // Prevent customizationProps from being applied to Heading component

  const labelComponent = label && (
    <Heading
      bg={palette.white}
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
      zIndex={2}
    >
      {label}
    </Heading>
  )

  return (
    <MenuContext.Consumer>
      {({ canActivate, customizationProps }) => (
        <MenuContext.Provider
          value={{
            canActivate:
              groupCanActivate !== undefined ? groupCanActivate : canActivate,
            customizationProps:
              suppliedCustomizations !== undefined
                ? suppliedCustomizations
                : customizationProps,
          }}
        >
          <Box is="li" {...props}>
            {labelComponent}
            <List nomarker>{children}</List>
          </Box>
        </MenuContext.Provider>
      )}
    </MenuContext.Consumer>
  )
}

const MenuGroupFactory = React.forwardRef((props: MenuGroupProps, ref) => (
  <InternalMenuGroup
    innerRef={ref as React.RefObject<HTMLElement>}
    {...props}
  />
))

export const MenuGroup = styled(MenuGroupFactory)``
