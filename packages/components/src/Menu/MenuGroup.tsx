import React from 'react'
import styled from 'styled-components'
import {
  palette,
  CompatibleHTMLProps,
  reset,
  SpaceProps,
  space,
} from '@looker/design-tokens'
import { background, BackgroundProps } from 'styled-system'
import { Heading, HeadingProps } from '../Heading'
import { List } from '../List'
import { MenuContext } from './MenuContext'
import { MenuGroupLabel } from './MenuGroupLabel'
import { useElementVisibility } from './MenuGroup.hooks'
import { MenuItemCustomization } from './MenuItem'

export interface MenuGroupProps
  extends Omit<CompatibleHTMLProps<HTMLElement>, 'label'>,
    BackgroundProps,
    SpaceProps {
  label?: React.ReactNode
  labelProps?: HeadingProps
  labelStyles?: React.CSSProperties
  customizationProps?: MenuItemCustomization
  compact?: boolean
}

const MenuGroupInternal: React.FC<MenuGroupProps> = ({
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
    <MenuGroupLabel
      background={customizations && customizations.bg}
      boxShadow={
        useElementVisibility(labelShimRef)
          ? 'none'
          : `0 4px 8px -2px ${palette.charcoal200}`
      }
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
        style={{ zIndex: 2, ...labelStyles }}
      >
        {label}
      </Heading>
    </MenuGroupLabel>
  )

  return (
    <MenuContext.Provider
      value={{
        compact: compact || menu.compact,
        customizationProps: customizationProps || menu.customizationProps,
      }}
    >
      <Style
        {...boxProps}
        background={customizations && customizations.bg}
        py="small"
      >
        {labelComponent}
        <List nomarker>{children}</List>
      </Style>
    </MenuContext.Provider>
  )
}

const Style = styled.li<MenuGroupProps>`
  ${reset}
  ${space}
  ${background}
`

Style.defaultProps = { background: 'palette.white ' }

export const MenuGroup = styled(MenuGroupInternal)``
