import React, { FC, RefObject } from 'react'
import styled from 'styled-components'
import {
  color,
  palette,
  CompatibleHTMLProps,
  reset,
  SpaceProps,
  space,
} from 'looker-design-tokens'
import { BackgroundColorProps } from 'styled-system'
import { Heading, HeadingProps } from '../Text/Heading'
import { List } from '../List'

import { MenuGroupLabel } from './MenuGroupLabel'
import { useElementVisibility } from './MenuGroup.hooks'
import { MenuItemCustomization } from './MenuItem'
import { cloneMenuListChildren } from './MenuList'

export interface MenuGroupProps
  extends Omit<CompatibleHTMLProps<HTMLElement>, 'label'>,
    BackgroundColorProps,
    SpaceProps {
  label?: React.ReactNode
  labelProps?: HeadingProps
  labelStyles?: React.CSSProperties
  customizationProps?: MenuItemCustomization
  compact?: boolean
}

export interface MenuGroupWithChildrenProps extends MenuGroupProps {
  children: JSX.Element | JSX.Element[]
}

const MenuGroupInternal: FC<MenuGroupWithChildrenProps> = ({
  children,
  label,
  labelProps,
  labelStyles,
  ...props
}) => {
  const { customizationProps, compact, ...boxProps } = props

  const labelShimRef: RefObject<any> = React.useRef()
  const labelVisible = useElementVisibility(labelShimRef)

  const labelComponent = label && (
    <MenuGroupLabel
      backgroundColor={customizationProps && customizationProps.bg}
      boxShadow={
        labelVisible ? 'none' : `0 4px 8px -2px ${palette.charcoal200}`
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

  const clonedChildren = cloneMenuListChildren(children, {
    compact,
    customizationProps,
  })

  return (
    <Style
      {...boxProps}
      backgroundColor={customizationProps && customizationProps.bg}
      py="small"
    >
      {labelComponent}
      <List nomarker>{clonedChildren}</List>
    </Style>
  )
}

const Style = styled.li<MenuGroupProps>`
  ${reset}
  ${space}
  ${color}
`

export const MenuGroup = styled(MenuGroupInternal)``
