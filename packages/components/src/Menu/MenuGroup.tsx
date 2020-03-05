/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import React, { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'
import {
  color,
  CompatibleHTMLProps,
  reset,
  SpaceProps,
  space,
} from '@looker/design-tokens'
import { BackgroundColorProps } from 'styled-system'
import { HeadingProps } from '../Text/Heading'
import { List } from '../List'

import { MenuItemStyleContext } from './MenuContext'
import { MenuGroupLabel } from './MenuGroupLabel'
import { MenuSharedProps, useMenuItemStyleContext } from './MenuItem'

export interface MenuGroupProps
  extends Omit<CompatibleHTMLProps<HTMLElement>, 'label'>,
    BackgroundColorProps,
    SpaceProps,
    MenuSharedProps {
  label?: ReactNode
  labelProps?: HeadingProps
  labelStyles?: CSSProperties
}

const MenuGroupInternal: FC<MenuGroupProps> = ({
  children,
  compact,
  label,
  labelProps,
  labelStyles,
  customizationProps,
  ...boxProps
}) => {
  const mergedContextValue = useMenuItemStyleContext({
    compact,
    customizationProps,
  })
  return (
    <MenuItemStyleContext.Provider value={mergedContextValue}>
      <MenuGroupWrapper
        {...boxProps}
        backgroundColor={customizationProps && customizationProps.bg}
        py="small"
      >
        {label && (
          <MenuGroupLabel
            backgroundColor={customizationProps && customizationProps.bg}
            labelStyles={labelStyles}
            labelContent={label}
            {...labelProps}
          />
        )}
        <List nomarker>{children}</List>
      </MenuGroupWrapper>
    </MenuItemStyleContext.Provider>
  )
}

const MenuGroupWrapper = styled.li<MenuGroupProps>`
  ${reset}
  ${space}
  ${color}
`

export const MenuGroup = styled(MenuGroupInternal)``
