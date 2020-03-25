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

import { CustomizableAttributes } from '@looker/design-tokens'
import { TextAlignProperty } from 'csstype'
import { Placement } from '@popperjs/core'
import React, { useMemo, useState, Ref, FC, ReactNode } from 'react'
import { ModalContext } from '../Modal'
import {
  useCallbackRef,
  usePopper,
  UsePopperProps,
  useForkedRef,
} from '../utils'
import { OverlaySurface, SurfaceStyleProps } from '../Overlay/OverlaySurface'
import { TooltipContent } from './TooltipContent'

interface EventHandlers {
  onBlur: () => void
  onFocus: () => void
  onMouseOut: (event: React.MouseEvent) => void
  onMouseOver: () => void
}

export interface UseTooltipProps {
  /**
   * Display and arrow that points to the trigger element on popovers
   * @default true
   */
  arrow?: boolean

  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean

  isOpen?: boolean
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   */
  placement?: Placement
  /**
   * Content to display inside the tooltip. Can be a string or JSX.
   */
  content?: ReactNode
  /**
   * Specify a fixed content width.
   * @default auto
   */
  width?: string
  /**
   * Specify the text alignment within tooltips.
   * @default center
   */
  textAlign?: TextAlignProperty

  /**
   * The trigger element ref to use (if absent, one will be created and returned)
   */
  triggerElement?: HTMLElement | null

  /**
   * If true, the useTooltip hook will return nothing
   */
  disabled?: boolean

  /**
   * Customizes the style of the tooltip
   */
  surfaceStyles?: SurfaceStyleProps
}

export const CustomizableTooltipAttributes: CustomizableAttributes = {}

export interface TooltipProps extends UseTooltipProps {
  content: ReactNode
  /**
   * Component to wrap. The HOC will listen for mouse events on this component, maintain the
   * state of isOpen accordingly, and pass that state into the children or "trigger" element
   */
  children: (eventsHandlers: EventHandlers, ref: Ref<any>) => ReactNode
}
export function useTooltip({
  arrow = true,
  canClose,
  content,
  isOpen: initializeOpen = false,
  width,
  textAlign,
  disabled,
  surfaceStyles,
  triggerElement,
  placement: propsPlacement = 'bottom',
}: UseTooltipProps) {
  const [isOpen, setIsOpen] = useState(initializeOpen)
  const [surfaceElement, surfaceCallbackRef] = useCallbackRef()
  const [newTriggerElement, callbackRef] = useCallbackRef()
  // If the triggerElement is passed in props, use that instead of the new element
  const element =
    typeof triggerElement === 'undefined' ? newTriggerElement : triggerElement

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => {
    if (canClose && !canClose()) return
    setIsOpen(false)
  }

  const handleMouseOut = (event: React.MouseEvent) => {
    if (!isOpen) return

    const related = event.relatedTarget

    if (element && (element === related || element.contains(related as Node))) {
      return
    }

    if (
      surfaceElement &&
      (surfaceElement === related || surfaceElement.contains(related as Node))
    ) {
      return
    }

    window.requestAnimationFrame(() => {
      handleClose()
    })
  }

  const eventHandlers = {
    onBlur: handleClose,
    onFocus: handleOpen,
    onMouseOut: handleMouseOut,
    onMouseOver: handleOpen,
  }

  const usePopperProps: UsePopperProps = useMemo(
    () => ({
      anchor: element,
      arrow,
      options: {
        modifiers: [
          {
            enabled: true,
            name: 'flip',
            options: {
              flipVariations: true,
            },
          },
        ],
        placement: propsPlacement,
      },
    }),
    [arrow, element, propsPlacement]
  )
  const { arrowProps, placement, style, targetRef } = usePopper(usePopperProps)

  const ref = useForkedRef(targetRef, surfaceCallbackRef)

  const popper =
    isOpen && content && !disabled ? (
      <ModalContext.Provider value={{ closeModal: handleClose }}>
        <OverlaySurface
          arrow={arrow}
          arrowProps={arrowProps}
          eventHandlers={{ onMouseOut: handleMouseOut }}
          placement={placement}
          ref={ref}
          style={style}
          zIndex={CustomizableTooltipAttributes.zIndex}
          backgroundColor="palette.charcoal600"
          borderRadius="medium"
          boxShadow={3}
          color="palette.charcoal000"
          {...surfaceStyles}
        >
          <TooltipContent width={width} textAlign={textAlign}>
            {content}
          </TooltipContent>
        </OverlaySurface>
      </ModalContext.Provider>
    ) : null

  return {
    eventHandlers,
    ref: callbackRef,
    tooltip: popper,
  }
}

export const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  const { eventHandlers, tooltip, ref } = useTooltip(props)
  return (
    <>
      {tooltip}
      {children(eventHandlers, ref)}
    </>
  )
}
