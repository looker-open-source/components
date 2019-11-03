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

import omit from 'lodash/omit'
import {
  CompatibleHTMLProps,
  color,
  space,
  typography,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../../Icon'
import { MenuItemStyle } from './menuItemStyle'

export interface MenuListItemProps extends CompatibleHTMLProps<HTMLLIElement> {
  current?: boolean
  currentMarker?: boolean
  itemStyle: MenuItemStyle
}

const currentBorder = (props: MenuListItemProps) => {
  if (!props.current || !props.currentMarker) return false

  return css`
    ::before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: ${props.itemStyle.marker.color};
      width: ${props.itemStyle.marker.size}px;
    }
  `
}

const hoverStyles = (props: MenuListItemProps) => {
  if (props.current) return false

  return css`
    &:hover {
      background: ${props.itemStyle.hover.bg};
      color: ${props.itemStyle.hover.color};
      font-size: ${props.itemStyle.hover.color};
      font-weight: ${props.itemStyle.hover.color};

      ${Icon} {
        color: ${props.itemStyle.hover.iconColor};
      }
    }
  `
}

const iconColor = (props: MenuListItemProps) =>
  props.current
    ? props.itemStyle.current.iconColor
    : props.itemStyle.initial.iconColor

/**
 * All of this drama is to deal with SC's behavior of auto-spreading the Element interface
 * used when styled extends a base type. E.g. (styled.li has `color` prop)
 */
const Li = forwardRef((props: MenuListItemProps, ref: Ref<HTMLLIElement>) => {
  const domProps = omit(props, 'current', 'currentMarker', 'itemStyle')
  return <li {...domProps} ref={ref} />
})

Li.displayName = 'Li'

export const MenuItemListItem = styled(Li)<MenuListItemProps>`
  ${color}
  ${space}
  ${typography}

  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  text-decoration: none;
  transition: ${props =>
    `background ${props.theme.transitions.durationQuick} ${props.theme.easings.ease},
    color ${props.theme.transitions.durationQuick} ${props.theme.easings.ease}`};

  &:focus-within {
    box-shadow: ${props => `0 0 3px 1px ${props.theme.colors.palette.blue400}`};
    z-index: 1;
  }

  ${currentBorder};
  ${hoverStyles};

  ${Icon} {
    color: ${iconColor};
    transition: color
      ${props =>
        `${props.theme.transitions.durationQuick} ${props.theme.easings.ease}`};
  }
`
