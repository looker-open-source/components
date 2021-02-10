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

import React, { FC, ReactNode, isValidElement, cloneElement } from 'react'
import { UsePanelResponseDom, usePanel, UsePanelProps } from './usePanel'

export type PanelRenderProp = (props: UsePanelResponseDom) => ReactNode

export interface PanelProps extends Omit<UsePanelProps, 'content'> {
  children?: PanelRenderProp | ReactNode
  content: ReactNode
}

const isRenderProp = (
  children: ReactNode | PanelRenderProp
): children is PanelRenderProp => typeof children === 'function'

export const Panel: FC<PanelProps> = ({ children, content, ...props }) => {
  const { domProps, panel } = usePanel({ content, ...props })

  if (children === undefined) {
    return <>{panel}</>
  } else if (isValidElement(children)) {
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
