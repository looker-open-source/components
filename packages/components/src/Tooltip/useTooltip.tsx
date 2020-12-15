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

import { Property } from 'csstype'
import { Placement } from '@popperjs/core'
import { Transitions } from '@looker/design-tokens'
import React, { MouseEvent, ReactNode, useMemo, useState } from 'react'
import {
  useAnimationState,
  useCallbackRef,
  useID,
  usePopper,
  UsePopperProps,
  useForkedRef,
} from '../utils'
import { Portal } from '../Portal'
import { TooltipContent } from './TooltipContent'
import { TooltipSurface } from './TooltipSurface'

export interface UseTooltipProps {
  /**
   * Specify a callback to be called before trying to close the Tooltip. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Tooltip is closed
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
   * Specify a fixed max-width.
   * @default none
   */
  maxWidth?: string
  /**
   * Specify the text alignment within tooltips.
   * @default center
   */
  textAlign?: Property.TextAlign

  /**
   * The id of the span containing the tooltip text (if absent, a random id will be generated)
   */
  id?: string

  /**
   * Tooltip background and text color is inverted from the page default
   * @default true
   * @private
   */
  invert?: boolean

  /**
   * The trigger element ref to use (if absent, one will be created and returned)
   */
  triggerElement?: HTMLElement | null

  /**
   * If true, the useTooltip hook will return nothing
   */
  disabled?: boolean

  /**
   * Delay
   */
  delay?: Transitions
}

export interface UseTooltipResponseDom {
  'aria-describedby': string
  className: string
  onBlur: () => void
  onFocus: () => void
  onMouseOut: (event: MouseEvent<HTMLElement>) => void
  onMouseOver: () => void
  /**
   * Used by popper.js to position the OverlaySurface relative to the trigger
   */
  ref: (node: HTMLElement | null) => void
}

export function useTooltip({
  canClose,
  content,
  isOpen: initializeOpen = false,
  width,
  maxWidth = '30rem',
  textAlign,
  disabled,
  id,
  invert,
  triggerElement,
  placement: propsPlacement = 'bottom',
  delay = 'intricate',
}: UseTooltipProps) {
  const [isOpen, setIsOpen] = useState(initializeOpen)
  const { busy, className, renderDOM } = useAnimationState(
    isOpen,
    delay,
    'none'
  )

  const [surfaceElement, surfaceCallbackRef] = useCallbackRef()
  const [newTriggerElement, callbackRef] = useCallbackRef()
  // If the triggerElement is passed in props, use that instead of the new element
  const element =
    typeof triggerElement === 'undefined' ? newTriggerElement : triggerElement

  const handleOpen = () => {
    if (!element || !element.dataset.notooltip) {
      setIsOpen(true)
    }
  }
  const handleClose = () => {
    if (canClose && !canClose()) return
    setIsOpen(false)
  }

  const handleMouseOut = (event: MouseEvent<HTMLElement>) => {
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

  const usePopperProps: UsePopperProps = useMemo(
    () => ({
      anchor: element,
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
    [element, propsPlacement]
  )
  const { placement, popperInstanceRef, style, targetRef } = usePopper(
    usePopperProps
  )

  const ref = useForkedRef(targetRef, surfaceCallbackRef)

  const guaranteedId = useID(id)

  const popper =
    renderDOM && content && !disabled ? (
      <Portal>
        <TooltipSurface
          aria-busy={busy ? true : undefined}
          className={className}
          eventHandlers={{ onMouseOut: handleMouseOut }}
          placement={placement}
          ref={ref}
          style={style}
          maxWidth={maxWidth}
          invert={invert}
        >
          <TooltipContent
            role="tooltip"
            id={guaranteedId}
            width={width}
            textAlign={textAlign}
          >
            {content}
          </TooltipContent>
        </TooltipSurface>
      </Portal>
    ) : null

  return {
    domProps: {
      'aria-describedby': guaranteedId,
      className: renderDOM ? 'hover' : '',
      onBlur: handleClose,
      onFocus: handleOpen,
      onMouseOut: handleMouseOut,
      onMouseOver: handleOpen,
      ref: callbackRef,
    },
    popperInstanceRef,
    tooltip: popper,
  }
}
