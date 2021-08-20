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
import styled, {
  css,
  FlattenSimpleInterpolation,
  Interpolation,
} from 'styled-components'
import { FocusVisibleProps } from '../utils'
import { ListItemColorProp, ListItemRole, ListItemStatefulProps } from './types'
import { listItemBackgroundColor, listItemPaddingX } from './utils'

const Button = styled.button`
  font-family: inherit;
`
const Link = styled.a``
const Div = styled.div``

// Use listItemLabelCSS to target the internal button / link / div CSS of ListItem
export const listItemContentCSS = (
  style: FlattenSimpleInterpolation | Interpolation<any>
) => css`
  > ${Button}, > ${Link}, > ${Div} {
    ${style}
  }
`

/**
 * @deprecated Use `listItemContentCSS` instead
 */
export const listItemLabelCSS = listItemContentCSS

export type ListItemContentProps = CompatibleHTMLProps<HTMLElement> &
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

export const ListItemContent = styled(ListItemContentInternal)`
  ${listItemBackgroundColor}

  /*
  IconButtons with hovered / selected backgrounds sit above
  a non-absolutely positioned box-shadow. Absolute positioning
  and a z-index gets the box-shadow to sit above ListItem children
  with background colors.
 */
  ${({ focusVisible, theme }) =>
    focusVisible &&
    `
    &::after {
      bottom: 0;
      box-shadow: inset 0 0 0 2px ${theme.colors.keyFocus};
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }
  `}

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

  padding: 0; /* Remove default top and bottom padding */
  ${({ density }) => listItemPaddingX(density)}

  /*
    Supports absolutely positioned box-shadow
  */
  position: relative;

  text-align: left;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`
