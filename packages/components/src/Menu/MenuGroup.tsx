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

import React, { FC, ReactNode, useContext, useState } from 'react'
import styled from 'styled-components'
import { CompatibleHTMLProps, reset } from '@looker/design-tokens'
import { UnorderedList } from '../UnorderedList'
import { MenuItemContext } from './MenuItemContext'
import { MenuGroupLabel } from './MenuGroupLabel'

export interface MenuGroupProps
  extends Omit<CompatibleHTMLProps<HTMLElement>, 'label'> {
  compact?: boolean
  label?: ReactNode
  className?: string
}

const MenuGroupLayout: FC<MenuGroupProps> = ({
  children,
  className,
  compact,
  label,
}) => {
  const [renderIconPlaceholder, setRenderIconPlaceholder] = useState(false)

  const {
    compact: contextCompact,
    renderIconPlaceholder: contextRenderIconPlaceholder,
    setRenderIconPlaceholder: contextSetRenderIconPlaceholder,
    ...restContext
  } = useContext(MenuItemContext)

  const context = {
    ...restContext,
    compact: compact === undefined ? contextCompact : compact,
    renderIconPlaceholder:
      contextRenderIconPlaceholder || renderIconPlaceholder,
    setRenderIconPlaceholder:
      contextSetRenderIconPlaceholder || setRenderIconPlaceholder,
  }

  return (
    <li className={className}>
      <MenuItemContext.Provider value={context}>
        {label && <MenuGroupLabel>{label}</MenuGroupLabel>}
        <UnorderedList dense>{children}</UnorderedList>
      </MenuItemContext.Provider>
    </li>
  )
}

export const MenuGroup = styled(MenuGroupLayout)`
  ${reset}
  list-style-type: none;
  padding: ${({ theme: { space } }) => space.xsmall} 0;
`
