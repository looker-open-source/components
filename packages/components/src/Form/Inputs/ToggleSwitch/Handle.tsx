/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Colors } from '@looker/design-tokens'
import React from 'react'
import styled from 'styled-components'
import { rippleStyle } from '../../../Ripple'
import type { SwitchElementProps } from './types'

const getColor = ({ on, validationType }: SwitchElementProps): keyof Colors => {
  if (on) {
    if (validationType === 'error') return 'critical'
    return 'key'
  }
  return 'field'
}

export const Handle = styled(({ className, style }: SwitchElementProps) => (
  <div className={className} style={style} data-testid="handle">
    <div />
  </div>
))`
  ${rippleStyle}
  height: ${({ theme }) => theme.space.u6};
  left: 0;
  padding: ${({ theme }) => theme.space.u05};
  position: absolute;
  top: 0;
  transform: ${({ on, theme }) =>
    on ? `translateX(${theme.space.u4})` : undefined};
  transition: ${({ theme }) => theme.transitions.rapid}ms;
  width: ${({ theme }) => theme.space.u6};
  div {
    background: ${({ theme, ...props }) => theme.colors[getColor(props)]};
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.elevations.plus1};
    height: 100%;
    /* This nested relative position div allows the handle
    to appear on top of the ripple bg */
    position: relative;
    width: 100%;
  }
`
