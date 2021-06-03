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

import { CompatibleHTMLProps, shouldForwardProp } from '@looker/design-tokens'
import React, { FC } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { FocusVisibleProps } from '../utils'
import { FlexibleColor, ListItemRole, ListItemStatefulProps } from './types'
import { listItemBackgroundColor } from './utils'

export const ListItemLabelButton = styled.button`
  font-family: inherit;
`
export const ListItemLabelLink = styled.a``
export const ListItemLabelDiv = styled.div``

// Use listItemLabelCSS to target the internal button / link / div CSS of ListItem
export const listItemLabelCSS = (style: FlattenSimpleInterpolation) => css`
  > ${ListItemLabelButton}, > ${ListItemLabelLink}, > ${ListItemLabelDiv} {
    ${style}
  }
`

const listItemLabelElement = (itemRole: ListItemRole, disabled?: boolean) => {
  if (!disabled && itemRole === 'link') return ListItemLabelLink
  if (itemRole === 'none') return ListItemLabelDiv
  return ListItemLabelButton
}

const ListItemLabelLayout: FC<ListItemLabelProps> = ({
  children,
  disabled,
  itemRole = 'button',
  ...props
}) => {
  const Component = listItemLabelElement(
    itemRole,
    disabled
  ) as FC<ListItemLabelProps>

  return (
    <Component
      disabled={disabled}
      type={itemRole === 'button' || disabled ? 'button' : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}

type ListItemLabelProps = CompatibleHTMLProps<HTMLElement> &
  ListItemStatefulProps &
  FlexibleColor &
  FocusVisibleProps & {
    disabled?: boolean
    height?: number
    itemRole?: ListItemRole
  }

export const ListItemLabel = styled(ListItemLabelLayout).withConfig({
  shouldForwardProp: (prop) => prop === 'itemRole' || shouldForwardProp(prop),
})`
  ${({ height, itemRole }) => itemRole === 'none' && `min-height: ${height}px;`}
  ${listItemBackgroundColor}

  &:focus {
    ${({ focusVisible, theme }) =>
      focusVisible && `box-shadow: inset 0 0 0 2px ${theme.colors.keyFocus};`}
  }

  align-items: center;
  border: none;
  color: inherit;
  display: flex;
  flex: 1;
  font-size: inherit;
  font-weight: inherit;
  margin: 0; /* safari has default margin */
  min-width: 0;
  outline: none;
  text-align: left;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`
