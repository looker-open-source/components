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

import omit from 'lodash/omit'
import { reset, CompatibleHTMLProps, Theme } from '@looker/design-tokens'
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../Icon'
import {
  ListItemBackgroundColorProps,
  ListItemDimensions,
  listItemDimensionKeys,
} from './types'
import { listItemBackgroundColor } from './utils'

export interface ListItemLayoutProps
  extends CompatibleHTMLProps<HTMLLIElement>,
    ListItemBackgroundColorProps,
    ListItemDimensions {
  accessory?: boolean
  description?: ReactNode
  focusVisible?: boolean
}

/**
 * All of this drama is to deal with SC's behavior of auto-spreading the Element interface
 * used when styled extends a base type. E.g. (styled.li has `color` prop)
 */
const ListItemLayoutInternal = forwardRef(
  (props: ListItemLayoutProps, ref: Ref<HTMLLIElement>) => {
    return (
      <li
        {...omit(
          props,
          'accessory',
          'focusVisible',
          'hovered',
          'keyColor',
          'selected',
          [...listItemDimensionKeys]
        )}
        ref={ref}
        role="none"
      />
    )
  }
)

ListItemLayoutInternal.displayName = 'ListItemLayoutInternal'

/**
 * Make Safari (and older Chrome) happy.
 * See: https://github.com/rachelandrew/gridbugs#10-some-html-elements-cant-be-grid-containers
 **/
export const ListItemLayoutGrid = styled.div``

const listItemPadding = ({
  accessory,
  px: propsPx,
  py: propsPy,
  theme,
}: {
  accessory?: boolean
  theme: Theme
} & Pick<ListItemDimensions, 'px' | 'py'>) => {
  /**
   * The check for 0.375rem gets density = -1 ListItems to the desired 48px min height.
   * Without it, density = -1 ListItems would be at 44px.
   */
  const pt = propsPy === '0.375rem' ? propsPy : theme.space[propsPy]
  const pr = accessory ? '0' : theme.space[propsPx]
  const pb = pt
  const pl = theme.space[propsPx]

  return css`
    padding: ${pt} ${pr} ${pb} ${pl};
  `
}

export const ListItemLayout = styled(ListItemLayoutInternal)`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.text5};
  display: flex;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  list-style-type: none;
  min-height: ${({ height }) => height}px;
  outline: none;
  text-decoration: none;
  transition: ${({ theme: { easings, transitions } }) =>
    `background ${transitions.quick}ms ${easings.ease},
    color ${transitions.quick}ms ${easings.ease}`};

  & > button,
  & > a {
    ${reset}
    ${listItemBackgroundColor}
    ${listItemPadding}

    align-items: center;
    border: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: inherit;
    font-weight: inherit;
    outline: none;

    text-align: left;
    text-decoration: none;
    width: 100%;

    &:hover,
    &:focus {
      color: inherit;
      position: relative;
      text-decoration: none;
    }
  }

  ${({ focusVisible, theme: { colors } }) =>
    focusVisible &&
    `&:focus-within button:after,
  &:focus-within a:after {
    content: '';
    display:block;
    border: solid 2px ${colors.keyFocus};
    border-radius: 2px;
    margin: 0 1px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  `}

  ${Icon} {
    align-self: ${({ description }) => (description ? 'flex-start' : 'center')};
    transition: color
      ${({ theme }) => `${theme.transitions.quick}ms ${theme.easings.ease}`};
  }

  &[aria-current='true'] {
    background: ${({ theme: { colors } }) => colors.ui2};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  }

  &[disabled] {
    color: ${({ theme: { colors } }) => colors.text1};

    & > button,
    & > a {
      cursor: not-allowed;
    }

    &:hover {
      background: ${({ theme: { colors } }) => colors.background};
      color: ${({ theme: { colors } }) => colors.text1};
    }
  }
`
