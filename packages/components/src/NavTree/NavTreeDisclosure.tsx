/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import pick from 'lodash/pick'
import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import type { ListItemContentProps } from '../ListItem'
import {
  rippleHandlerKeys,
  rippleStyle,
  useBoundedRipple,
  useRippleHandlers,
} from '../Ripple'
import { generateIndent } from '../Tree/utils'
import { listItemBackgroundColor } from '../ListItem/utils'

export const NavTreeDisclosure = styled<FC<ListItemContentProps>>(
  ({
    children,
    className,
    disabled,

    // destructure to omit these styling-only props
    hovered,
    ripple,
    // end destructure to omit

    selected,
    style,
    ...props
  }) => {
    const { callbacks, ...ripplePropsRest } = useBoundedRipple<HTMLLIElement>({
      className,
      color: selected ? 'key' : 'neutral',
      style,
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      pick(props, rippleHandlerKeys),
      disabled
    )

    const rippleProps = { ...ripplePropsRest, ...rippleHandlers }

    return (
      <li {...props} {...rippleProps}>
        {children}
      </li>
    )
  }
)`
  ${generateIndent}
  ${listItemBackgroundColor}
  ${rippleStyle}

  color: ${({ theme }) => theme.colors.text5};
  display: flex;
`
