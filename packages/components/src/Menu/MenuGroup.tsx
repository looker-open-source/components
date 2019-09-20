import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { palette } from '@looker/design-tokens'
import { Box, BoxProps } from '../Box'
import { Heading, HeadingProps } from '../Heading'
import { List } from '../List'
import { MenuContext } from './MenuContext'
import { useElementVisibility } from './MenuGroup.hooks'
import { MenuItemCustomization } from './MenuItem'

export interface MenuGroupProps
  extends Omit<BoxProps<HTMLDivElement>, 'label' | 'as'> {
  label?: React.ReactNode
  labelProps?: HeadingProps
  labelStyles?: React.CSSProperties
  customizationProps?: MenuItemCustomization
  compact?: boolean
}

type ComponentType = FunctionComponent<MenuGroupProps>
type StyledComponentType = StyledComponent<ComponentType, MenuGroupProps>

const InternalMenuGroup: ComponentType = ({
  children,
  label,
  labelProps,
  labelStyles,
  ...props
}) => {
  const { customizationProps, compact, ...boxProps } = props
  const menu = React.useContext(MenuContext)

  const customizations = customizationProps || menu.customizationProps

  const labelShimRef: React.RefObject<any> = React.useRef()

  const labelComponent = label && (
    <MenuLabel
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
        fontSize="small"
        as="h2"
        px="medium"
        py="xsmall"
        fontWeight="semiBold"
        {...labelProps}
        style={labelStyles}
        zIndex={2}
      >
        {label}
      </Heading>
    </MenuLabel>
  )

  return (
    <MenuContext.Provider
      value={{
        compact: compact || menu.compact,
        customizationProps: customizationProps || menu.customizationProps,
      }}
    >
      <Box
        as="li"
        {...boxProps}
        bg={customizations ? customizations.bg : palette.white}
        py="small"
      >
        {labelComponent}
        <List nomarker>{children}</List>
      </Box>
    </MenuContext.Provider>
  )
}

const MenuLabel = styled.div``

const MenuGroupFactory = React.forwardRef<StyledComponentType, MenuGroupProps>(
  (props: MenuGroupProps, ref: Ref<StyledComponentType>) => (
    <InternalMenuGroup ref={ref} {...props} />
  )
)
MenuGroupFactory.displayName = 'MenuGroupFactory'

/** @component */
export const MenuGroup = styled<ComponentType>(MenuGroupFactory)``
