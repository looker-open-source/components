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
  compact?: boolean
  groupLabelShadow?: boolean
}

const InternalMenuGroup: React.FC<MenuGroupProps> = ({
  groupLabelShadow,
  children,
  label,
  labelProps,
  labelStyles,
  ...props
}) => {
  const { customizationProps, compact, ...boxProps } = props
  const menu = React.useContext(MenuContext)

  const customizations = customizationProps
    ? customizationProps
    : menu.customizationProps

  const shadow =
    groupLabelShadow !== undefined ? groupLabelShadow : menu.groupLabelShadow

  const labelComponent = label && (
    <Heading
      bg={customizations ? customizations.bg : palette.white}
      fontSize="xsmall"
      is="h2"
      px="medium"
      py={compact || menu.compact ? 'small' : 'xxsmall'}
      transform="upper"
      position={shadow ? 'sticky' : 'initial'}
      top="0"
      fontWeight="semiBold"
      boxShadow={shadow ? `0 4px 8px -2px ${palette.charcoal200}` : 'none'}
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
        compact: compact || menu.compact,
        customizationProps: customizationProps || menu.customizationProps,
      }}
    >
      <Box
        is="li"
        {...boxProps}
        bg={customizations ? customizations.bg : palette.white}
        py="xxsmall"
      >
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
