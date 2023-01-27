/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React from 'react'
import type { UseDialogProps } from './useDialog'
import { useDialog } from './useDialog'
import type { DialogRenderProp } from './DialogRender'
import { DialogRender } from './DialogRender'

export interface DialogProps extends Omit<UseDialogProps, 'content'> {
  children?: DialogRenderProp | ReactNode
  /**
   * Content to rendered within the Dialog surface.
   * SOON TO BE @required
   *
   * NOTE: _VERY SOON_ this will become a required property.
   * DO NOT create new instances of `Dialog` without a content.
   * Prop is only marked optional to support legacy implementations.
   *
   * If `content` is not supplied `children` will used as the Dialog content instead
   *
   * I18n recommended: content that is user visible should be treated for i18n
   */
  content?: ReactNode
}

export const Dialog = ({ children, content, ...props }: DialogProps) => {
  /**
   * This is a short-term workaround for existing interface
   * Remove when `content` is no longer marked as optional (very soon!)
   */
  if (!content && children) {
    content = children
    children = undefined
  }

  const dialogProps = useDialog({ content, ...props })

  /**
   * Second part of short-term workaround. Remove when `content` is no longer optional
   */
  if (!content && !children) {
    // eslint-disable-next-line no-console
    console.error('Dialog cannot be used without specifying content')
    return null
  }

  return <DialogRender {...dialogProps}>{children}</DialogRender>
}
