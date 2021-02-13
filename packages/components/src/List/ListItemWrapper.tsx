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

import { CompatibleHTMLProps, reset } from '@looker/design-tokens'
import omit from 'lodash/omit'
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { Truncate } from '../Truncate'
import {
  ListItemStatefulWithHoveredProps,
  ListItemDimensions,
  listItemDimensionKeys,
} from './types'
import { listItemBackgroundColor } from './utils'

export interface ListItemWrapperProps
  extends CompatibleHTMLProps<HTMLLIElement>,
    ListItemStatefulWithHoveredProps,
    ListItemDimensions {
  description?: ReactNode // Should be eventually deleted because the CSS could be handled in layout pieces
  focusVisible?: boolean
}

const ListItemWrapperInternal = forwardRef(
  (props: ListItemWrapperProps, ref: Ref<HTMLLIElement>) => {
    return (
      <li
        {...omit(
          props,
          'current',
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

ListItemWrapperInternal.displayName = 'ListItemWrapperInternal'

export const ListItemWrapper = styled(ListItemWrapperInternal)`
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

    align-items: center;
    border: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
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
    `&:focus-within > button:after,
    &:focus-within > a:after {
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

  ${Truncate} {
    line-height: 1;
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
