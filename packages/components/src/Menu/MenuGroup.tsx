/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { CSSProperties, FC, ReactNode, RefObject, useRef } from 'react'
import styled from 'styled-components'
import {
  color,
  palette,
  CompatibleHTMLProps,
  reset,
  SpaceProps,
  space,
} from '@looker/design-tokens'
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
  label?: ReactNode
  labelProps?: HeadingProps
  labelStyles?: CSSProperties
  customizationProps?: MenuItemCustomization
  compact?: boolean
}

export interface MenuGroupWithChildrenProps extends MenuGroupProps {
  children: ReactNode
}

const MenuGroupInternal: FC<MenuGroupWithChildrenProps> = ({
  children,
  label,
  labelProps,
  labelStyles,
  ...props
}) => {
  const { customizationProps, compact, ...boxProps } = props

  const labelShimRef: RefObject<any> = useRef()
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

  const clonedChildren = cloneMenuListChildren(children as JSX.Element[], {
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
