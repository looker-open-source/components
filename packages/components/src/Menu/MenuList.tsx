/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import { List, ListProps } from '../List'
import { NestedMenuProvider } from './NestedMenuProvider'
import { MenuGroup } from '.'

// TODO: Remove this interface and uses once MenuDivider is created
export interface GroupDividersProps {
  groupDividers?: boolean
}

export const MenuListInternal = forwardRef(
  (
    { children, ...props }: ListProps & GroupDividersProps,
    forwardedRef: Ref<HTMLUListElement>
  ) => {
    return (
      <NestedMenuProvider>
        <List role="menu" ref={forwardedRef} {...props}>
          {children}
        </List>
      </NestedMenuProvider>
    )
  }
)
MenuListInternal.displayName = 'MenuListInternal'

// TODO: Delete once MenuDivider component is created
const dividersStyle = ({ groupDividers = true }: GroupDividersProps) =>
  groupDividers &&
  css`
    ${MenuGroup} ~ ${MenuGroup} {
      border-top: 1px solid ${({ theme: { colors } }) => colors.ui2};
    }
  `

export const MenuList = styled(MenuListInternal)`
  ${dividersStyle}

  min-width: 12rem;
`
