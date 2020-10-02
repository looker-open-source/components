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

import React, {
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useState,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import { ResponsiveValue } from 'styled-system'
import { Portal } from '../Portal'
import { useFocusTrap, useScrollLock, useControlWarn } from '../utils'
import { Backdrop } from '../Dialog/Backdrop'
import { DialogContext } from '../Dialog/DialogContext'
import { DrawerSurface } from './DrawerSurface'

export interface UseDrawerProps {
  /**
   * Content to rendered within the Drawer surface.
   * @required
   */
  content: ReactNode

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of the specified width or the viewport width.
   * @default '30rem'
   */
  width?: ResponsiveValue<string>

  /**
   * Specify the edge to attach the Drawer surface to.
   * COMING SOON: 'left' | 'top' | 'bottom'
   * @default 'right'
   */
  placement?: 'right'

  /**
   * Drawer will be displayed immediately when rendered.
   * NOTE: Once rendered, changes to this value will be ignored. This property cannot
   * be used treat this component as "controlled"
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Drawer will be displayed immediately when rendered.
   * @default undefined
   */
  isOpen?: boolean

  /**
   * Specify a callback to be called each time this Dialog is closed
   */
  onClose?: () => void

  /**
   * Specify a callback to be called before trying to close the Popover. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Popover is closed
   */
  canClose?: () => boolean
}

export interface DrawerProps extends UseDrawerProps {
  children?: DrawerRenderProp | ReactNode
}

type DrawerRenderProp = (drawerProps: {
  onClick: () => void
  className?: string
  role?: string
  'aria-expanded'?: boolean
}) => ReactNode

function isRenderProp(
  children: ReactNode | DrawerRenderProp
): children is DrawerRenderProp {
  return typeof children === 'function'
}

export const useDrawer = ({
  content,
  defaultOpen = false,
  width = '30rem',
  canClose,
  onClose,
  ...props
}: UseDrawerProps) => {
  const [uncontrolledIsOpen, setControlledIsOpen] = useState(defaultOpen)
  const isControlled = useControlWarn({
    controllingProps: ['isOpen'],
    isControlledCheck: () => props.isOpen !== undefined,
    name: 'useDrawer',
  })

  const isOpen = isControlled ? props.isOpen : uncontrolledIsOpen

  const {
    callbackRef: focusRef,
    disable: disableFocusTrap,
    enable: enableFocusTrap,
    isEnabled: focusTrapEnabled,
    trapRef: focusTrapRef,
  } = useFocusTrap(isOpen)
  const [, portalRef] = useScrollLock(focusRef)

  const handleOpen = () => {
    !isControlled && setControlledIsOpen(true)
  }

  const handleClose = () => {
    if (canClose && !canClose()) return
    !isControlled && setControlledIsOpen(false)
    onClose && onClose()
  }

  const drawer = (
    <DialogContext.Provider
      value={{
        closeModal: handleClose,
        disableFocusTrap,
        enableFocusTrap,
        focusTrapEnabled,
        focusTrapRef,
      }}
    >
      <CSSTransition
        classNames="modal"
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={{ enter: 0, exit: 250 }}
      >
        {(state: string) => (
          <Portal ref={portalRef}>
            <Backdrop className={state} onClick={handleClose} visible />
            <DrawerSurface className={state} width={width}>
              {content}
            </DrawerSurface>
          </Portal>
        )}
      </CSSTransition>
    </DialogContext.Provider>
  )

  return {
    drawer,
    isOpen,
    open: handleOpen,
  }
}

export const Drawer: FC<DrawerProps> = ({ children, ...props }) => {
  const drawerProps = useDrawer(props)

  const propsLabeled = {
    'aria-expanded': drawerProps.isOpen,
    className: drawerProps.isOpen ? 'active' : '',
    onClick: drawerProps.open,
    role: 'button',
  }

  let target = children

  if (children === undefined) {
    return drawerProps.drawer
  } else if (isValidElement(children)) {
    target = cloneElement(children, {
      ...propsLabeled,
      className: drawerProps.isOpen
        ? `${children.props.className} active`
        : children.props.className,
    })
  } else if (isRenderProp(children)) {
    target = children(propsLabeled)
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `Element "${typeof target}" can't be used as target for Drawer`
    )
  }

  return (
    <>
      {drawerProps.drawer}
      {target}
    </>
  )
}
