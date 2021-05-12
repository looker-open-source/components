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
import { ListColor, ListItemDimensions, listItemDimensionKeys } from './types'

export interface ListItemWrapperProps
  extends CompatibleHTMLProps<HTMLElement>,
    ListItemDimensions {
  color: ListColor
  description?: ReactNode // Should be eventually deleted because the CSS could be handled in layout pieces
  focusVisible?: boolean
  renderAsDiv?: boolean
}

const ListItemWrapperInternal = forwardRef(
  (
    { renderAsDiv, ...restProps }: ListItemWrapperProps,
    ref: Ref<HTMLElement>
  ) => {
    const Component = renderAsDiv ? 'div' : 'li'

    return (
      <Component
        {...omit(
          restProps,
          'color',
          'current',
          'focusVisible',
          'hovered',
          'selected',
          [...listItemDimensionKeys]
        )}
        ref={ref as Ref<any>}
        role="none"
      />
    )
  }
)

ListItemWrapperInternal.displayName = 'ListItemWrapperInternal'

export const ListItemWrapper = styled(ListItemWrapperInternal)
  .withConfig<ListItemWrapperProps>({
    shouldForwardProp: (prop) =>
      ['renderAsDiv'].includes(prop) ? true : shouldForwardProp(prop),
  })
  .attrs(({ color = 'text5' }) => ({ color }))`
  align-items: center;
  display: flex;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  list-style-type: none;
  min-height: ${({ height }) => height}px;
  outline: none;
  text-decoration: none;

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
    & > * {
      cursor: not-allowed;
    }

    &:hover {
      color: ${({ theme: { colors } }) => colors.text1};
    }
  }
`
