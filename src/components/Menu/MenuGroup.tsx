import * as React from 'react'
import { palette, styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'
import { Heading, HeadingProps } from '../Heading'
import { List } from '../List'
import { MenuContext } from './MenuContext'
import { useElementVisibility } from './MenuGroup.hooks'
import { MenuItemCustomization } from './MenuItem'

export interface MenuGroupProps
  extends BoxPropsWithout<HTMLDivElement, 'label'> {
  label?: React.ReactNode
  labelProps?: HeadingProps
  labelStyles?: React.CSSProperties
  customizationProps?: MenuItemCustomization
  compact?: boolean
}

const InternalMenuGroup: React.FC<MenuGroupProps> = ({
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

  const labelShimRef: React.RefObject<any> = React.useRef()

  const labelComponent = label && (
    <div
      style={{
        background: customizations ? customizations.bg : palette.white,
        boxShadow: useElementVisibility(labelShimRef)
          ? 'none'
          : `0 4px 8px -2px ${palette.charcoal200}`,
        position: 'sticky',
        top: '-1px',
        zIndex: 2,
      }}
    >
      {/*
        NOTE: This div is required for box-shadow to appear when the heading
        is sticky to the top of the container. Using IntersectionObserver,
        we detect when this 0-height element disappears from the page and then
        render the shadow.
      */}
      <div ref={labelShimRef} style={{ height: '0' }} />
      <Heading
        fontSize="xsmall"
        is="h2"
        px="medium"
        py={compact || menu.compact ? 'small' : 'xxsmall'}
        textTransform="upper"
        fontWeight="semiBold"
        {...labelProps}
        style={labelStyles}
        zIndex={2}
      >
        {label}
      </Heading>
    </div>
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
