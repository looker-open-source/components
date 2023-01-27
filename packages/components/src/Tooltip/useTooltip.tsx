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

import type { MouseEvent } from 'react'
import React, { useCallback, useMemo, useState } from 'react'
import type { UsePopperProps } from '../utils'
import {
  useAnimationState,
  useCallbackRef,
  useID,
  usePopper,
  useForkedRef,
} from '../utils'
import { Portal } from '../Portal'
import { DialogContext } from '../Dialog'
import { TooltipContent } from './TooltipContent'
import { TooltipSurface } from './TooltipSurface'
import type { UseTooltipProps } from './types'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export const useTooltip = ({
  canClose,
  canOpen,
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
  ariaDescribedById,
}: UseTooltipProps) => {
  const [isOpen, setIsOpen] = useState(initializeOpen)
  const { busy, className, renderDOM } = useAnimationState({
    enter: delay,
    exit: 'none',
    isOpen,
  })

  const [surfaceElement, surfaceCallbackRef] = useCallbackRef()
  const [newTriggerElement, setTriggerElement] = useState<HTMLElement | null>(
    null
  )
  // If the triggerElement is passed in props, use that instead of the new element
  const element = triggerElement ?? newTriggerElement

  const handleClose = useCallback(() => {
    if (canClose && !canClose()) return
    setIsOpen(false)
  }, [canClose])

  const handleMouseOut = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!isOpen) return

      const related = event.relatedTarget

      if (
        element &&
        (element === related || element.contains(related as Node))
      ) {
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
    },
    [element, surfaceElement, isOpen, handleClose]
  )

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

  const { placement, popperInstanceRef, style, targetRef } =
    usePopper(usePopperProps)

  const ref = useForkedRef(targetRef, surfaceCallbackRef)

  const guaranteedId = useID(id)

  // Memo all the things!
  return useMemo(() => {
    const popper =
      renderDOM && content && !disabled ? (
        <DialogContext.Provider
          value={{
            busy,
            closeModal: handleClose,
            id: guaranteedId,
          }}
        >
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
        </DialogContext.Provider>
      ) : null

    const handleOpen = (e: { currentTarget: HTMLElement }) => {
      setTriggerElement(e.currentTarget)

      const currentElement = triggerElement ?? e.currentTarget
      const shouldOpen = canOpen ? canOpen(currentElement) : true

      if (
        shouldOpen &&
        !disabled &&
        (!currentElement || !currentElement.dataset.notooltip)
      ) {
        setIsOpen(true)
      }
    }

    const enabledDomProps = disabled
      ? {}
      : {
          'aria-describedby':
            renderDOM && content
              ? ariaDescribedById || guaranteedId
              : undefined,
          className: renderDOM ? 'hover' : undefined,
        }

    return {
      domProps: {
        ...enabledDomProps,
        onBlur: handleClose,
        onFocus: handleOpen,
        onMouseOut: handleMouseOut,
        onMouseOver: handleOpen,
        ref: initializeOpen ? setTriggerElement : noop,
      },
      popperInstanceRef,
      tooltip: popper,
    }
  }, [
    busy,
    className,
    canOpen,
    content,
    disabled,
    guaranteedId,
    handleClose,
    handleMouseOut,
    initializeOpen,
    invert,
    maxWidth,
    placement,
    popperInstanceRef,
    ref,
    renderDOM,
    style,
    textAlign,
    triggerElement,
    width,
    ariaDescribedById,
  ])
}
