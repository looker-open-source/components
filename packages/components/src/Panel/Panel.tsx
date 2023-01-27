/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React, { isValidElement, cloneElement } from 'react'
import type { PanelProps, PanelRenderProp } from './types'
import { usePanel } from './usePanel'

const isRenderProp = (
  children: ReactNode | PanelRenderProp
): children is PanelRenderProp => typeof children === 'function'

export const Panel = ({ children, content, ...props }: PanelProps) => {
  const { domProps, panel } = usePanel({ content, ...props })

  if (isValidElement(children)) {
    children = cloneElement(children, {
      ...domProps,
    })
  } else if (isRenderProp(children)) {
    children = children(domProps)
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `Element "${typeof children}" can't be used as target for Panel`
    )
  }

  return (
    <>
      {children}
      {panel}
    </>
  )
}
