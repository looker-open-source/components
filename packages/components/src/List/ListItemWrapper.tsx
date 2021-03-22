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
import { StyledIconBase } from '@styled-icons/styled-icon'
import omit from 'lodash/omit'
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'
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

export const ListItemWrapper = styled(
  ListItemWrapperInternal
).withConfig<ListItemWrapperProps>({
  shouldForwardProp,
})`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.text5};
  display: flex;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  list-style-type: none;
  min-height: ${({ height }) => height}px;
  outline: none;
  text-decoration: none;

  & > button,
  & > a {
    ${listItemBackgroundColor}

    align-items: center;
    border: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: inherit;
    font-weight: inherit;
    margin: 0; /* safari has default margin */
    min-width: 0;
    outline: none;
    text-align: left;
    text-decoration: none;
    transition: ${({ theme: { easings, transitions } }) =>
      `background ${transitions.quick}ms ${easings.ease},
  color ${transitions.quick}ms ${easings.ease}`};
    width: 100%;

    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
  }

  ${({ focusVisible, theme }) =>
    focusVisible &&
    `
      &:focus-within > button,
      &:focus-within > a {
        box-shadow: inset 0 0 0 2px ${theme.colors.keyFocus};
      }
    `}

  ${StyledIconBase}, svg {
    align-self: ${({ description }) => (description ? 'flex-start' : 'center')};
    transition: color
      ${({ theme }) => `${theme.transitions.quick}ms ${theme.easings.ease}`};
  }

  &[aria-current='true'] {
    background: ${({ theme: { colors } }) => colors.ui2};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  }

  /**
    Styling for items that have nested menus
   */
  &[aria-expanded='true'] {
    background: ${({ theme: { colors } }) => colors.ui1};
  }

  &[disabled] {
    color: ${({ theme: { colors } }) => colors.text1};

    & > button,
    & > a {
      cursor: not-allowed;
    }

    &:hover {
      color: ${({ theme: { colors } }) => colors.text1};
    }
  }
`
