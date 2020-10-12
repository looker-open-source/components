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

import React, { FC, ReactNode } from 'react'
import { useDialog, UseDialogProps } from './useDialog'
import { DialogRender, DialogRenderProp } from './DialogRender'

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
   */
  content?: ReactNode
}

export const Dialog: FC<DialogProps> = ({ children, content, ...props }) => {
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
