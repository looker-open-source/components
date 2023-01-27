/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Colors } from '@looker/design-tokens'
import React from 'react'
import styled from 'styled-components'
import type { SwitchElementProps } from './types'

const getColor = ({ on, validationType }: SwitchElementProps): keyof Colors => {
  if (validationType === 'error') return 'criticalAccent'
  if (on) return 'keyAccent'
  return 'ui3'
}

export const Track = styled(({ className }: SwitchElementProps) => (
  <div className={className} />
))`
  background: ${({ theme, ...props }) => theme.colors[getColor(props)]};
  border-radius: ${({ theme }) => theme.radii.large};
  height: 14px;
  transition: ${({ theme }) => theme.transitions.rapid}ms;
  width: ${({ theme }) => theme.space.u9};
`
