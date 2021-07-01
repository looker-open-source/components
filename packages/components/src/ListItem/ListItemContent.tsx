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

import { CompatibleHTMLProps, DensityRamp } from '@looker/design-tokens'
import React, { FC } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { FocusVisibleProps } from '../utils'
import { ListItemColorProp, ListItemRole, ListItemStatefulProps } from './types'
import {
  listItemBackgroundColor,
  listItemDimensions,
  listItemPadding,
} from './utils'

const Button = styled.button`
  font-family: inherit;
`
const Link = styled.a``
const Div = styled.div``

// Use listItemLabelCSS to target the internal button / link / div CSS of ListItem
export const listItemContentCSS = (style: FlattenSimpleInterpolation) => css`
  > ${Button}, > ${Link}, > ${Div} {
    ${style}
  }
`

/**
 * @deprecated Use `listItemContentCSS` instead
 */
export const listItemLabelCSS = listItemContentCSS

type ListItemContentProps = CompatibleHTMLProps<HTMLElement> &
  ListItemStatefulProps &
  ListItemColorProp &
  FocusVisibleProps & {
    cursorPointer?: boolean
    density?: DensityRamp
    disabled?: boolean
    itemRole?: ListItemRole
  }

const ListItemContentInternal: FC<ListItemContentProps> = ({
  children,
  itemRole = 'button',
  ...props
}) => {
  if (!props.disabled && itemRole === 'link') {
    return <Link {...props}>{children}</Link>
  } else if (itemRole === 'none') {
    return <Div {...props}>{children}</Div>
  }

  return (
    <Button {...props} type="button">
      {children}
    </Button>
  )
}

const itemRoleNoneHeight = (density: DensityRamp = 0) => {
  const { height } = listItemDimensions(density)

  return css`
    min-height: ${height}px;
  `
}

export const ListItemContent = styled(ListItemContentInternal)`
  ${listItemBackgroundColor}

  &:focus {
    ${({ focusVisible, theme }) =>
      focusVisible && `box-shadow: inset 0 0 0 2px ${theme.colors.keyFocus};`}
  }

  align-items: center;
  border: none;
  color: inherit;
  cursor: ${({ cursorPointer }) => (cursorPointer ? 'pointer' : undefined)};
  display: flex;
  flex: 1;
  font-size: inherit;
  font-weight: inherit;
  margin: 0; /* safari has default margin */
  min-width: 0;
  outline: none;
  ${({ density }) => listItemPadding(density)}
  padding-bottom: ${({ itemRole }) => (itemRole === 'none' ? 0 : undefined)};
  padding-top: ${({ itemRole }) => (itemRole === 'none' ? 0 : undefined)};
  ${({ density, itemRole }) =>
    itemRole === 'none' && itemRoleNoneHeight(density)}

  text-align: left;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`
