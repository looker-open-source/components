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
import { reset, CompatibleHTMLProps } from '@looker/design-tokens'
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { ItemDimensions, itemDimensionKeys } from './types'

export interface ListItemLayoutProps
  extends CompatibleHTMLProps<HTMLLIElement>,
    ItemDimensions {
  description?: ReactNode
  focusVisible?: boolean
}

/**
 * All of this drama is to deal with SC's behavior of auto-spreading the Element interface
 * used when styled extends a base type. E.g. (styled.li has `color` prop)
 */
const ListItemWrapper = forwardRef(
  (props: ListItemLayoutProps, ref: Ref<HTMLLIElement>) => {
    return (
      <li
        {...omit(props, 'focusVisible', [...itemDimensionKeys])}
        ref={ref}
        role="none"
      />
    )
  }
)

ListItemWrapper.displayName = 'ListItemWrapper'

/**
 * Make Safari (and older Chrome) happy.
 * See: https://github.com/rachelandrew/gridbugs#10-some-html-elements-cant-be-grid-containers
 **/
export const ListItemLayoutGrid = styled.div``

export const ListItemLayout = styled(ListItemWrapper)`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.text5};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  list-style-type: none;
  outline: none;
  text-decoration: none;
  transition: ${({ theme: { easings, transitions } }) =>
    `background ${transitions.quick}ms ${easings.ease},
    color ${transitions.quick}ms ${easings.ease}`};

  button,
  a,
  & > div {
    ${reset}
    align-items: center;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: inherit;
    font-weight: inherit;
    min-height: ${({ height }) => `${height}px`};
    outline: none;
    /*
      This override gets density = -1 ListItems to the desired 48px min height.
      Without it, density = -1 ListItems would be at 44px.
     */
    padding: ${({ px, py, theme }) =>
      `${py === '0.375rem' ? py : theme.space[py]} ${theme.space[px]}`};
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
  &:focus-within a:after,
  &:focus-within div:after {
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

  &:hover {
    background: ${({ theme: { colors } }) => colors.ui1};
  }

  &[aria-current='true'] {
    background: ${({ theme: { colors } }) => colors.ui2};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  }

  &[disabled] {
    color: ${({ theme: { colors } }) => colors.text1};

    button,
    a {
      cursor: not-allowed;
    }

    &:hover {
      background: ${({ theme: { colors } }) => colors.background};
      color: ${({ theme: { colors } }) => colors.text1};
    }
  }
`
