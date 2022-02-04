/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { WidthProps } from '@looker/design-tokens'
import type { Placement } from '@popperjs/core'
import type { AriaAttributes, ReactNode, Ref, SyntheticEvent } from 'react'
import React, { useEffect, useMemo, useState } from 'react'
import { Flex } from '../Layout'
import { Portal } from '../Portal'
import { DialogContext } from '../Dialog'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import type { UsePopperProps } from '../utils'
import {
  useCallbackRef,
  useFocusTrap,
  usePopper,
  useScrollLock,
  useForkedRef,
  useID,
} from '../utils'
import type { UsePopoverToggleProps } from './usePopoverToggle'
import { usePopoverToggle } from './usePopoverToggle'
import { useVerticalSpace } from './useVerticalSpace'

type AriaHaspopupProps = Pick<AriaAttributes, 'aria-haspopup'>

export interface UsePopoverProps
  extends AriaHaspopupProps,
    WidthProps,
    UsePopoverToggleProps {
  /**
   * Content to render within the Popover surface.
   */
  content: ReactNode

  /**
   * Specify a callback to be called each time this Popover is closed
   */
  onClose?: () => void
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement

  portalElement?: HTMLDivElement | null

  /**
   * By default Popover will reposition itself if they overflow the widow.
   * You can use the pin property to override this behavior.
   */
  pin?: boolean

  /**
   * Set whether to disable scrolling outside the popover
   */
  disableScrollLock?: boolean

  /**
   * The trigger element ref to use (if absent, one will be created and returned)
   */
  triggerElement?: HTMLElement | null

  /**
   * Whether to trap focus within the popover
   * @default true
   */
  focusTrap?: boolean

  /**
   * Whether to lock scrolling outside the popover
   * @default true
   */
  scrollLock?: boolean

  /**
   * Custom surface component to render the content in
   * @private
   */
  surface?: typeof OverlaySurface

  /**
   * The id of the dialog (if absent, a random id will be generated)
   */
  id?: string
}

const useOpenWithoutElement = (
  isOpen: boolean,
  element: HTMLElement | null
) => {
  const [openWithoutElem, setOpenWithoutElem] = useState(
    isOpen && element === null
  )
  useEffect(() => {
    if (element && openWithoutElem) {
      setOpenWithoutElem(false)
    }
  }, [openWithoutElem, element])
  return openWithoutElem
}

export interface UsePopoverResponseDom extends AriaHaspopupProps {
  onClick: (event: SyntheticEvent) => void
  /**
   * Used by popper.js to position the OverlaySurface relative to the trigger
   */
  ref: Ref<any>
  'aria-expanded': boolean
}

export const usePopover = ({
  'aria-haspopup': ariaHaspopup,
  canClose,
  content,
  disabled,
  pin = false,
  isOpen: controlledIsOpen = false,
  onClose,
  placement: propsPlacement = 'bottom',
  setOpen: controlledSetOpen,
  triggerElement,
  triggerToggle = true,
  focusTrap = true,
  scrollLock = true,
  cancelClickOutside,
  surface,
  width,
  id,
}: UsePopoverProps) => {
  const [scrollElement, scrollRef] = useScrollLock({ disabled: !scrollLock })
  const [, focusRef] = useFocusTrap({ disabled: !focusTrap })

  const [newTriggerElement, callbackRef] = useCallbackRef()
  // If the triggerElement is passed in props, use that instead of the new element
  const element =
    typeof triggerElement === 'undefined' ? newTriggerElement : triggerElement

  const [isOpen, setOpen] = usePopoverToggle(
    {
      canClose,
      cancelClickOutside,
      isOpen: controlledIsOpen,
      setOpen: controlledSetOpen,
      triggerToggle,
    },
    scrollElement,
    element
  )

  const openWithoutElem = useOpenWithoutElement(isOpen, element)

  const handleOpen = (event: SyntheticEvent) => {
    if (!disabled) {
      setOpen(true)
    }
    event.stopPropagation()
    event.preventDefault()
  }

  const handleClose = () => {
    if (canClose && !canClose()) return
    setOpen(false)
    onClose && onClose()
  }

  const usePopperProps = useMemo<UsePopperProps>(
    () => ({
      anchor: element,
      options: {
        modifiers: [
          {
            enabled: !pin,
            name: 'flip',
            options: {
              flipVariations: true,
              flipVariationsByContent: true,
            },
          },
          {
            // No scroll event listener needed (we have useScrollLock)
            enabled: true,
            name: 'eventListeners',
            options: {
              scroll: false,
            },
          },
        ],
        placement: propsPlacement,
      },
    }),
    [element, pin, propsPlacement]
  )
  const { placement, popperInstanceRef, style, targetRef } = usePopper(
    usePopperProps
  )

  const verticalSpace = useVerticalSpace(
    element,
    pin,
    propsPlacement,
    isOpen,
    style
  )

  const ref = useForkedRef(targetRef, focusRef)

  const [containerElement, contentContainerRef] = useCallbackRef<HTMLElement>()

  const SurfaceComponent = surface || OverlaySurface

  id = useID(id)

  const popover = content && !openWithoutElem && isOpen && !disabled && (
    <DialogContext.Provider
      value={{
        closeModal: handleClose,
        id,
      }}
    >
      <Portal ref={scrollRef}>
        <SurfaceComponent
          aria-labelledby={`${id}-heading`}
          aria-modal={true}
          maxWidth={width}
          placement={placement}
          ref={ref}
          role="dialog"
          style={style}
        >
          <Flex
            alignItems="flex-start"
            borderRadius="inherit"
            flexDirection="column"
            id={id}
            maxHeight={`calc(${verticalSpace - 10}px - 1rem)`}
            overflowY="auto"
            ref={contentContainerRef}
          >
            {content}
          </Flex>
        </SurfaceComponent>
      </Portal>
    </DialogContext.Provider>
  )
  return {
    contentContainer: containerElement,
    domProps: {
      'aria-expanded': isOpen,
      'aria-haspopup': content && !disabled ? ariaHaspopup : false,
      onClick: handleOpen,
      ref: callbackRef,
    },
    isOpen,
    open: handleOpen,
    popover,
    popperInstanceRef,
    ref: callbackRef,
  }
}
