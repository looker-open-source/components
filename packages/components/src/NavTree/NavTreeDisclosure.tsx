/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import pick from 'lodash/pick'
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

export const NavTreeDisclosure = styled(
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
  }: ListItemContentProps) => {
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
