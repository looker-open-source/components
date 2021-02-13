/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { MouseEvent, useMemo, useState } from 'react'
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
import { UseTooltipProps } from './types'

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
    if (!disabled && (!element || !element.dataset.notooltip)) {
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
