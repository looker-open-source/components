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

import omit from 'lodash/omit'
import React, {
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useState,
} from 'react'
import { Dialog, DialogProps } from './Dialog'

type DialogRenderProp = (dialogProps: {
  onClick: () => void
  className?: string
  role?: string
  'aria-expanded'?: boolean
}) => ReactNode

function isRenderProp(
  children: ReactNode | DialogRenderProp
): children is DialogRenderProp {
  return typeof children === 'function'
}

export interface DialogManagerProps extends DialogProps {
  children?: DialogRenderProp | ReactNode
  /**
   * Content that will be placed inside the Dialog
   * @required
   */
  content: ReactNode
  /**
   * Specify a callback to be called before trying to close the Dialog. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Dialog is closed
   */
  canClose?: () => boolean
}

export const DialogManager: FC<DialogManagerProps> = ({
  canClose,
  content,
  children,
  onClose,
  ...props
}) => {
  const [isOpen, setOpen] = useState(props.isOpen || false)
  const open = () => setOpen(true)
  const close = () => {
    if (canClose && !canClose()) return
    onClose && onClose()
    setOpen(false)
  }

  const dialogPropsLabeled = {
    'aria-expanded': isOpen,
    className: isOpen ? 'active' : '',
    onClick: open,
    role: 'button',
  }

  const dialog = (
    <Dialog isOpen={isOpen} onClose={close} {...omit(props, 'isOpen')}>
      {content}
    </Dialog>
  )

  let target = children

  if (isValidElement(children)) {
    target = cloneElement(children, {
      ...dialogPropsLabeled,
      className: isOpen
        ? `${children.props.className} active`
        : children.props.className,
    })
  } else if (isRenderProp(children)) {
    target = children(dialogPropsLabeled)
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `Element "${typeof target}" can't be used as target for DialogManager`
    )
  }

  return (
    <>
      {dialog}
      {target}
    </>
  )
}
