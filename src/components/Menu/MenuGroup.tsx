import * as React from 'react'
import { palette, styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'
import { Heading, HeadingProps } from '../Heading'
import { List } from '../List'
import { MenuContext } from './MenuContext'
import { MenuItemCustomization } from './MenuItem'

export interface MenuGroupProps
  extends BoxPropsWithout<HTMLDivElement, 'label'> {
  label?: React.ReactNode
  labelProps?: HeadingProps
  labelStyles?: React.CSSProperties
  customizationProps?: MenuItemCustomization
}

const InternalMenuGroup: React.FC<MenuGroupProps> = ({
  children,
  label,
  labelProps,
  labelStyles,
  ...props
}) => {
  const { customizationProps, ...boxProps } = props
  const menu = React.useContext(MenuContext)

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
    <MenuContext.Provider
      value={{
        customizationProps: customizationProps || menu.customizationProps,
      }}
    >
      <Box is="li" {...boxProps}>
        {labelComponent}
        <List nomarker>{children}</List>
      </Box>
    </MenuContext.Provider>
  )
}

const MenuGroupFactory = React.forwardRef((props: MenuGroupProps, ref) => (
  <InternalMenuGroup innerRef={ref} {...props} />
))

export const MenuGroup = styled(MenuGroupFactory)``
