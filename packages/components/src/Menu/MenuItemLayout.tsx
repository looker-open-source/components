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
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'

export interface MenuListItemProps extends CompatibleHTMLProps<HTMLLIElement> {
  compact?: boolean
  focusVisible?: boolean
  hasIcon?: boolean
}

/**
 * All of this drama is to deal with SC's behavior of auto-spreading the Element interface
 * used when styled extends a base type. E.g. (styled.li has `color` prop)
 */
const MenuItemLayoutInternal = forwardRef(
  (props: MenuListItemProps, ref: Ref<HTMLLIElement>) => {
    return (
      <li
        {...omit(props, 'compact', 'focusVisible', 'hasIcon')}
        ref={ref}
      />
    )
  }
)

MenuItemLayoutInternal.displayName = 'MenuItemLayoutInternal'

export const MenuItemLayout = styled(MenuItemLayoutInternal)`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.text1};
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  outline: none;
  text-decoration: none;
  transition: ${({ theme: { easings, transitions } }) =>
    `background ${transitions.durationQuick} ${easings.ease},
    color ${transitions.durationQuick} ${easings.ease}`};

  button,
  a {
    ${reset}

    align-items: center;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    display: grid;
    flex: 1;
    font-size: inherit;
    font-weight: inherit;
    grid-gap: 0.5rem;
    grid-template-columns: ${({ hasIcon }) => (hasIcon ? '20px 1fr' : '1fr')};
    outline: none;
    padding: ${({
      compact,
      theme: {
        space: { xxsmall, small, medium },
      },
    }) => (compact ? `${xxsmall} ${medium}` : `${small} ${medium}`)};
    text-align: left;
    text-decoration: none;

    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
  }

  ${({ focusVisible, theme: { colors } }) =>
    focusVisible &&
    `&:focus-within button,
  &:focus-within a {
  box-shadow: 0 0 3px 1px ${colors.key};
  }
  `}

  ${Icon} {
    color: ${({ theme: { colors } }) => colors.text6};
    transition: color
      ${({ theme: { easings, transitions } }) =>
        `${transitions.durationQuick} ${easings.ease}`};
  }

  :hover,
  &[aria-current] {
    background: ${({ theme: { colors } }) => colors.ui1};
    color: ${({ theme: { colors } }) => colors.text0};

    ${Icon} {
      color: ${({ theme: { colors } }) => colors.text1};
    }
  }

  &[aria-current] {
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  }
`
