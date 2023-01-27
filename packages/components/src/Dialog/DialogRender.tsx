/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React, { isValidElement, cloneElement } from 'react'
import type { UseDialogResponse, UseDialogResponseDom } from './useDialog'

export type DialogRenderProp = (props: UseDialogResponseDom) => ReactNode

const isRenderProp = (
  children: ReactNode | DialogRenderProp
): children is DialogRenderProp => typeof children === 'function'

type DialogRenderProps = UseDialogResponse & {
  children?: ReactNode
}

export const DialogRender = ({
  children,
  dialog,
  domProps,
}: DialogRenderProps) => {
  if (children === undefined) {
    return <>{dialog}</>
  } else if (isValidElement(children)) {
    children = cloneElement(children, {
      ...domProps,
    })
  } else if (isRenderProp(children)) {
    children = children(domProps)
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `Element "${typeof children}" can't be used as target for Drawer`
    )
  }

  return (
    <>
      {dialog}
      {children}
    </>
  )
}
