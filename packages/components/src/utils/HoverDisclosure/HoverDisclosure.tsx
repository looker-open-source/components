/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CSSProperties, ReactNode } from 'react'
import React, { useContext } from 'react'
import { HoverDisclosureContext } from './HoverDisclosureContext'

export interface HoverDisclosureProps {
  visible?: boolean
  /**
   * In some circumstances it's required to reserve space for the hidden content
   * before it is revealed. Specifying this will reserve a space of the specified
   * width (in pixels)
   */
  width?: number
  children?: ReactNode
}

export const HoverDisclosure = ({
  children,
  width,
  visible,
}: HoverDisclosureProps) => {
  const context = useContext(HoverDisclosureContext)
  const isVisible = visible || context.visible

  const style: CSSProperties = width
    ? { flexBasis: width, flexShrink: 0, width }
    : {}

  return <div style={style}>{isVisible ? children : null}</div>
}
